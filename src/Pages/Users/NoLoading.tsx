import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import FormUser from "../../Components/FormUser";
import { ContextAPI } from "../../Contexts/Global";
import LocalContextProvider from "../../Contexts/Local";
import Followers from "../../Components/Followers";
import { sleep } from "../..";

const NoLoading = () => {
  // Hook global do Context
  const { showFollowers, setLoadingText, setLoading } = useContext(ContextAPI);
  // Hook local do componente
  const [loadingComponents, setLoadingComponents] = useState<boolean>(true);
  // Chakra UI
  const bgColor = useColorModeValue("white", "gray.800");

  // Função que obtem os dados da API no carregamento da página
  const handleGetData = async () => {
    setLoadingText("profile");
    setLoading(true);
    setLoadingComponents(true);
    await sleep(5000);
    setLoadingComponents(false);
    setLoading(false);

    setLoadingText("");
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Enquando não é obtido os dados da API, a tela fica em branco
  if (loadingComponents) return <div></div>;
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

export default NoLoading;
