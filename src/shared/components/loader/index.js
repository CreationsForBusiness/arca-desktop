import { Center, Spinner } from "@chakra-ui/react"

import './style.css'

const Loader = () => (
  <Center
    className="loader-grid"
  >
    <Spinner
      size="xl"
    />
  </Center>
)

export default Loader