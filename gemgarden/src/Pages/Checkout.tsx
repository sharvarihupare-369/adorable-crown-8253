import React from 'react';
import { Container, Heading, Input, Button} from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom';
// import Steper from '../Components/stepper';

function Checkout() {
  const navigator=useNavigate()
  const handleClick=()=>
  {
    return navigator("/payment")
  }
  return (<>
   <Container maxW="md" p="8" bg="#f8f8f8" borderRadius="md">
   

{/* <Steper index={1}/>
<br /> */}

      <Heading as="h1" size="lg" mb="6" textAlign="center">
        Address Details
      </Heading>
      <Input placeholder="Name" mb="4" isRequired/>
      <Input placeholder="Address" mb="4" isRequired />
      <Input placeholder="City" mb="4"isRequired />
      <Input placeholder="State" mb="4"isRequired />
      <Input placeholder="Postal Code" mb="4" isRequired/>

      
      <Button bg="#d7b256" size="lg" width="full" onClick={handleClick}>
        Continue To Payment
      </Button>
   
     
    </Container>
    </>
  );
  
}




export default Checkout;