import React,{useEffect,useState} from 'react'

export const Screen2 = (props) => {
    const [testInput,setTestInput] = useState('');

    useEffect(()=>{
        console.log('useEffect called!');

    },[])
    return (
        <div>
            <h1>THIS IS SCREEN2</h1>
            <h2>{props.match.params.id}</h2>
            <input onChange={(e)=>{setTestInput(e.target.value)}}/>
        </div>
    )
}




export default Screen2;