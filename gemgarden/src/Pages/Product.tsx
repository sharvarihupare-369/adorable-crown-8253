import React from 'react'
import { getProductsArrival } from '../Redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { Card } from './PRODUCTS/Card'
import { Sidebarprod } from './PRODUCTS/Sidebarprod'
import styled from '@emotion/styled'
// import { Link } from 'react-router-dom'
// import { Card } from '@chakra-ui/react'
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
export const Product = () => {
const arrivalData=useSelector((store:any)=>store.productReducer.products)

const dispatch:Dispatch<any> = useDispatch()
React.useEffect(()=>{
  dispatch(getProductsArrival())
},[])

  return (
    <DIV>
      <Sidebarprod/>
      <div className='productcards'>{arrivalData.map((ele:element,ind:number)=><Card key={ind} {...ele}/>)}</div>
    </DIV>
  )
}

const DIV =styled.div`
display: flex;
/* border: 1px solid red; */
/* padding: 12px; */

.filter_section{
  width: 20%;
  border-right: 1px solid black;
  padding: 20px 0px;
}
.productcards{
  width: 80%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr) ;
  grid-gap: 30px;
  padding: 12px;
  margin: auto;
}
.card{
  /* border: 1px solid #e0e0e0; */
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;}
.card img{
  width: 100%;
}
.card .name{
 width: 100%;
height: 20px;
}
.card .price{
 width: 100%;
 padding: 12px

}
.card button{
 width: 100%;
 padding: 12px

}
`