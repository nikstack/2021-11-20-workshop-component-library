import React, {useState, useEffect} from "react";
import internal from "stream";
import "./Slider.css";

interface SliderProps {
  step: number;
  min: number;
  max: number;
  value: number;
  unit: string;
  range?: boolean;
}

export const Slider = ({ ...props }: SliderProps, ) => {

  const [inputValue, setInputValue] = useState(props.value);
  useEffect(() => {setInputValue(props.value)}, [props.value])

  props.unit = "Unit"

  return <div>
          <input className="Textfield" value={inputValue} onChange={(event) => {setInputValue(+event.target.value)}}></input> 
          <span className="Unitlabel">{props.unit}</span>
          <input type="range" className="Slider" 
                  onChange={(event) => {setInputValue(+event.target.value);}} 
                  step={props.step} min={props.min} max={props.max} value={inputValue}></input>
        </div>;
};
