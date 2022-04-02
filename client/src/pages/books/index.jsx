import { Button, HStack, Input, Stack, Table, Thead, Tr, Th, TableCaption, TableContainer } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Booklist from '../../component/BookList';
import axiosInstance from '../../lib/api';

const books = () => {
  const [booklist, setBooklist] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchPost = async () => {
    try {
      const res = await axiosInstance.get('/books');
      setBooklist(res.data.result);
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteListBtn = async (id) => {
    try {
      console.log(id);
      const res = await axiosInstance.delete(`/${id}`);
      setBooklist(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const renderList = () => {
    return booklist.map((val) => {
      const tags = val.Tags;
      const tags_name = [];
      tags.map((val) => {
        return tags_name.push(`${val.tags_name}, `);
      });
      return (
        <Booklist
          id={val.id}
          title={val.book_title}
          tags={tags_name}
          deleteBtn={() => {
            deleteListBtn(val.id);
          }}
          editStatusBtn={() => {
            editStatusHandler(val.id);
          }}
        />
      );
    });
  };

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setInputValue(value, name);
  };

  const createBtn = async () => {
    try {
      const newData = {
        action: inputValue,
      };
      console.log(newData);
      const res = await axiosInstance.post(`/`, newData);
      setBooklist(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const editStatusHandler = async (id) => {
    console.log(booklist);
    const dataToFind = booklist.find((val) => {
      return val.id == id;
    });

    console.log(dataToFind);
    const newStatus = {
      status: !dataToFind.status,
    };

    const res = await axiosInstance.patch(`/${id}`, newStatus);
    setBooklist(res.data.result);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Stack mt={4} alignItems="center">
      <HStack width="lg">
        <Input name="action" onChange={inputHandler} placeholder="input your activity" />
        <Button width="xm" onClick={() => createBtn()}>
          Create
        </Button>
      </HStack>

      <TableContainer>
        <Table>
          <TableCaption fontSize="lg" fontWeight="bold" placement="top">
            Books Collection
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Book Id</Th>
              <Th>Book Title</Th>
              <Th>Tags</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          {renderList()}
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default books;
