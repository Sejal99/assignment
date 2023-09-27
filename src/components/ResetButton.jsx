import React from 'react';

function ResetButton({ resetTodos }) {
  return (
    <button
      onClick={resetTodos}
      className="float-right p-2  shadow-md rounded font-bold text-md text-red-500 cursor-pointer"
    >
      Reset
    </button>
  );
}

export default ResetButton;
