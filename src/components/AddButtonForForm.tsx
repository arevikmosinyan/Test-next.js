import { useFormStatus } from 'react-dom';
import React from 'react';

const AddButtonForForm = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending}>
      Add
    </button>
  );
};

export default AddButtonForForm;
