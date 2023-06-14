import React from 'react'
import {Box,Grid,Image,Text,Flex, Heading} from '@chakra-ui/react'
import handImg from '../Assets/789e8b165732073_640c6f79ae660-transformed.png'
import nc1 from '../Assets/nc1.jpg'
import nc2 from '../Assets/nc2.webp'
import nc3 from '../Assets/nc3.webp'
import nc4 from '../Assets/nc4.webp'

export const HomePage = () => {
  return (
    <>
    <Box  position={"relative"}
    minH={"100vh"}
    w="100%"
    // bg= "#171616"
       style={{backgroundImage:`url(${handImg})`}}
       background="linear-gradient(to top left, #171616 100%, #363431 51%)"
      //  background="linear-gradient(to top left, #171616 100%, #363431 51%)"
      // background= "radial-gradient(ellipse farthest-corner at top left, #121212 100%, #1A1819 58%)"
      
      backgroundPosition="center"
      backgroundSize={"cover"}
      // backgroundRepeat="no-repeat"
       >
   
    </Box>

    <Box m="30px">
      <Box  w="90%" m="auto">

      <Flex justifyContent={"space-between"} alignItems={"center"}>

      <Box textAlign={"left"}  color={"#171616"} fontWeight={"400"}>
        <Heading size={"lg"} fontWeight={"400"} textTransform={"uppercase"}>New Collections</Heading>
        <Text fontSize={"16px"}>Check Out the New Collections of Famous Brands</Text>
      </Box>
      <Box>
      <Text fontSize={"16px"}>ALL COLLECTIONS</Text>
      </Box>
      </Flex>
      </Box>

     <Grid textAlign={"left"} color={"#171616"} w="90%" m="auto" gap="10px" templateColumns={"repeat(4,1fr)"}>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  >
        <Image  src={nc1} />
        <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Move Uno Collection</Text>
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">

        <Image src={nc2} />
        <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Lucky Move Collection</Text>
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Image src={nc3} />
        <Heading m="10px" as="h6" size={"sm"}>Garrard</Heading>
        <Text m="10px" fontSize={"14px"}>1735 Collection</Text>
       
      </Box>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Image src={nc4} />
        <Heading m="10px" as="h6" size={"sm"}>Cartier</Heading>
        <Text m="10px" fontSize={"14px"}>Love Collection</Text>
      </Box>
     </Grid>


     <Box  w="90%" m="30px auto" >

      <Flex justifyContent={"space-between"} alignItems={"center"}>

      <Box textAlign={"left"}  color={"#171616"}  fontWeight={"400"}>
        <Heading size={"lg"} fontWeight={"400"} textTransform={"capitalize"}>Categories</Heading>
        <Text fontSize={"16px"}>Discover Our Collection of Jewellery by Categories</Text>

        <Box mt="50px" lineHeight={"60px"} fontWeight={"500"}>
        <Text fontSize={"16px"}>Rings</Text>
        <Text fontSize={"16px"}>Bracelets</Text>
        <Text fontSize={"18px"} textDecoration={"underline"} >Earrings</Text>
        <Text fontSize={"16px"}>Necklaces & Pendants</Text>
        <Text fontSize={"16px"}>Watches</Text>
        <Text fontSize={"16px"}>Men's Jewelry</Text>
        <Text fontSize={"16px"} textTransform={"uppercase"} letterSpacing={"2px"} mt="50px">All Categories</Text>
        </Box>
      </Box>
      <Box>
      <Image/>
      </Box>
      </Flex>
      </Box>




    </Box>
  
      </>
  )
}
