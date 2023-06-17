import { Box, Button, Center, Container, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import AlertDialogs from '../Pages/AlertDialog';




function Payment() {
  const [selectedOption, setSelectedOption] = useState('');
    const [set,setClass] = useState('')
    const [val,setTrue] = useState(false)
    const [card,setCard] = useState('')
    const [name,setName] = useState('')
    const [expiry,setExpiry] = useState('')
    const [security,setSecurity] = useState('')
    const [dis,setDis] = useState(true);
    const [cv ,setCv]=useState("")
    const toast = useToast()
    const [isChecked, setIsChecked] = useState(false);

    const validation =(e:any) =>{
          e.preventDefault()
          if(!name){
            toast({
                title: 'ohh no',
                description: "Please Enter Your name.",
                status: 'error',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
              return;
          }
          if(!selectedOption){
            toast({
                title: 'ohh no',
                description: "Please Select Your Payment Method.",
                status: 'error',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
              return;
          }
     
          if((!card || !name || !expiry || !cv) &&  selectedOption=="creditCard"){
            toast({
                title: 'ohh no',
                description: "All fields are required.",
                status: 'error',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
              return;
          }
          
          if(card.length !== 16 && selectedOption=="creditCard"){
            toast({
                title: 'sorry',
                description: "card number must have 16 digits",
                status: 'warning',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
              return;
          }
          
          setDis(false)
          return;
    }


  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };


  return (
    <Container display="flex" maxW="99%" mx="auto" mt={2} justifyContent="space-between" mb={2}>
      <Box maxWidth="99%"  py="8" bg="#f8f8f8" p={7} >
        <Image w="100%" src="data:image/jpeg;base64,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"/>
      </Box>
 <Box maxWidth="95%"  py="8" bg="#f8f8f8" p={7}  >
      
      <Heading size="lg" textAlign="center"  mb="8">Payment Information</Heading>

      <br />
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel>Full Name</FormLabel>
          <br />
          <Input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </FormControl>
        <FormControl id="payment-option">
          <FormLabel>Payment Option</FormLabel>
          <br />      
          <Stack direction="row" gap={200}>
            <label>
              <input
                type="radio"
                value="creditCard"
                id='cc'
                checked={selectedOption === 'creditCard'}
                onChange={handleOptionChange}
                
              />
              <Text ml="1">Credit Card</Text>
            </label>
            <label>
              <input
                type="radio"
                value="COD"
                id="cd"
                checked={selectedOption === 'COD'}
                onChange={handleOptionChange}
                // required
              />
              <Text ml="1">COD</Text>
            </label>
          </Stack>
        </FormControl>
        {selectedOption === 'creditCard' && (
          <FormControl id="card-number">
            <FormLabel>Card Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<i className="fa fa-credit-card" />} />
              <Input type="text" placeholder="** ** ** **" onChange={(e)=>setCard(e.target.value)}/>
            </InputGroup>
          </FormControl>
        )}
        {selectedOption === 'creditCard' && (
          <FormControl id="expiry-date">
            <FormLabel>Expiry Date</FormLabel>
            <InputGroup>
              <Input type="text" placeholder="MM/YY" onChange={(e)=>setExpiry(e.target.value)}/>
            </InputGroup>
          </FormControl>
        )}
        {selectedOption === 'creditCard' && (
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <InputGroup>
              <Input type="text" placeholder="123" onChange={(e)=>setCv(e.target.value)} />
            </InputGroup>
          </FormControl>
        )}
   
   <Center><Button bg="green"  colorScheme='black' w='200px' onClick={validation} >Check</Button></Center>
                <Center><AlertDialogs bg="blackAlpha.900"  colorScheme='white' w="200px" val={dis}>Proceed</AlertDialogs></Center>
        
      </Stack>
    </Box>

    </Container>
   
  );
}

export default Payment;