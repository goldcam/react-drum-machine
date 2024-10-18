import React from "react";

export class DrumPad extends React.Component{
    
    render(){
      return (
        <div className="key" 
             data-key={this.props.keyCode}>
          <div class="drum-pad" 
               id={this.props.displaySound}
               onClick={this.props.clickPlaySound}
               data-key={this.props.keyCode}
               >
            <audio data-key={this.props.keyCode}
                   src={this.props.soundClip}
                   class="clip"
                   id={this.props.displayKey}>
            </audio>
                  {this.props.displayKey}
          </div>
          <div className="sound">{this.props.displaySound}</div>
        </div>      
      );
    }
  }

  export default DrumPad;