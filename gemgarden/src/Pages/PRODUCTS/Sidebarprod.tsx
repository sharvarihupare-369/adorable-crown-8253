import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsEarRings, getProductsRings } from '../../Redux/Products/action'
const obj={
    Rings:false,
    Earrings:false,
    Bracelets:false,
    Arrival:false,
}
export const Sidebarprod = () => {
    const[params,setParams]=React.useState(obj)
    const dispatch:Dispatch<any>=useDispatch()
// console.log(params)
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setParams({...params,[e.target.name]:e.target.checked})
        if(params.Rings){
           dispatch(getProductsRings()) 
        }else if (params.Earrings){
            dispatch(getProductsEarRings())
        }
    }
  return (
    <div className='filter_section'>
        <DIV className="filterbyprice">
            <h2>Filter By Price</h2>
            <div>
            <input type="checkbox" name="" id="" />
            <Text style={{fontSize: "0.8rem"}}>₹ 20000 - ₹ 30000</Text>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
                <Text style={{fontSize: "0.8rem"}}>₹ 30000 - ₹ 40000</Text>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
                <Text style={{fontSize: "0.8rem"}}>₹ 40000 - ₹ 50000</Text>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
                <Text style={{fontSize: "0.8rem"}}>₹ 50000 - ₹ 100000</Text>
            </div>
            <div>
            <input type="checkbox" name="" id="" />
                <Text style={{fontSize: "0.8rem"}}>₹ 100000 - </Text>
            </div>
        </DIV>
        <DIV className="filterbycategory">
            <h2>Filter By Category</h2>
            <div>
            <input onChange={handleChange} type="checkbox" name="Rings" id="" />
            <Text style={{fontSize: "0.8rem"}}>Rings</Text>
            </div>
            <div>
            <input onChange={handleChange} type="checkbox" name="Earrings" id="" />
                <Text style={{fontSize: "0.8rem"}}>Earrings</Text>
            </div>
            <div>
            <input onChange={handleChange} type="checkbox" name="Bracelets" id="" />
                <Text style={{fontSize: "0.8rem"}}>Bracelets</Text>
            </div>
            <div>
            <input onChange={handleChange} type="checkbox" name="Arrival" id="" />
                <Text style={{fontSize: "0.8rem"}}>Arrival</Text>
            </div>
        </DIV>
    </div>
  )
}

const DIV =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
padding: 12px;
    div{
        width: 70%;
        display: flex;
        /* justify-content: space-between; */
        
    }
    div input{
       margin-right: 12px;
    }
   
`