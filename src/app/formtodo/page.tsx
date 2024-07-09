"use client";

import AddForm from "@/components/AddForm";
import React from "react";

const initialState = { message: null };

const FormToDo = () => {
  return (
    <div className="w-[30vw] h-auto bg-blue-200 m-auto">
      <AddForm />
    </div>
  );
};

export default FormToDo;
