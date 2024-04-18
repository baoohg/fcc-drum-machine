import React from "react";
import KeyboardKey from "./KeyboardKey";

const KeyBoard = ({ sounds, play, power, deactivateAudio }) => {
  return (
    <div className="keyboard grid grid-cols-3 gap-3 ml-6 w-1/2 mb-8 ">
      {power
        ? sounds.map((sound) => (
            <KeyboardKey
              sound={sound}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))
        : sounds.map((sound) => (
            <KeyboardKey
              sound={{ ...sound, url: "#" }}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))}
    </div>
  );
};

export default KeyBoard;
