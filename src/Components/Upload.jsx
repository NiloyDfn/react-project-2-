import { Button, Container, HStack, Input, VStack, calc } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} height={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vw"} />
        <form>
          <HStack>
           <Input type={"file"} required css={{
            "&::file-selector-button":{
                width: 'calc(100% + 36px)',
                border : "none",
                height : "100%",
                marginLeft : '-18px',
                color : "purple",
                backgroundColor : 'white',
                cursor : "pointer",
            }
           }}/>
           <Button type={'submit'} colorScheme="purple">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
