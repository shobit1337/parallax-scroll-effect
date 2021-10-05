import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="Parallax">
        <div
          className="Parallax-image Parallax-sky-background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax-image Parallax-landscape-foreground"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax-content"
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        >
          <div className="heading">TREKK</div>
        </div>
      </section>
      <section className="Parallax">
        <div
          className="Parallax-image Parallax-brown-background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
      </section>
    </>
  );
}

export default App;
