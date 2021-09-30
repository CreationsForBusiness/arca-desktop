import { useTranslate } from 'react-translate';

import { Image, Center } from "@chakra-ui/react"


import installed from '../images/installed.png'

const Welcome  = ({ next }) => {
  const t = useTranslate('install');

  return (
    <Center>
      <Image src={installed} />
    </Center>
  )
  
}

export default Welcome;