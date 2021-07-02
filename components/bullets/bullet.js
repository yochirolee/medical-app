import { useState } from "react";

export default function Bullet({ active }) {
  return (
    <a
      className={`h-3 w-3  rounded-full ${
        active ? "bg-gray-600" : "border border-gray-400"
      } `}
    ></a>
  );
}
