import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import FormUser from "../../Components/FormUser";
import { ContextAPI } from "../../Contexts/Global";
import LocalContextProvider from "../../Contexts/Local";
import Followers from "../../Components/Followers";
import Loading from "../../Components/LoadingPage";
import { sleep } from "../..";

const Profile = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const { showFollowers, setLoadingText, setLoading } = useContext(ContextAPI);

  // Carrega os componentes
  const [loadingComponents, setLoadingComponents] = useState<boolean>(true);

  const handleGetData = async () => {
    setLoadingText("profile");
    setLoading(true);
    setLoadingComponents(true);
    await sleep();
    setLoadingComponents(false);
    setLoading(false);

    setLoadingText("");
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingComponents) return <Loading />;
  else
    return (
      <>
        <LocalContextProvider>
          <FormUser />
          {showFollowers && (
            <Center py={6}>
              <Box
                maxW={"500px"}
                w={"full"}
                bg={bgColor}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Followers />
              </Box>
            </Center>
          )}
        </LocalContextProvider>
      </>
    );
};

export default Profile;
