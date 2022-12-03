import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ContextAPI } from "../../Contexts/Global";
import { useContext, useEffect } from "react";
import Loading from "../../Components/LoadingPage";
import { sleep } from "../..";

const CreateUser = () => {
  // Context
  const { setUser, user, loading, setLoading, setLoadingText } =
    useContext(ContextAPI);
  // Chakra UI
  const bgFlex = useColorModeValue("gray.50", "gray.800");
  const bgStack = useColorModeValue("white", "gray.700");

  // Função que obtem os dados da API no carregamento da página
  const handleGetData = async () => {
    setLoadingText("form");
    await sleep();
    setLoading(false);
    setLoadingText("");
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={bgFlex}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={bgStack}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              User Profile Create
            </Heading>
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      aria-label="remove Image"
                      icon={<SmallCloseIcon />}
                    />
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="Name" isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="Complete name of user"
                _placeholder={{ color: "gray.500" }}
                type="text"
                value={user.name}
                onChange={(data) => {
                  setUser({ ...user, name: data.currentTarget.value });
                }}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                value={user.email}
                onChange={(data) => {
                  setUser({ ...user, email: data.currentTarget.value });
                }}
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
                onClick={() => setUser({ name: "", email: "" })}
              >
                Cancel
              </Button>
              <Link to={`/profile`}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default CreateUser;
