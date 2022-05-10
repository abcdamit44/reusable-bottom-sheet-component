import { useState } from 'react';
import './App.css';
import ChildComp from './ChildComp';

function App() {
  const [show, setShow] = useState(false)
  // const [slide, setSlide] = useState("0")
  const showComp = () => {
    setShow(true);
  }
  const slideDown = () => {
    setShow(false);
    // setSlide("100%");
  }
  return (
    <div className="App">
      <button onClick={showComp}>Open Bottom Sheet</button>
      <ChildComp>
        <div onClick={slideDown} style={{
          display: `${show ? "flex" : "none"}`,
          position: "absolute",
          top: `0`,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0,0,0,0.5)",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "300ms ease-in-out linear"
        }}>
          <div style={{
            width: "300px",
            height: "400px",
            textAlign: "center",
            fontSize: "1.1rem",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            Hello I am Child
          </div>
        </div>
      </ChildComp>
    </div>
  );
}

export default App;
