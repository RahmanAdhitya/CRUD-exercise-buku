import { Checkbox, CheckboxGroup, FormControl } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CreateBook = ({ name }) => {
  return (
    <FormControl>
      <CheckboxGroup value>{name}</CheckboxGroup>
    </FormControl>
  );
};
export default CreateBook;
