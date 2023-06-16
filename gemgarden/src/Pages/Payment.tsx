import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';



function Payment() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  const handlePaymentSubmit = () => {
    // Handle payment submission logic here
    console.log("hi")
};


  return (
    <Box maxWidth="500px" mx="auto" py="8" bg="#f8f8f8" p={10}>
      <Heading size="lg" textAlign="center" mb="8">Payment Information</Heading>
      <Stack spacing="4">
        <FormControl id="name">
          <FormLabel>Full Name</FormLabel>
          <Input type="text" placeholder="Name" isRequired/>
        </FormControl>
        <FormControl id="payment-option">
          <FormLabel>Payment Option</FormLabel>
          <Stack direction="row" gap={290}>
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={selectedOption === 'creditCard'}
                onChange={handleOptionChange}
                
              />
              <Text ml="2">Credit Card</Text>
            </label>
            <label>
              <input
                type="radio"
                value="COD"
                checked={selectedOption === 'COD'}
                onChange={handleOptionChange}
                // required
              />
              <Text ml="2">COD</Text>
            </label>
          </Stack>
        </FormControl>
        {selectedOption === 'creditCard' && (
          <FormControl id="card-number">
            <FormLabel>Card Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<i className="fa fa-credit-card" />} />
              <Input type="text" placeholder="**** **** **** ****" isRequired/>
            </InputGroup>
          </FormControl>
        )}
        {selectedOption === 'creditCard' && (
          <FormControl id="expiry-date">
            <FormLabel>Expiry Date</FormLabel>
            <InputGroup>
              <Input type="text" placeholder="MM/YY" isRequired/>
            </InputGroup>
          </FormControl>
        )}
        {selectedOption === 'creditCard' && (
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <InputGroup>
              <Input type="text" placeholder="123" isRequired/>
            </InputGroup>
          </FormControl>
        )}
   
        { <Button bg="#d7b256"  size="lg" onClick={handlePaymentSubmit}>
        Pay Now
        </Button> }
      </Stack>
    </Box>
  );
}

export default Payment;