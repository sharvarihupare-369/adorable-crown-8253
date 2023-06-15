import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

export const Sidebarprod = () => {
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