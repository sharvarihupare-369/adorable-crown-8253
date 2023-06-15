import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Admin } from "./Pages/Admin";
import { Provider } from "react-redux";


export const App = () => (
  <Box className="App" textAlign="center" fontSize="xl">
   
      <Admin />
  
  </Box>
);
