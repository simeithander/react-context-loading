import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { sleep } from "..";
import { ContextAPI } from "../Contexts/Global";
import { LocalContextAPI } from "../Contexts/Local";
import LoadingComponent from "./LoadingComponent";

const Followers = () => {
  const { users } = useContext(LocalContextAPI);
  const { setLoadingText, setLoading } = useContext(ContextAPI);
  const [loadingComponents, setLoadingComponents] = useState<boolean>(true);

  const handleGetData = async () => {
    setLoadingText("followers");
    setLoadingComponents(true);
    setLoading(true);
    await sleep();
    setLoading(false);
    setLoadingComponents(false);
    setLoadingText("");
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingComponents) return <LoadingComponent />;
  else
    return (
      <TableContainer>
        <Table variant="simple">
          <TableCaption>My Followers</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => {
              return (
                <Tr key={index + 1}>
                  <Td>{index}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Email</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
};

export default Followers;
