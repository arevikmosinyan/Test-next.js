"use client";

import AddButtonForForm from "@/components/AddButtonForForm";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { handleAction } from "./formserver";
import { StateForAction } from "@/app/formtodo/types/form";
import { todo } from "node:test";

const initialState: StateForAction = { message: null, todo: "" };

const toDoList = ["school", "kindergarder", "elementary", "middle"];

const AddForm = () => {
  const [state, formAction] = useFormState<StateForAction>(
    handleAction,
    initialState
  );

  useEffect(() => {
    if (state.message === "Success") {
      toDoList.push(state.todo);
    }
  }, [state.message, state.todo]);

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
