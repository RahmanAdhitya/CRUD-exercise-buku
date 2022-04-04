import { Button, Tbody, Tr, Td, MenuButton, MenuList, Checkbox, Menu, CheckboxGroup, MenuItem, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../lib/api';

const Booklist = ({ id, title, deleteBtn, editStatusBtn, tags, addTagsBtn, renderTags }) => {
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
