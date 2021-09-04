import ErrorsContext, { ErrorProvider } from '../shared/contexts/errors';
import LoadingContext, { LoadingProvider } from '../shared/contexts/loader';
import SettingsContext, { SettingsProvider } from '../shared/contexts/settings';

export const withContextProvider = Component => props => (
  <LoadingProvider>
    <ErrorProvider>
      <SettingsProvider>
        <Component {...props} />
      </SettingsProvider>
    </ErrorProvider>
  </LoadingProvider>
)


export const withContextConsumer = Component => props => (
  <LoadingContext.Consumer>
    {loading => (
      <ErrorsContext.Consumer>
        {errors => (
          <SettingsContext.Consumer>
            {settings => (
              <Component
                loading={loading}
                errors={errors}
                settings={settings}
                {...props}
              />
            )}
          </SettingsContext.Consumer>
          )}
      </ErrorsContext.Consumer>
    )}
  </LoadingContext.Consumer>
)
