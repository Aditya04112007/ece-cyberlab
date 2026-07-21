import { useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}

export default Cursor;