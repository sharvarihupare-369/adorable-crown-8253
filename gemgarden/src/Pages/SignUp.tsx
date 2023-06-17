import React, { useState,useEffect, useRef } from 'react'
import styles from './SignupPage.module.css'
// import { InputControl } from './inputControl/InputControl'
import {  useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth } from '../firebase'
import blackbg from '../Assets/body-bg-free-img.jpg'
import blackbgEar from '../Assets/black.jpg'
import 'animate.css';
import { color, useToast } from '@chakra-ui/react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,  
  Link
 } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { signup } from '../Redux/Authentication/action'


 interface SignupType {
  name:string;
  email : string;
  password:string
}

interface SubmissionType1 {
  setSubmissiondisbled : React.Dispatch<React.SetStateAction<boolean>>
}



export function SignUp() {
  const navigate = useNavigate()
  const dispatch:Dispatch<any> = useDispatch()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toast = useToast()
  const toastIdRef = useRef<string | number | undefined>();
  const {tokenID} = useSelector((store:any)=>store.authReducer)
  const {errorMessage} = useSelector((store:any)=>store.authReducer)
  const [formvalue,setFormvalue] = useState<SignupType>({
    name : "",
    email:"",
    password:""
  })
  

  const [submissiondisbled,setSubmissiondisbled] = useState<boolean>(false)

  // console.log(value)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

       if(!formvalue.name || !formvalue.email || !formvalue.password){
        return  toast({
          title: 'Register Failed!',
          description: "Please fill all the inputs",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
       

       }

       if(formvalue.password.length < 6 ){
        return toast({
          title: 'Failed!!',
          description: "Password must be of 6 characters",
          status: 'error',
          position : 'top',
          duration: 4000,
          isClosable: true,
        })
      }

      if(!formvalue.password.split("").includes("@")  ){
        return toast({
          title: 'Failed!!',
          description: "Password must contains at least one speacial character.",
          status: 'warning',
          position : 'top',
          duration: 4000,
          isClosable: true,
        })
      }
      

        dispatch(signup(formvalue))
       
        setFormvalue({name:"",email:"",password:""})
   
  }

  // useEffect(()=>{
  //   if(tokenID){
  //    toast({
  //             title: 'Success',
  //             description: 'User Registered Successful',
  //             status: 'success',
  //             position: 'top',
  //             duration: 4000,
  //             isClosable: true,
  //           })
  //   }

  //   if(errorMessage == "Firebase: Error (auth/email-already-in-use)."){
  //     toast({
  //             title: 'Failed!!',
  //             description: 'Firebase: Error (auth/email-already-in-use)',
  //             status: 'error',
  //             position: 'top',
  //             duration: 4000,
  //             isClosable: true,
  //           })
  //   }
  // },[tokenID,errorMessage])

  useEffect(() => {
    if(tokenID){
      toastIdRef.current = toast({
        title: 'Success',
        description: 'User Registered Successful',
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;
       setTimeout(()=>{
         navigate("/login")
       },4000)
    }
  
    
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
  }, [tokenID])



   useEffect(()=>{
    if(errorMessage == "Firebase: Error (auth/email-already-in-use)."){
      toastIdRef.current = toast({
        title: 'Failed!!',
        description: 'User already registered!',
        status: 'warning',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;
    }
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
   },[errorMessage])


  return (
   <>
   <Box  position={"relative"}  style={{backgroundImage:`url(${blackbgEar})`, 
  //  backgroundRepeat:"no-repeat",
     backgroundSize:"cover",}}>
  
   
     <form style={{ 
      // position:"absolute",
    //  top:"0",
     backgroundPosition:"center",
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     minHeight:'100vh'
     
    
     }} onSubmit={handleSubmit}
     >
  
   
    <Flex
    style={{backgroundImage:`url(${blackbgEar})`, 
    //  backgroundRepeat:"no-repeat",
       backgroundSize:"cover"
      
      }}
    
      
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack  borderRadius={"none"}  className="animate__animated animate__pulse" w={{base:"90%",sm:"90%",md:"80%",lg:"50%",xl:"40%","2xl":"40%"}} >
        <Stack  align={'center'}>
          <Heading color={"white"} fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          
        </Stack>
        <Box
        
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
           
              <Box>
                <FormControl id="firstName" >
                  <FormLabel>Enter
                     Name</FormLabel>
                  <Input  
                  borderRight={"none"}
                  borderTop={"none"}
                  focusBorderColor='none'
                  placeholder={'Your Name'}
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  _placeholder={{ opacity: 1, color: '#a0a0a0' }}
                  _focus={{
                    bg: 'whiteAlpha.300',
                    borderColor:"#FFB300"
                  }}  type="text" value={formvalue.name} onChange={(e)=>setFormvalue((prev) => ({...prev,name:e.target.value}))} />
                </FormControl>
              </Box>
              {/* <Box>
                <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
                </FormControl>
              </Box> */}
            
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input 
                  borderRight={"none"}
                  borderTop={"none"}
                  focusBorderColor='none'
                  placeholder={'Your email address'}
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  _placeholder={{ opacity: 1, color: '#a0a0a0' }}
                  _focus={{
                    bg: 'whiteAlpha.300',
                    borderColor:"#FFB300"
                  }} type="email" value={formvalue.email} onChange={(e)=>setFormvalue((prev) => ({...prev,email:e.target.value}))} />
            </FormControl>
            <FormControl id="password" >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input  borderRight={"none"}
                  borderTop={"none"}
                  focusBorderColor='none'
                  placeholder={'Your password'}
                  // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  _placeholder={{ opacity: 1, color: '#a0a0a0' }}
                  _focus={{
                    bg: 'whiteAlpha.300',
                    borderColor:"#FFB300"
                  }}   value={formvalue.password} onChange={(e)=>setFormvalue((prev) => ({...prev,password:e.target.value}))} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              type="submit"
              isDisabled={submissiondisbled}
              style={{  background:"linear-gradient(to top left, #171616 100%, #363431 51%)"}}
              // bgGradient='linear(to-r, #171616, #363431)'
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
                color={'white'}
                _hover={{
                  // bg: 'blue.500',
                  bgGradient:'linear(to-r,  #363431,#171616)',
                  border :"1px solid #FFB300 ",
                  color:"#FFB300"
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href="/login" color={'rgb(255,189,89)'} fontWeight={"600"} >Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </form>
        
        </Box>
       

       </>
  );
}