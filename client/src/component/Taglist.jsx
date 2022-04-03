import { Button, Tbody, Tr, Td } from '@chakra-ui/react';

const Taglist = ({ id, name, deleteBtn }) => {
  return (
    <Tbody>
      <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>
          <Button ms={4} colorScheme="orange" onClick={() => deleteBtn()}>
            Delete
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default Taglist;
