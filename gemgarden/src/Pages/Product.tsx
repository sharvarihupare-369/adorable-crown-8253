import React from 'react'
import { getProducts } from '../Redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { Card } from './PRODUCTS/Card'
// import { Sidebarprod } from './PRODUCTS/Sidebarprod'
import styled from '@emotion/styled'

import { useSearchParams } from "react-router-dom";
import { Sidebarfilter } from './PRODUCTS/Sidebarprod'
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
type params={
  params: {
    material: any,
      // type: any,
      _sort: string,
      _order: any,
    },
}
export const Product = () => {
const arrivalData=useSelector((store:any)=>store.productReducer.products)
  const [searchParams] = useSearchParams();
  let obj:params = {
    params: {
      material: searchParams.getAll("material"),
      // type: searchParams.getAll("type"),
      _sort: "currentprice",
      _order: searchParams.get("order"),
    },
  };
const dispatch:Dispatch<any> = useDispatch()
React.useEffect(()=>{
  dispatch(getProducts(obj))
},[searchParams])
  return (
    <DIV className='body'>
      {/* <Sidebarprod/> */}
      <Sidebarfilter/>
      <div className='productcards'>{arrivalData.map((ele:element,ind:number)=><Card key={ind} {...ele}/>)}</div>
    </DIV>
  )
}
const DIV =styled.div`
.body{
}
display: flex;
.filter_section{
  width: 20%;
  border-right: 1px solid black;
  padding: 20px ;
  background-color: #c0bebe;
}
.productcards{
  background-color: #3e3b3b;
  color: white;
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



// import { getData } from "../Redux/RecipeReducer/action";
// import { RecipeCard } from "./RecipeCard";
// import styled from "styled-components";

// export const RecipeList = () => {

//   return (
//     <div>
//       <DIV data-testid="recipe-list">
//         {/* Map through the recipe using the recipe card here */}
//         {recipe.map((ele) => (
//           <RecipeCard key={ele.id} ele={ele} />
//         ))}
//       </DIV>
//     </div>
//   );
// };

// const DIV = styled.div`
//   display: grid;
//   grid-template-columns: auto auto auto;
//   padding: 12px;
//   grid-gap: 12px;
// `;
