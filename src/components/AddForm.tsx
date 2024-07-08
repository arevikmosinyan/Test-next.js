'use client';

import AddButtonForForm from '@/components/AddButtonForForm';
import React from 'react';
import { useFormState } from 'react-dom';
import { handleAction } from './formserver';
import { StateForAction } from '@/app/formtodo/types/form';

const initialState: StateForAction = { message: null };

const AddForm = () => {
  const [state, formAction] = useFormState<StateForAction>(
    handleAction,
    initialState,
  );

  console.log(state, 'state');
  return (
    <form
      action={formAction}
      className='flex flex-col items-center justify-center mt-[60px]'>
      <label className=''>Enter to do</label>
      <input type='text' name='todo' className='rounded-md border-red-300' />
      {state.message}
      <AddButtonForForm />
    </form>
  );
};

export default AddForm;
