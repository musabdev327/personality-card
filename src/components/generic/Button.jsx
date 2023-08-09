import React from 'react'

function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 font-bold rounded-xl text-white bg-theme-orange font-mont"
    >
      {text || "Button"}
    </button>
  );
}

export default Button