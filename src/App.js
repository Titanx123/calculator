import { useState } from "react";
import "./App.css";
function App() {
const [result,setResult] = useState("");
const ButtonClk = (e)=>{
  setResult(result.concat(e.target.name));
}
const clear = ()=>{
  setResult("");
}
const handleEnter = ()=>{
  try{
    setResult(eval(result).toString());
  } catch (err){
    setResult("Error");
  }
}
  
  return (
    <>
    <div className="calculater-container">
      <div className="calculator">

        <div className="input-text-box"><input type="text" value={result} placeholder="0" className="text-box"/ ></div>
        <div className="calculator-operations">
          <div className="main-elament">
          <button onClick={clear} id="clear" className="cleaar-button">C</button>
          </div>
          <div className="calculator-first-bar">
            <button onClick={ButtonClk} name="1" className="one">1</button>
            <button onClick={ButtonClk} name="2" className="teo">2</button>
            <button onClick={ButtonClk} name="3" className="three">3</button>
            <button onClick={ButtonClk} name="/" className="divide">/</button>
          </div>
          <div className="calculator-second-bar">
            <button onClick={ButtonClk} name="4" className="four">4</button>
            <button onClick={ButtonClk} name="5" className="five">5</button>
            <button onClick={ButtonClk} name="6" className="six">6</button>
            <button onClick={ButtonClk} name="-" className="minus">-</button>
          </div>
          <div className="calculator -third-bar">
            <button onClick={ButtonClk} name="7" className="seven">7</button>
            <button onClick={ButtonClk} name="8" className="eigth">8</button>
            <button onClick={ButtonClk} name="9" className="nine">9</button>
            <button onClick={ButtonClk} name="+" className="add">+</button>
          </div>
          <div className="calculator-fourth-bar">
            <button onClick={ButtonClk} name="." className="dot">.</button>
            <button onClick={ButtonClk} name="0" className="zero">0</button>
            <button onClick={handleEnter} id="result">=</button>
            <button  onClick={ButtonClk} name="*" className="mul">*</button>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
