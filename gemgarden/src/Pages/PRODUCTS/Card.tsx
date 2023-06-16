import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { ToastStatusExample } from './alert';
import styled from '@emotion/styled';
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
    <DIV src={src1} className='card'>
        <Link  to={`/product/${id}`}> <img className='cardImage' src={src2} alt='img'/>
        <Text style={{fontSize:"0.9rem",marginBottom:"9px"}} className='name'>{name}</Text>
        <Text style={{fontSize:"0.8rem"}} className='price'>Rs.{currentprice}.00 <span style={{color:"red",verticalAlign:"middle",textDecoration: "line-through"}}  >(Rs.{orignalprice})</span></Text>
        </Link>
        <ToastStatusExample/>
        {/* <Button style={{backgroundColor:"#C7A550",color:"white"}}>Add To Cart</Button> */}
        </DIV>
  )
}

const DIV=styled.div<any>`
  .cardImage:hover{
content: url(${(props) => props.src});
  }
`