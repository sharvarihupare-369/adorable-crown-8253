import React, {useEffect, useState} from 'react'
import {Box,Grid,Image,Text,Flex, Heading} from '@chakra-ui/react'
import handImg from '../Assets/789e8b165732073_640c6f79ae660-transformed.png'
import backImageBlack from '../Assets/body-bg-free-img.jpg'
import nc1 from '../Assets/nc1.jpg'
import nc2 from '../Assets/nc2.webp'
import nc3 from '../Assets/nc3.webp'
import nc4 from '../Assets/nc4.webp'
import bs1 from '../Assets/bs1.webp'
import bs2 from '../Assets/bs4.webp'
import bs3 from '../Assets/bs6.webp'
// import bs4 from '../Assets/bs5_files/thubnail-placeholder.jpg'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import carousal1img from '../Assets/video slider/photo-1531995811006-35cb42e1a022.jpg'
import carousal2img from '../Assets/video slider/necklace.jpg'
import carousal3img from '../Assets/video slider/3kO.gif'
import carousal4img from '../Assets/video slider/goldimg1.gif'
import carousal5img from '../Assets/video slider/pexels-photo-4550853.webp'
import gold1 from '../Assets/goldImages/photo-1601121141418-c1caa10a2a0b.jpg'
import gold2 from '../Assets/goldImages/photo-1601121141461-9d6647bca1ed.jpg'
import gold21 from '../Assets/goldImages/shot-young-woman-wearing-festive-jewellery-created-with-generative-ai_419341-4650.jpg'
import gold3 from '../Assets/goldImages/photo-1626784215013-13322cb0e471.jpg'
import gold4 from '../Assets/goldImages/Gold-Jewellery-Background-387x258.jpg'
import gold5 from '../Assets/goldImages/gold-necklace-with-flower-design-it_579873-665.jpg'
import ringimg from '../Assets/videoandImages/ringImage.jpg'
import ringimg2 from '../Assets/videoandImages/ringImage2.jpg'
import neckpiece from '../Assets/videoandImages/pendant.jpg'
import bracelet from '../Assets/videoandImages/bracelet.jpg'
import earring from '../Assets/videoandImages/earring.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { getImages } from '../Redux/Home/action'
// import ringvideo from '../Assets/videoandImages/ringvideo.mp4'



