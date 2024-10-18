import React from "react";
import keys from './keys.json'
import DrumPad from "./DrumPad";

  
export class Drum extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playing:'',
        padKeys: keys,
      }
      this.playSound = this.playSound.bind(this);
      this.clickPlaySound = this.clickPlaySound.bind(this);
      this.removeTransition = this.removeTransition.bind(this);
    }
    
    playSound(e){   
          const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
                key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
          if(!audio) return;
          audio.currentTime = 0;
          audio.play();
          key.classList.add('playing');
          key.addEventListener('transitionend', this.removeTransition);
      this.setState({
        playing: e.target.id
      });
    }
    
    removeTransition(e){
           if(e.propertyName !== 'transform') return;
           e.target.classList.remove('playing');
    }
    
    clickPlaySound(e){
      let dataKey = e.target.dataset.key,
          ad = document.querySelector('audio[data-key="' + dataKey + '"]'),
          parent = e.target.parentNode;
      ad.currentTime = 0;
      ad.play();
      parent.classList.add('playing');
      parent.addEventListener('transitionend', this.removeTransition);
      this.setState({
        playing: e.target.id
      });
    }
    
    componentDidMount(){
      window.addEventListener('keydown', this.playSound);
    }
    
    render(){
      const padKeys = this.state.padKeys.map((item, _key) => 
                      <DrumPad keyCode={item.keyCode}
                               displayKey={item.displayKey}
                               displaySound={item.displaySound}
                               clickPlaySound={this.clickPlaySound}
                               soundClip={item.soundClip}/>
                               
            );
                                             
      return (
        <>
         <div id="display"> {this.state.playing} Sound</div>
                                               
         <div className='keys'>
          {padKeys}
         </div>                                 
        </>
      );
    }
  }

  export default Drum

