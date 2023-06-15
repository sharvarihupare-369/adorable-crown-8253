import * as React from "react"
import {Box} from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { HomePage } from "./Pages/HomePage"
import { MainRoutes } from "./Pages/MainRoutes"


export const App = () => (
  
    <Box className="App" textAlign="center" fontSize="xl">
      <Navbar/>
      <MainRoutes/>
      {/* <HomePage/> */}
       
      <Footer/>
    </Box>
 
)
