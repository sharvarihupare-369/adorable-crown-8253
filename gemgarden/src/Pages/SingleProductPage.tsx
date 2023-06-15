import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProducts } from '../Redux/Products/action'
import { Dispatch } from 'redux'
import styled from '@emotion/styled'
import { Button, Input, Select } from '@chakra-ui/react'
import {GiCardExchange} from "react-icons/gi"
import {SiMaterialdesign} from "react-icons/si"
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { RiExchangeCnyFill } from 'react-icons/ri';
import { BiArchiveOut } from 'react-icons/bi';
import {FaShippingFast } from 'react-icons/fa';
export const SingleProductPage = () => {
  const arrivalData=useSelector((store:any)=>store.productReducer.singlePageData)
  const [imageData,setImage]=React.useState(`${arrivalData.src1}`)
  console.log(imageData);
  
  const {id}:any=useParams()
  // console.log(id)
  // console.log(arrivalData);
  
  const dispatch:Dispatch<any> = useDispatch()

  React.useEffect(()=>{
    dispatch(getSingleProducts(id))
  },[])
  return (
    <DIV>
      <h1>Product Details</h1>
      <div>
        <div className='topsectionImage'>
          <div className='imageDetail'>
            <div className='ImageContainer'>
            <img className='mainImage' src={imageData!==undefined?imageData:arrivalData.src1} alt="img" />
            </div>
            <div className='imageSideShow'>
            <img onClick={()=>setImage(`${arrivalData.src1}`)} src={arrivalData.src1} alt="img" />
            <img onClick={()=>setImage(`${arrivalData.src2}`)} src={arrivalData.src2} alt="img" />
            <img onClick={()=>setImage(`${arrivalData.src3}`)} src={arrivalData.src3} alt="img" />
            {/* <img  src={arrivalData.video} alt="img" /> */}
            </div>
            <div className='certified'>
              <div><SiMaterialdesign/><p style={{fontSize:"0.8rem",color:"grey"}}>Best Designs</p></div>
              <div><AiFillSafetyCertificate/><p style={{fontSize:"0.8rem",color:"grey"}}>Certified Diamonds</p></div>
              <div><BiArchiveOut/><p style={{fontSize:"0.8rem",color:"grey"}}>Bis Hallmark</p></div>
              <div><FaShippingFast/><p style={{fontSize:"0.8rem",color:"grey"}}>Insured Shipping</p></div>
              <div><RiExchangeCnyFill/><p style={{fontSize:"0.8rem",color:"grey"}}>Lifetime Exchange</p></div>
              <div><GiCardExchange/><p style={{fontSize:"0.8rem",color:"grey"}}>Easy Exchange</p></div>
            </div>
          </div>
          <div className='productsDetail'>
          <h1>{arrivalData.name}</h1>
          <p style={{fontSize:"0.8rem",color:"grey"}}>By PC Jeweller  |  Product Code: OOOLR00055DD-FSY4F12</p>
          <p style={{fontSize:"0.8rem",color:"grey"}}>  (1 Reviews)</p>
          <p style={{fontSize:"1rem",color:"grey"}}>Diamond Ring</p>
          <h1>M.R.P : {arrivalData.currentprice}</h1>
          <p style={{fontSize:"0.8rem",color:"grey"}}>(Inclusive of all taxes)</p>
          <span>Size:</span><Select className='size'>
            <option value="">Select Size</option>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
          </Select>

          <Button style={{backgroundColor:"#C7A550",color:"white",margin:"0px 12px"}}>ADD TO CART</Button>
          <Button style={{backgroundColor:"#756949",color:"white",margin:"0px 12px"}}>BUY NOW</Button>

          <div className='delivery'>
            <div>
            <p style={{fontSize:"1.3rem",color:"#3D3D3B"}}>Expected Shipping Date</p>
            <p style={{fontSize:"1rem",color:"grey"}}>15/05/2023</p>
          </div>
          <div>
            <p>Delivery Option</p>
            <Input type="text" placeholder='Enter pincode'/><Button>Check</Button>
          </div></div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
      {/* <div></div>
      <div></div> */}
      </DIV>
  )
}

const DIV=styled.div`
  .topsectionImage{
    display: flex;
    /* border: 1px solid; */
  }
  .ImageContainer{
    /* border: 1px solid; */
    display: flex; 
    /* flex-direction: column;  */
     justify-content: center;
     /* gap: 20px; */
     padding: 20px;
     align-items:center ;
  }
  .topsectionImage .imageDetail .mainImage{
    /* display: flex; */
    width: 90%;
    /* border: 1px solid; */
  }
  .topsectionImage .imageDetail{
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 45%;
    padding: 12px;
  }
  /* .topsectionImage .imageDetail div{
    border: 1px solid;
    border: 1px solid;

  } */
  .topsectionImage .productsDetail{
    /* display: flex; */
    width: 55%;
    padding: 12px;
    /* border: 1px solid; */

  }
  .imageSideShow{
    border: 1px solid;
    /* display: flex; */
    /* text-align: center; */
    display: flex; 
    /* flex-direction: column;  */
     justify-content: center;
     gap: 20px;
     padding: 20px;
     align-items:center ;
  }
  .imageSideShow img{
    width: 10%;
  }
  .delivery{
    align-items: center;
    padding: 12px 0px;
    /* border: 1px solid; */
    display: flex;
    justify-content: space-between;
  }
  .size{
    width: 20%;
  }
  .certified{
display: grid;
grid-template-columns:repeat(3,1fr) ;
grid-gap: 20px;
padding: 20px;
/* align-items: center; */
  }
  .certified div{
    display: flex;
    flex-direction: column;
    justify-content: center;
align-items: center;
color: #C7A108;
/* border: none; */
  }
`