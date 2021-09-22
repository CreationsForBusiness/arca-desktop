import { useTranslate } from 'react-translate';

import { Grid, GridItem, Center, Image } from "@chakra-ui/react"

import installed from '../images/installed.png'

const Welcome  = ({ next }) => {
  const t = useTranslate('install');

  return (
    <div>
      <Image src={installed} />
    </div>
  )
  
}

export default Welcome;