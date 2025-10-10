import { useEffect, useRef } from "react";
import { Dos } from "js-dos";

export default function DoomGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    Dos(canvasRefRef.current, {
      wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js"
    }).ready((fs,main) => {
      fs.createFile("/Doom1.WAD", "/doom/Doom1.WAD", { base64: false }).then(() => {
        main(["-iwad", "/doom1.wad"]);
    });
  });
}, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <canvas ref={canvasRef} width="440" height="200"></canvas>
    </div>


  )






}
