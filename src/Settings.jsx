import React from "react";
import { Switch } from "@material-tailwind/react";

const Settings = () => (
  <div className="flex flex-col w-1/2 h-full  ">
    <div className="flex flex-col items-center  border-2 border-black pt-4 ">
      <p>Power</p>
      <Switch />
    </div>
  </div>
);
export default Settings;
