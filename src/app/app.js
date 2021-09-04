import { useEffect } from 'react';
import { TranslatorProvider } from 'react-translate';

import translations from '../shared/i18n'; 

import withDatabase from '../shared/database';
import { withContextConsumer } from './withContexts';

import Routes from '../shared/routes';
import routes from '../settings/routes';

import Spinner from '../shared/components/loader';
import Error from '../shared/components/error';

import Install from './install';

const App = ({ db, loading, errors, settings }) => {

  const props = {
    db: db,
    setloading: loading.dispatch,
    setError: errors.dispatch,
    settings: settings,
  }

  useEffect(() => {
    loading.dispatch({ type: 'start' });

    db.record('info')
      .then((setting) => (
        settings.dispatch({ type: 'set', setting })
      ))
      .catch(({ status, message, name }) => (
        errors.dispatch({ type: 'set', code: status, description: message, name })
      ))
      .then(() => loading.dispatch({ type: 'finish' }))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading.state) {
    return <Spinner />
  }

  if(errors.state.error) {
    return <Error {...errors.state} />
  }

  return (
    <TranslatorProvider translations={translations[settings.state.lang]}>
      {
        !!settings.state.installed
        ? <Routes routes={routes} {...props} />
        : <Install {...props} />
      }
    </TranslatorProvider>
  )
}

export default withContextConsumer(withDatabase(App)('settings'))