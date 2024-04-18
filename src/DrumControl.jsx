import { Switch } from "@material-tailwind/react";
import React from "react";

const DrumControl = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changeSoundGroup,
}) => (
  <div className="  controle flex flex-col w-1/2 h-full   justify-center ">
    <div className="flex flex-col items-center text-[20px] font-bold h-full place-content-center pb-6 ">
      <div className="flex flex-col items-center pb-6">
        <div className="">Power</div>
        <Switch defaultChecked className="active" onClick={stop} />
      </div>
      <h2
        className=" bg-gray-200 w-1/2 min-h-[40px] max-h-[40px] text-center content-center   "
        id="display"
      >
        {name}
      </h2>
      <div className="pt-6 pb-6">
        <h2>Volume: %{Math.round(volume * 100)}</h2>
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      <div onClick={changeSoundGroup}>Bank</div>
      <Switch onClick={changeSoundGroup} />
    </div>
  </div>
);

export default DrumControl;
