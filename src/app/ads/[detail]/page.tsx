import { ServerCompProps } from "@/types";
import React from "react";
import Igdir from "../../../components/Igdir.js";
import Organic from "../../../components/Organic.js";
import Plane from "../../../components/Plane.js";

const DetailPage = (props: ServerCompProps<{ detail: string }>) => {
  return (
    <>
      <h2 className="text-2xl font-bold my-4 text-center">
        Welcome to {props.params.detail.toUpperCase()} Restaurant
      </h2>
      {props.params.detail === "igdir" ? (
        <Igdir />
      ) : props.params.detail === "organic" ? (
        <Organic />
      ) : props.params.detail === "plane" ? (
        <Plane />
      ) : (
        <div>dynamic page {props.params.detail}</div>
      )}
    </>
  );
};
