import { Button, Tbody, Tr, Td } from '@chakra-ui/react';
import React from 'react';
// import axiosInstance from '../lib/api';

const Booklist = ({ id, title, deleteBtn, editStatusBtn, tags }) => {
  console.log(tags);
  return (
    <Tbody>
      <Tr>
        <Td>{id}</Td>
        <Td>{title}</Td>
        <Td>{tags}</Td>
        <Td>
          <Button ms={4} colorScheme="orange" onClick={() => deleteBtn()}>
            Delete
          </Button>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default Booklist;
