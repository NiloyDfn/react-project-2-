import React from "react";
import { Box, Heading, Img, Container, Stack , Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const Home = () => {
  return (
    <Box >

      <Container maxW={"container.xl"} p={"16"} minH={"100vh"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid purple"}
          m={"auto"}
        >
          Services
        </Heading>
        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}>
          <Img src={img5} h={['120', '400']} filter={"hue-rotate(-130deg)"}/>
          <Text className="bg-purple-600 p-5 rounded-xl tracking-tighter leading-normal uppercase" textAlign={'center'} lineHeight={'150%'} p={['4', '10']}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit non debitis nobis voluptatem omnis atque doloribus reiciendis at perspiciatis nostrum quaerat magni possimus, vel delectus necessitatibus quod optio quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae enim et officiis reiciendis molestiae atque velit quae a dignissimos est, ex laboriosam eaque nihil soluta asperiores? Vitae, sapiente voluptas?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nobis laborum repellat minus eum debitis commodi. Incidunt temporibus tempore, aperiam harum repellat saepe soluta iure, qui voluptatibus ex, tempora odio?
          </Text>
        </Stack>
      </Container>
      <MyCarousel />

    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={2000}
      showThumbs={false}
      showIndicators={true}
    >
      <Box w={"full"} h={['50vh','100vh']}>
        <Img h={'full'} w={'full'} objectFit={'cover'} src={img1} />
        <Heading bg={"blackAlpha.600"} color={"white"} className="legend">
          Stepping On Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Img src={img2} />
        <Heading bg={"blackAlpha.600"} color={"white"} className="legend">
          Stepping On Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Img src={img3} />
        <Heading bg={"blackAlpha.600"} color={"white"} className="legend">
          Stepping On Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Img src={img4} />
        <Heading bg={"blackAlpha.600"} color={"white"} className="legend">
          Stepping On Future
        </Heading>
      </Box>
      <Box w={"full"} h={"100vh"}>
        <Img src={img5} />
        <Heading bg={"blackAlpha.600"} color={"white"} className="legend">
          Stepping On Future
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
