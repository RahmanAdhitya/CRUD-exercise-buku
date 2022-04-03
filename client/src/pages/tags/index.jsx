import React, { useEffect, useState } from 'react';
import axiosInstance from '../../lib/api';
import { Button, Table, Thead, Input, Tr, Th, TableCaption, TableContainer, HStack, Stack, Center } from '@chakra-ui/react';
import Taglist from '../../component/Taglist';

const tags = () => {
  const [tagsList, setTagsList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get('/tags');
      const data = res.data.result;
      // console.log(res.data);
      setTagsList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBtnHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/tags/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  const renderData = () => {
    return tagsList.map((val) => {
      return <Taglist id={val.id} name={val.tags_name} deleteBtn={() => deleteBtnHandler(val.id)} />;
    });
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setInputValue(value, name);
  };

  const createBtn = async () => {
    try {
      const newData = {
        tags_name: inputValue,
      };
      const res = await axiosInstance.post('/tags', newData);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack justifyContent="space-evenly" alignItems="center">
      <TableContainer>
        <Table>
          <TableCaption fontSize="lg" placement="top">
            Tags List
          </TableCaption>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Tag Name</Th>
              <Th>action</Th>
            </Tr>
          </Thead>
          {renderData()}
        </Table>
      </TableContainer>
      <HStack width="lg">
        <Input name="tags_name" onChange={inputHandler} placeholder="add new tag" />
        <Button width="xm" onClick={() => createBtn()}>
          Create
        </Button>
      </HStack>
    </Stack>
  );
};

export default tags;
