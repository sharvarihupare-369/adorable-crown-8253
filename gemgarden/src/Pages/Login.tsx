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
import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { login } from '../Redux/Authentication/action'

 export interface LoginType {
  email : string;
  password:string
}

export function Login() {
  const navigate = useNavigate()
  const dispatch:Dispatch<any> = useDispatch()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toast = useToast()
  const toastIdRef = useRef<string | number | undefined>();
  const {token} = useSelector((store:any)=>store.authReducer)
  const {isAuth} = useSelector((store:any)=>store.authReducer)
  const {errorMessage} = useSelector((store:any)=>store.authReducer)
  const [logindata,setLoginData] = useState<LoginType>({
    email:"",
    password:""
  })

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login(logindata))
        setLoginData({email:"",password:""})
  }
  
  useEffect(() => {
    if(token){
      toastIdRef.current = toast({
        title: 'Success',
        description: 'User LoggedIn Successful',
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;

       setTimeout(()=>{
         navigate("/")
       },4000)
    }
  
    
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
  }, [token])
  // 

  useEffect(()=>{
    if(errorMessage == "Firebase: Error (auth/user-not-found)."){
      toastIdRef.current = toast({
        title: 'Failed!!',
        description: 'User Not found! Please Signup First',
        status: 'error',
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
    
  useEffect(()=>{
    if(errorMessage == "Firebase: Error (auth/wrong-password)."){
      toastIdRef.current = toast({
        title: 'Failed!!',
        description: 'Wrong Password',
        status: 'error',
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

  const [submissiondisbled,setSubmissiondisbled] = useState<boolean>(false)

 
  return (
   <>
   <Box  position={"relative"}  style={{backgroundImage:`url(${blackbgEar})`, 
  //  backgroundRepeat:"no-repeat",
     backgroundSize:"cover",}}>
  
   
     <form onSubmit={handleLogin}  style={{ 
      // position:"absolute",
    //  top:"0",
     backgroundPosition:"center",
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     minHeight:'100vh'
     
    
     }} 
     >
  
   
    <Flex
    style={{backgroundImage:`url(${blackbgEar})`, 
    //  backgroundRepeat:"no-repeat",
       backgroundSize:"cover"
      
      }}
    
      
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack  borderRadius={"none"}  className="animate__animated animate__rubberBand" w={{base:"90%",sm:"90%",md:"80%",lg:"50%",xl:"40%","2xl":"40%"}} >
        <Stack  align={'center'}>
          <Heading color={"white"} fontSize={'4xl'} textAlign={'center'}>
           Login
          </Heading>
          
        </Stack>
        <Box
        
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
           
             
                
            
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
                  }} type="email" value={logindata.email} onChange={(e)=>setLoginData((prev) => ({...prev,email:e.target.value}))} />
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
                  }}   value={logindata.password} onChange={(e)=>setLoginData((prev) => ({...prev,password:e.target.value}))} type={showPassword ? 'text' : 'password'} />
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
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Not registered? <Link href="/signup" color={'rgb(255,189,89)'} fontWeight={"600"} >Signup</Link>
              </Text>
              <Text align={'center'}>
               <Link href="/adminlogin" color={'rgb(255,189,89)'} fontWeight={"600"} > Admin Login <ArrowForwardIcon  /> </Link>
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