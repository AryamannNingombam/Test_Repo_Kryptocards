import React,{useState,useEffect} from 'react';



export const TestingReactHooksComponent = () => {
    const [counter,changeCounter] = useState(0);

    useEffect(function () {
        alert(`You click the button ${counter} times!`);
    })

    return (
        <div>
            <h1>{counter}</h1>


            <button onClick={(e)=>{
                changeCounter(counter+1);
            }}>Click Here!</button>


        </div>
    )
}
