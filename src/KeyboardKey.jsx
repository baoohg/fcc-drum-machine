import { useEffect } from "react";

const KeyboardKey = ({
  play,
  deactivateAudio,
  sound: { id, key, url, keyCode, style },
}) => {
  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, [id]);

  return (
    <button
      value="test"
      id={keyCode}
      className=" drum-pad text-lg font-extrabold  shadow-[rgba(0,0,15,0.5)_5px_5px_5px_0px] shadow-slate-700 bg-white
      content-center text-center rounded-md cursor-pointer"
      onClick={() => play(key, id)}
    >
      <audio className={`  clip`} src={url} id={key} />
      {key}
    </button>
  );
};

export default KeyboardKey;
