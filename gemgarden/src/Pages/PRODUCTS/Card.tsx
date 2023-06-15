import { Box, Button, Text, color } from '@chakra-ui/react'
import React from 'react'
type element={
    src1: string;
      src2: string;
      currentprice: number;
      orignalprice: number;
      name: string;
      material: string;
      video: string;
      src3: string;
      id?: number;
  }
export const Card = ({src1,src2,currentprice,orignalprice,name,material,video,src3,id}:element) => {
  return (
    <Box className='card'>
        {/* <h1>Product page</h1> */}
        <img src={src2} alt='img'/>
        <Text style={{fontSize:"0.9rem",marginBottom:"9px"}} className='name'>{name}</Text>
        <Text style={{fontSize:"0.8rem"}} className='price'>Rs.{currentprice}.00 (Rs.{orignalprice})</Text>
        {/* <Text style={{fontSize:"1rem"}} className='rating'>{name}</Text> */}
        {/* <Text style={{fontSize:"1rem"}} className='name'>{name}</Text> */}
        <Button>Add To Cart</Button>
        </Box>
  )
}