export const HomePage = () => {

  const [status,setStatus] = useState(false)
  const dispatch:Dispatch<any> = useDispatch()
  const {images} = useSelector((store:any)=>store.homeReducer)
  
  useEffect(()=>{
    dispatch(getImages())
  },[])

  console.log(images)

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

     <Grid  textAlign={"left"} color={"#171616"} w="90%" m="20px auto" gap="10px" templateColumns={"repeat(4,1fr)"}>
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


     <Box  w="90%" m="70px auto" >

      <Flex justifyContent={"space-between"} alignItems={"center"}>

      <Box  textAlign={"left"}  color={"#171616"}  fontWeight={"400"}>
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
      <Box w="40%" mt="30px"  className='carousal'>
      <Carousel autoPlay stopOnHover={true} showArrows={false} showThumbs={false} emulateTouch infiniteLoop showIndicators={false} axis="horizontal">
                {/* <div>
                    <img  src={carousal1img} />
                   
                </div> */}
                <div>
                    <img  style={{width:"100%"}} src={carousal3img} />             
                </div>
                <div>
                    <img  style={{width:"100%" ,height:"520px"}}  src={carousal2img} />    
                </div>
                <div>
                    <img  style={{width:"100%" ,height:"520px"}}  src={carousal4img} />      
                </div>
                <div>
                    <img  style={{width:"100%" ,height:"520px"}}  src={carousal5img} />      
                </div>
            </Carousel>
       </Box>
      </Flex>
      </Box>

      <Box >
      <Box  w="90%" m="auto">

      <Flex justifyContent={"space-between"} alignItems={"center"}>

      <Box mt="80px" textAlign={"left"}  color={"#171616"} fontWeight={"400"}>
        <Heading size={"lg"} fontWeight={"400"} textTransform={"uppercase"}>Bessellers</Heading>
        <Text fontSize={"16px"}>Check Out the New Collections of Famous Brands</Text>
      </Box>
      <Box>
      <Text fontSize={"16px"}>ALL COLLECTIONS</Text>
      </Box>
     
      </Flex>
      </Box>

     <Grid   textAlign={"left"} color={"#171616"} w="90%" m="50px auto" gap="10px" templateColumns={"repeat(4,1fr)"}>
      <Box  boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  >
        



        {/* {
          status ? <video autoPlay={true} >
          <source src="https://cdn.caratlane.com/media/catalog/product/J/R/JR07378-1RP900_16_video.mp4" type="video/mp4"  ></source>
         </video> :  <Image  src={ringimg} />
        }
         */}
        {/* <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Move Uno Collection</Text>
      </Box>
      <Box boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"> */}

        {/* <Image src={neckpiece} h="300px" /> */}

        {/* {
          status ? <video autoPlay={true} >
            <source src="https://cdn.caratlane.com/media/catalog/product/J/L/JL04543-1RP900_16_video.mp4" type="video/mp4"  ></source>
          </video> :  <Image  src={neckpiece} />
        } */}
        {/* <Heading m="10px" as="h6" size={"sm"}>Messika</Heading>
        <Text m="10px" fontSize={"14px"}>Lucky Move Collection</Text>
      </Box> */}
      {/* <Box   boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Image src={bs3} /> */}
        {/* {
          status ? <video autoPlay={true} >
            <source src="https://cdn.caratlane.com/media/catalog/product/J/T/JT01768-1RP600_16_video.mp4" type="video/mp4"  ></source>
          </video> :  <Image  src={bracelet} />
        } */}
        {/* <Heading m="10px" as="h6" size={"sm"}>Garrard</Heading>
        <Text m="10px" fontSize={"14px"}>1735 Collection</Text> */}
       
      {/* </Box>
      <Box   boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <Image src={earring} /> */}
        {/* {
          status ? <video autoPlay={true} >
            <source src="https://cdn.caratlane.com/media/catalog/product/J/E/JE07560-1RP9RQ_16_video.mp4" type="video/mp4"  ></source>
          </video> :  <Image  src={earring} />
        } */}
        {/* <Heading m="10px" as="h6" size={"sm"}>Cartier</Heading>
        <Text m="10px" fontSize={"14px"}>Love Collection</Text> */}
      </Box>
     </Grid>

   <Box>
    <Image src="https://cdn.shopify.com/s/files/1/0061/8378/0442/files/ezgif.com-gif-maker_3_dc22071c-dd39-40e4-8c5d-ce6b5b51e397.webp?v=1681751207" />
   </Box>

   <Box    mt="30px" >
    <Grid gap="30px" templateColumns={"repeat(3,1fr)"}>
    {/* <Box  >
      <Image w="90%" borderRadius={"50%"} h="300px" src={gold1} />
    </Box> */}
    <Box  >
      <Image  w="100%" border={"1px solid white"} borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"} h="300px" src={gold1} />
    </Box>
    <Box>
      <Image w="100%"  border={"1px solid white"} borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"}  h="300px" src={gold2} />
    </Box>
    <Box>
      <Image w="100%" borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"}  h="300px" src={gold3} />
    </Box>
    {/* <Box>
      <Image  w="90%" borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"}  h="300px" src={gold21} />
    </Box> */}
    {/* <Box>
      <Image  w="90%" borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"}  h="300px" src={gold4} />
    </Box>
    <Box>
      <Image w="90%" borderTopLeftRadius={"10px"} borderBottomRightRadius={"10px"}  h="300px" src={gold5} />
    </Box> */}
    </Grid>
    {/* <Box>
      <Image  src={gold21} />
    </Box> */}
   </Box>

    
</Box>
    </Box>
  
      </>
  )
}
