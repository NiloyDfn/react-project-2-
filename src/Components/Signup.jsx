import { Avatar, Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
    <form action="">
      <VStack
        alignItems={"stretch"}
        spacing={"8"}
        w={['full', '96']}
        m={"auto"}
        my={"16"}
      >
        <Heading
          py={"4"}
          textAlign={"center"}
          w={"fit-content"}
          borderBottom={"2px solid purple"}
        >
          Video Hub
        </Heading>
        <Avatar alignSelf={'center'}  boxSize={'32'}></Avatar>
        <Input
          placeholder="Enter your name"
          type={"text"}
          focusBorderColor={"purple.500"}
          required
        />
        <Input
          placeholder="Enter an valid email"
          type={"email"}
          focusBorderColor={"purple.500"}
          required
        />
        <Input
          placeholder="Enter your password"
          type={"password"}
          focusBorderColor={"purple.500"}
          required
        />
       
        <Button colorScheme="purple">Signup</Button>
        <Text textAlign={'right'}>Already Signed up? {''}
        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/login'}>Log-in</Link>
        </Button>
        </Text>
      </VStack>
    </form>
  </Container>
    
  )
}

export default Signup
