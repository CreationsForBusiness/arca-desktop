import { useTranslate } from 'react-translate';

import { Center } from "@chakra-ui/react"

import './style.css'

const Error = ({ code, description, name }) => {
  const t = useTranslate('errors');
  return (
    <Center
      className="loader-grid"
    > 
      {t('something_wrong')}
      &nbsp;
      {code} ({name}) - {description}
    </Center>
  )
}
export default Error;