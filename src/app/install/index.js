import { useState } from 'react';

import { Grid, GridItem, Center, Image } from "@chakra-ui/react"

import Components from './components';

import background from './images/background.png';

import './style.css';

const sectionStyle = {
  backgroundImage: `url(${background})`,
};

const Install = () => {

  const [step, setStep] = useState(0);
  const next = () => setStep((step) => step + 1);
  const before = () => setStep((step => step - 1));
  
  return (
    <Grid
      h="100vh"
      templateColumns="2fr 1fr"
      maxHeight="100vh"
      minHeight="100vh"
    >
      <GridItem>
        <Center>
          <Components step={step} next={next} before={before} />
        </Center>
      </GridItem>
      <GridItem className="install-background-right" style={sectionStyle}>
        <Image  src='/logotipo.png'/>
      </GridItem>
    </Grid>
  )
  
}

export default Install