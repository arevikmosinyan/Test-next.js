import { useFormStatus } from "react-dom";
import React from "react";

const AddButtonForForm = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-blue-500 px-4 py-2 text-white m-2"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
};

export default AddButtonForForm;
