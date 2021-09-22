import { useTranslate } from 'react-translate';
import { withContextConsumer } from '../../withContexts';

import Welcome from './welcome';

const Components = ({ step, next, before, errors }) => {
  const t = useTranslate('install');
  const props = {
    next,
    before,
  }

  switch (step) {
    case 0:
      return <Welcome {...props} />
    default:
      errors.dispatch({ 
        type: 'set',
        code: "500",
        description: `Step ${step} does not exist`,
        name: 'error_step_install',
      })
      return <>Error</>
  }
  
}

export default withContextConsumer(Components)