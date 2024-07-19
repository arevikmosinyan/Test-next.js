"use client";

import AddButtonForForm from "@/components/AddButtonForForm";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { handleAction } from "./formserver";
import { StateForAction } from "@/app/formtodo/types/form";

const initialState = { message: "ssdad", todo: "" };

const AddForm = () => {
  const [state, formAction] = useFormState(handleAction, initialState);
  const [toDoList, setToDoList] = useState([
    "school",
    "kindergarder",
    "elementary",
    "middle",
  ]);

  useEffect(() => {
    if (state.message === "Success") {
      setToDoList((prev) => [...prev, state.todo]);
    }
  }, [state]);

  console.log(state, "state");
  return (
    <form
      action={formAction}
      className="flex flex-col items-center justify-center mt-[60px]"
    >
      <label className="">Enter to do</label>
      <input type="text" name="todo" className="rounded-md border-red-300" />
      <AddButtonForForm />
      {
        <div>
          {toDoList.map((todo) => {
            return (
              <div key={todo} className="flex items-center justify-center">
                {todo}
              </div>
            );
          })}
        </div>
      }
    </form>
  );
};

export default AddForm;
