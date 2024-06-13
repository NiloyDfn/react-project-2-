import { Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            Welcome Back
          </Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme="purple">Login</Button>
          <Text textAlign={'right'}>New user? {''}
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/signup'}>sign-up</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
