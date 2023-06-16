import * as React from "react"
import {Box} from "@chakra-ui/react"
import Payment from "./Pages/Payment"
import Checkout from "./Pages/Checkout"


export const App = () => {
    
  return  <Box className="App" textAlign="center" fontSize="xl">
      <Payment/>
      <Checkout/>
      
    </Box>
 
}
