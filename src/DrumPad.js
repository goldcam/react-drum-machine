import React from "react";

export const DrumPad = (props) => {
    return (
        <div className="key" 
             data-key={props.keyCode}>
            <div className="drum-pad" 
                 id={props.displaySound}
                 onClick={props.clickPlaySound}
                 data-key={props.keyCode} >
                <audio data-key={props.keyCode}
                       src={props.soundClip}
                       className="clip"
                       id={props.displayKey}>
                </audio>
                 {props.displayKey}
            </div>
            <div className="sound">{props.displaySound}</div>
        </div>      
    )
}

  export default DrumPad;