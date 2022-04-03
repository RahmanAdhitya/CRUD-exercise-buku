import { Button, HStack, Input, Stack, Table, Thead, Tr, Th, TableCaption, TableContainer, CheckboxGroup, Checkbox, Center, MenuItemOption } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Booklist from '../../component/BookList';
import Taglist from '../../component/Taglist';
import axiosInstance from '../../lib/api';
import { useFormik } from 'formik';

const books = () => {
  const [booklist, setBooklist] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [tagList, setTagList] = useState([]);
  const [inputValueTags, setInputValueTags] = useState([]);

  const formik = useFormik({
    initialValues: {
      Tags_id: [],
    },
    onSubmit: (values) => {
      console.log(values);
      setInputValueTags(values);
    },
  });

  const fetchBooks = async () => {
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
      const res = await axiosInstance.delete(`/books/${id}`);
      fetchBooks();
    } catch (err) {
      console.log(err);
    }
  };

  //buat cetak data
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
          renderTags={renderTags()}
          addTagsBtn={() => {
            addTags(val.id, val.Tags);
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
        book_title: inputValue,
      };

      const addTags = {};
      const res = await axiosInstance.post(`/books`, newData);
      fetchBooks();
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
    let selectedTags = [];
    const addTags = {
      Tags_id: id,
    };

    selectedTags.push(addTags);

    const res = await axiosInstance.patch(`/${id}`, selectedTags);
    setBooklist(res.data.result);
  };

  const renderTags = () => {
    return tagList.map((val) => {
      // console.log(val.id);
      return (
        <MenuItemOption name={val.id} id={val.id} value={formik.values.Tags_id} onChange={formik.handleChange} closeOnSelect={false}>
          {val.tags_name}
        </MenuItemOption>
      );
    });
  };

  const fetchTags = async () => {
    try {
      const res = await axiosInstance.get('/tags');
      setTagList(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  // const inputHandlerTags = (event) => {
  //   const id = event.target.value;
  //   setInputValueTags(id);
  // };

  const addTags = async (Book_id) => {
    try {
      console.log(Book_id);
      const newTagsBook = {
        Book_id: Book_id,
        Tag_id: inputValueTags,
      };

      console.log(newTagsBook);
      const res = await axiosInstance.post(`/connection/${Book_id}`, newTagsBook);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks(), fetchTags();
  }, []);
  return (
    <Stack mt={4} alignItems="center" spacing={6}>
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

      <HStack width="lg">
        <Input name="book_title" onChange={inputHandler} placeholder="input new book" />
        <Button width="xm" onClick={() => createBtn()}>
          Create
        </Button>
      </HStack>
    </Stack>
  );
};

export default books;
