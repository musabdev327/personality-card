import React from "react";

function Chip({ text }) {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md bg-chip">
      <div className="text-xs font-normal leading-none max-w-full text-detail-grey flex-initial">
        {text}
      </div>
    </div>
  );
}

export default Chip;
