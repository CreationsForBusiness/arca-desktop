import { useTranslate } from 'react-translate';

import { Box } from "@chakra-ui/react"

import { withContextConsumer } from '../../withContexts';

import Title from './title';

import Welcome from './welcome';

const Components = ({ step, next, before, errors }) => {
  const t = useTranslate('install');
  const props = {
    next,
    before,
  }
  let component = <></>;
  let title = "";
  let hasFooter = false;
  

  switch (step) {
    case 0:
      title = t('welcome');
      hasFooter = true;
      component = <Welcome {...props} />;
      break;
    default:
      errors.dispatch({ 
        type: 'set',
        code: "500",
        description: `Step ${step} does not exist`,
        name: 'error_step_install',
      })
      return component
  }

  return (
    <Box>
      {!!title && <Title>{title}</Title>}
      {component}
      {!!hasFooter && "FOOTER"}
    </Box>
  )
  
}

export default withContextConsumer(Components)