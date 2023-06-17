import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Heading,
    AlertDialog,
  } from '@chakra-ui/react'
  import success from "../assets/success.png"
  import { NavLink } from 'react-router-dom';
  
  
  function AlertDialogs({children,val}:any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} bg="blackAlpha.900" isDisabled={val} colorScheme='white' w="200px">{children}</Button>
  
        <Modal isOpen={isOpen}>
         
          <ModalContent display={'flex'} justifyContent={'center'} alignItems={'center'} p={5}>       
            <ModalBody flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
             <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyd1M9qOYUfSdxf_wBIfuyD7tNFpKWmC41l0Z9-6AZA&s' />
             <Heading fontSize="20px">Your Order Placed Successfully</Heading>
            </ModalBody>  
            <ModalFooter>
              <NavLink to='/'>
              <Button colorScheme='blue' mr={3} w="100px" onClick={onClose}>
                Ok
              </Button>
              </NavLink>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default AlertDialogs;