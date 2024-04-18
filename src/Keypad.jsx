import React from "react";

const Keypad = ({ style }) => (
  <div
    id="display"
    className={`${style}  grid grid-cols-3 gap-3 ml-4 mt-1 w-1/2 h-full`}
  >
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
content-center text-center rounded-md cursor-pointer "
    >
      Q
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md p-4"
    >
      W
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md "
    >
      E
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
content-center text-center rounded-md cursor-pointer "
    >
      A
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md "
    >
      S
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md p-4"
    >
      D
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md "
    >
      Z
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center rounded-md "
    >
      X
    </div>
    <div
      className="text-lg font-extrabold bg-gray-400 shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700
      content-center text-center p-4 rounded-md "
    >
      C
    </div>
  </div>
);

export default Keypad;
