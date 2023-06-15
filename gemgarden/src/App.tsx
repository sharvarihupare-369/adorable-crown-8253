import * as React from "react"
import {Box} from "@chakra-ui/react"
import { Product } from "./Pages/Product"
import { Link } from "react-router-dom"
import { MainRoutes } from "./Pages/MainRoutes"


export const App = () => (
  
    <Box className="App" textAlign="center" fontSize="xl">
      {/* <Product/> */}
      {/* <Link to={'/product'} >Products Page</Link> */}
      <MainRoutes/>
    </Box>
 
)
