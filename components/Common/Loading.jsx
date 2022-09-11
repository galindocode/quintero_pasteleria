import React from "react";
import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    <span className="absolute top-80 left-[45%] block">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#19408f"}
        height={50}
        width={50}
      />
    </span>
  );
};
