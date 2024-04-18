import { useState } from "react";
import { LiaFreeCodeCamp } from "react-icons/lia";

import KeyBoard from "./KeyBoard";
import DrumControl from "./DrumControl";

const firstSoundsGroup = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const secondSoundsGroup = [
  {
    keyCode: 81,
    key: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    key: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    key: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    key: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    key: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    key: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    key: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    key: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup,
};

const App = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [displayName, setDisplayName] = useState("");
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = "#000000";
    key.parentElement.style.color = "#ffffff";
  };

  const deActivatedKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#ffffff";
    audio.parentElement.style.color = "#000000";
  };

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff";
      audio.parentElement.style.color = "#000000";
    }, 300);
  };

  const play = (key, sound) => {
    setDisplayName(sound);
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio);
  };

  const stop = () => {
    setPower(!power);
  };

  const changeSoundGroup = () => {
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setDisplayName("Smooth Piano Kit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setDisplayName("Heater Kit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const audioes = sounds.map((sound) => document.getElementById(sound.key));
    audioes.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  return (
    <div
      id="drum-machine"
      className="flex h-screen w-full justify-center items-center bg-black "
    >
      {setKeyVolume()}
      <div className="wrapper flex flex-col h-[400px] w-[800px] border-4 border-orange-400 bg-blue-200">
        <div className="flex flex-row items-center justify-end pr-2 ">
          <span className="text-xl pr-1 font-extrabold">FCC</span>
          <LiaFreeCodeCamp className="h-[30px] w-[30px]" />
        </div>
        <div className="flex flex-row justify-between h-full">
          <KeyBoard
            sounds={soundsGroup[soundType]}
            play={play}
            power={power}
            deactivateAudio={deactivateAudio}
          />
          <DrumControl
            stop={stop}
            power={power}
            volume={volume}
            name={displayName}
            changeSoundGroup={changeSoundGroup}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
