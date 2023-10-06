import { Spinner } from "@chakra-ui/react";
import React from "react";

export default function CkSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <Spinner
        color="blue.500"
        size="lg"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
      />
    </div>
  );
}
