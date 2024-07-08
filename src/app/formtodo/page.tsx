'use client';

import AddForm from '@/components/AddForm';
import React from 'react';

const initialState = { message: null };

const FormToDo = () => {
  return (
    <div className='w-[20vw] h-[20vh] bg-green-300 m-auto'>
      <AddForm />
    </div>
  );
};

export default FormToDo;
