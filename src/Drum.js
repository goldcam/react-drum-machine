import React, {useState, useEffect} from "react";
import keys from './keys.json'
import DrumPad from "./DrumPad";


export const Drum = () => {

    const [playing, setPlaying] = useState('');
    const [padKeys] = useState(keys);

    const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return;
                audio.currentTime = 0;
                audio.play();
                key.classList.add('playing');
                key.addEventListener('transitionend', removeTransition);                
                setPlaying(e.target.id);
    };
    const removeTransition = (e) => {
        if(e.propertyName !== 'transform') return;
           e.target.classList.remove('playing');
    };

    const clickPlaySound = (e) => {
        let dataKey = e.target.dataset.key,
          ad = document.querySelector('audio[data-key="' + dataKey + '"]'),
          parent = e.target.parentNode;
          ad.currentTime = 0;
          ad.play();
          parent.classList.add('playing');
          parent.addEventListener('transitionend', removeTransition);
          setPlaying(e.target.id);
    };

    useEffect(() => {        
        window.addEventListener('keydown', playSound);
      }, [])

      const padKeysComp = padKeys.map((item,key) => 
            <DrumPad keyCode={item.keyCode}
                    key={key}
                    displayKey={item.displayKey}
                    displaySound={item.displaySound}
                    clickPlaySound={clickPlaySound}
                    soundClip={item.soundClip}/>);



    return (
        <>
         <div id="display"> {playing} Sound</div>
         <div className='keys'>
            {padKeysComp}
         </div>  
        </>
    );
}

export default Drum

