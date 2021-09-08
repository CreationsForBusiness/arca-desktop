import { useTranslate } from 'react-translate';

import { Grid, GridItem, Center, Circle } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'


const Install = ({ db, setError, setLoading, settings }) => {
  const t = useTranslate('install');

  return (
    <Grid
      h="200px"
      gap={2}
    >
      <GridItem colSpan={4} center >
        <Center>
          {t('welcome')}
        </Center>
      </GridItem>
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2}>
        <Circle size="10em" bg="green" color="white">
          <ArrowForwardIcon />
        </Circle>
      </GridItem>
    </Grid>
  )
  
}

export default Install