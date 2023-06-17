// import { Text } from '@chakra-ui/react'
// import styled from '@emotion/styled'
// import React, { Dispatch } from 'react'
// import { useDispatch } from 'react-redux'
// import { getProductsEarRings, getProductsRings } from '../../Redux/Products/action'
// const obj={
//     Rings:false,
//     Earrings:false,
//     Bracelets:false,
//     Arrival:false,
// }
// export const Sidebarprod = () => {
//     const[params,setParams]=React.useState(obj)
//     const dispatch:Dispatch<any>=useDispatch()
// // console.log(params)
//     function handleChange(e:React.ChangeEvent<HTMLInputElement>){
//         setParams({...params,[e.target.name]:e.target.checked})
//         if(params.Rings){
//            dispatch(getProductsRings()) 
//         }else if (params.Earrings){
//             dispatch(getProductsEarRings())
//         }
//     }
//   return (
//     <div className='filter_section'>
//         <DIV className="filterbyprice">
//             <h2>Filter By Price</h2>
//             <div>
//             <input type="checkbox" name="" id="" />
//             <Text style={{fontSize: "0.8rem"}}>₹ 20000 - ₹ 30000</Text>
//             </div>
//             <div>
//             <input type="checkbox" name="" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>₹ 30000 - ₹ 40000</Text>
//             </div>
//             <div>
//             <input type="checkbox" name="" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>₹ 40000 - ₹ 50000</Text>
//             </div>
//             <div>
//             <input type="checkbox" name="" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>₹ 50000 - ₹ 100000</Text>
//             </div>
//             <div>
//             <input type="checkbox" name="" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>₹ 100000 - </Text>
//             </div>
//         </DIV>
//         <DIV className="filterbycategory">
//             <h2>Filter By Category</h2>
//             <div>
//             <input onChange={handleChange} type="checkbox" name="Rings" id="" />
//             <Text style={{fontSize: "0.8rem"}}>Rings</Text>
//             </div>
//             <div>
//             <input onChange={handleChange} type="checkbox" name="Earrings" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>Earrings</Text>
//             </div>
//             <div>
//             <input onChange={handleChange} type="checkbox" name="Bracelets" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>Bracelets</Text>
//             </div>
//             <div>
//             <input onChange={handleChange} type="checkbox" name="Arrival" id="" />
//                 <Text style={{fontSize: "0.8rem"}}>Arrival</Text>
//             </div>
//         </DIV>
//     </div>
//   )
// }

// const DIV =styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// border-top: 1px solid grey;
// border-bottom: 1px solid grey;
// padding: 12px;
//     div{
//         width: 70%;
//         display: flex;
//         /* justify-content: space-between; */
        
//     }
//     div input{
//        margin-right: 12px;
//     }
   
// `



import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import styled from "styled-components";

export const Sidebarfilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const insitialCategory = searchParams.getAll("category");
  // const insitialType = searchParams.getAll("type");
  const insitialOrder = searchParams.getAll("order");
  const [material, setCategory] = useState(insitialCategory || []);
  // const [type, setType] = useState(insitialType || []);
  const [order, setOrder] = useState<any>(insitialOrder || "");

  function handleCategory(e:React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    let newCategory = [...material];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  }
  // function handleType(e:React.ChangeEvent<HTMLInputElement>) {
  //   const { value } = e.target;
    // let newType = [...type];
    // if (newType.includes(value)) {
    //   newType = newType.filter((ele) => ele !== value);
    // } else {
    //   newType.push(value);
    // }
    // setType(newType);
  // }

  function handleOrder(e:React.ChangeEvent<HTMLInputElement>) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    let params = {
      material,
      // type,
      order,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [material, order]);
  return (
    <DIV  className='filter_section'>
      <Text fontSize={"1.5rem"} color={"#886305"}>Filter by Category</Text>
      <div>
        <input
          onChange={handleCategory}
          data-testid="recipe-indian"
          type="checkbox"
          value="Diamond"
          checked={material.includes("Diamond")}
        />
        <label>Diamond</label>
<br />
        <input
          onChange={handleCategory}
          data-testid="recipe-italian"
          type="checkbox"
          value="Pearl"
          checked={material.includes("Pearl")}
        />
        <label>Pearl</label>
        <br />
        {/* <br /> */}
        <input
          onChange={handleCategory}
          data-testid="recipe-chinese"
          type="checkbox"
          value="Gold"
          checked={material.includes("Gold")}
        />
        <label>Gold</label>
        <br />
        {/* <br /> */}
        <input
          onChange={handleCategory}
          data-testid="recipe-thai"
          type="checkbox"
          value="Gemstone"
          checked={material.includes("Gemstone")}
        />
        <label>Gemstone</label>
        <br />
        {/* <br /> */}
        <input
          onChange={handleCategory}
          data-testid="recipe-thai"
          type="checkbox"
          value="Solitaire"
          checked={material.includes("Solitaire")}
        />
        <label>Solitaire</label>
        <br />
      </div>
      <br />
      {/* <br /> */}
      {/* <h3>Veg / Non-Veg</h3>
      <div>
        <input
          onChange={handleType}
          value={"veg"}
          data-testid="recipe-veg"
          type="checkbox"
          checked={type.includes("veg")}
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          onChange={handleType}
          value={"non-veg"}
          data-testid="recipe-non-veg"
          type="checkbox"
          checked={type.includes("non-veg")}
        />
        <label>Non Veg</label>
      </div> */}
      {/* <br /> */}
      {/* <br /> */}
      <br />
      <Text fontSize={"1.5rem"} color={"#886305"}>Sort By Price</Text>
      <div onChange={handleOrder}>
        <input
          defaultChecked={order === "asc"}
          value={"asc"}
          data-testid="recipe-sort-asc"
          type="radio"
          name="sort"
        />
        <label>Ascending</label>
        {/* <br /> */}
        <br />
        <input
          defaultChecked={order === "desc"}
          value={"desc"}
          data-testid="recipe-sort-desc"
          type="radio"
          name="sort"
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  border-right: 1px solid gray;
  text-align: left;
  /* margin-left: 20px; */
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: 1rem;
  }
`;
