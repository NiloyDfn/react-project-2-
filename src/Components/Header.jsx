import React from "react";
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  transition,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        p={"0"}
        width={"10"}
        h={"10"}
        colorScheme="purple"
        borderRadius={"full"}
        onClick={onOpen}
      >
        {" "}
        <IoIosMenu size={"25"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>video hub</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/videos"}>videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/videos?category=free"}>Free videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/upload"}>Upload video</Link>
              </Button>
            </VStack>
            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Log-in</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
                _hover={{
                  bg: "purple.700",
                  color: "white",
                  transition: "all 0.5s ease",
                }}
              >
                <Link to={"/signup"}>Sign-up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
