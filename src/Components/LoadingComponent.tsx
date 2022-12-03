import { Box, Center, Fade, Heading, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextAPI } from "../Contexts/Global";

const LoadingComponent = () => {
  // Context global
  const { loading, loadingText } = useContext(ContextAPI);
  return (
    <Fade in={loading}>
      <Center py={6}>
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
      </Center>
    </Fade>
  );
};

export default LoadingComponent;
