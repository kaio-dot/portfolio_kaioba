import { useEffect } from "react";

export default function DoomGame() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-dos.com/6.22/current/js-dos.js";
    script.onload = () => {
      window.Dos(document.getElementById("jsdos"), {
        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
      }).ready((fs, main) => {
        fs.extract("https://js-dos.com/6.22/current/test/dosbox-x.zip").then(() =>
          main(["-c", "doom"])
        );
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div id="jsdos" style={{ width: "500px", height: "300px" }}></div>
    </div>
  );
}
