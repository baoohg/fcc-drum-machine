import { LiaFreeCodeCamp } from "react-icons/lia";
import Keypad from "./Keypad";
import Settings from "./Settings";
import Keyboard from "./Keyboard";

function App() {
  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="flex h-full w-full justify-center items-center absolute bg-black ">
      <div
        id="drum-machine"
        className="flex flex-col h-[400px] w-[800px] border-4 border-orange-400 bg-blue-500 "
      >
        {" "}
        <div className="flex flex-row items-center justify-end pr-2">
          <span className="text-xl pr-1">FCC</span>
          <LiaFreeCodeCamp className="h-[35px] w-[35px]" />
        </div>
        <div className="flex flex-row justify-between">
          {/* <Keypad style="ml-4 mt-1 w-1/2 h-full " />
          <Settings /> */}
          <Keyboard play={play} />
        </div>
      </div>
    </div>
  );
}

export default App;
