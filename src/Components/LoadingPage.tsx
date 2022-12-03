import {
  Box,
  Center,
  Fade,
  Flex,
  Heading,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ContextAPI } from "../Contexts/Global";

const Loading = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  // Context
  const { loading, loadingText } = useContext(ContextAPI);
  return (
    <Fade in={loading}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Center py={6}>
          <Box
            maxW={"500px"}
            w={"full"}
            bg={bgColor}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner size={"lg"} />
              <Heading as="h2" size="md" noOfLines={1} mt={5}>
                Loading {loadingText}...
              </Heading>
            </Box>
          </Box>
        </Center>
      </Flex>
    </Fade>
  );
};

export default Loading;
