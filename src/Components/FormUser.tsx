import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "../Contexts/Global";
import { LocalContextAPI } from "../Contexts/Local";

const FormUser = () => {
  const { user, setShowFollowers, showFollowers } = useContext(ContextAPI);
  const { users, setUsers } = useContext(LocalContextAPI);

  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={"https://bit.ly/sage-adebayo"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {user.name}
            </Heading>
            <Text color={"gray.500"}>{user.email}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>{users.length}</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack>
          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              setUsers([...users, user]);
            }}
          >
            Follow
          </Button>
          <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.700")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={() => setShowFollowers(!showFollowers)}
          >
            Show followers list
          </Button>
          <Link to={`/`}>
            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.500")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Go Back
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
};

export default FormUser;
