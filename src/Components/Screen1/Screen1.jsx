import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';






export const Screen1 = () => {
    const [value,changeValue] = useState('');
    const  history = useHistory();
    function onButtonClick(e){
        history.push(`/screen2/${value}`);
    }


    return (
        <div>
            <h1>This is screen 1!</h1>
            <input onChange={(e)=>{changeValue(e.target.value)}}  on type='text' placeholder='Enter name' id='mainInput' name='mainInput'/>
            <button onClick={onButtonClick} >Go to screen 2</button>


            
        </div>
    )
}



export default Screen1;