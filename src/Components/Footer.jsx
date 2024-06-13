import {
  Box,
  Input,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram , FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <Box borderRadius={'20px 0 20px 0'} bg={"blackAlpha.900"} minHeight={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size="md" textTransform={"uppercase"} textAlign={['center','left']}>
            Subscribe to my company Dfn
          </Heading>
          <HStack borderBottom={"1.5px solid white"} py={"2"}>
            <Input
              placeholder="Enter Email here"
              type="email"
              required
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              color={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
        <Heading textAlign={'center'}  textTransform={'uppercase'}>
            Video Hub
        </Heading>
        <Text>®️All Rights reseved.</Text>
        </VStack>
        <VStack
          w={"full"}
        >
        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
        </Heading>
        <Button variant={'link'} colorScheme="facebook">
            <a  target="blank" className="flex gap-2 items-center justify-center"  href="https://facebook.com/foysalniloy7">
                <FaFacebook/>
                Facebook</a>
        </Button>
        <Button variant={'link'} colorScheme="facebook">
            <a target="blank" className="flex gap-2 items-center justify-center" href="https://facebook.com/foysalniloy7">
                <FaYoutube/>
                YOUTUBE</a>
        </Button>
        <Button variant={'link'} colorScheme="instagram">
            <a target="blank" className="flex gap-2 items-center justify-center" href="https://facebook.com/foysalniloy7">
                <FaInstagram/>
                INSTAGRAM</a>
        </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
