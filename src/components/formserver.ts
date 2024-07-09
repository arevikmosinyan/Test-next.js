"use server";

import { z } from "zod";
import { StateForAction } from "@/app/formtodo/types/form";

const schemaForTodo = z.object({ todo: z.string() });

export async function handleAction(
  state: StateForAction,
  formdata: FormData
): Promise<StateForAction> {
  console.log(formdata, "formdata");

  //   const data = formdata.get('todo');

  const data = schemaForTodo.safeParse({ todo: formdata.get("todo") });
  console.log(data, "data");

  if (data?.success) {
    return { message: "Success", todo: data.data.todo };
  }
  return { message: `Fail with error : ${data.error} `, todo: "" };
}
