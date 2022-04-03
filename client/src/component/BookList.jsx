import { Button, Tbody, Tr, Td, MenuButton, MenuList, Checkbox, Menu, CheckboxGroup, MenuItem, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../lib/api';

const Booklist = ({ id, title, deleteBtn, editStatusBtn, tags, addTagsBtn, renderTags }) => {
  // const [tagList, setTagList] = useState([]);
  // const [inputValuesTags, setInputValuesTags] = useState([]);

  // const inputHandlerTags = (event) => {
  //   const { value, id } = event.target;

  //   setInputValues(value, id);
  // };

  // const renderTags = () => {
  //   return tagList.map((val) => {
  //     return (
  //       <MenuItemOption onChange={inputHandlerTags} closeOnSelect={false} value={val.id}>
  //         {val.tags_name}
  //       </MenuItemOption>
  //     );
  //   });
  // };

  // const fetchTags = async () => {
  //   try {
  //     const res = await axiosInstance.get('/tags');
  //     setTagList(res.data.result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const addTags = async (Book_Id) => {
  //   try {
  //     console.log(Book_Id);
  //     const newTagsBook = {
  //       Book_id: selectedBookId,
  //       Tag_id: selectedTagsId,
  //     };
  //     const res = await axiosInstance.post(`/connection/${Book_Id}`, newTagsBook);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchTags();
  // }, []);
  return (
    <Tbody>
      <Tr alignItems="center">
        <Td>{id}</Td>
        <Td>{title}</Td>
        <Td>{tags}</Td>
        <Td>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="blue">
              add new tags
            </MenuButton>
            <MenuList closeOnSelect={false}>
              <MenuOptionGroup type="checkbox">
                {renderTags}
                <Button colorScheme="blue" onClick={() => addTagsBtn()}>
                  submit
                </Button>{' '}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Td>

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
