import React,{useState,useEffect} from 'react'



 
export const ContactFormComponent = () => {
    const allOptions = [
        'Telephone',
        'Email',
        'Face-To-Face'
    ]


    function returnOption(option){
        return  (
                <>
                <option name={option} id={option} value={option}>{option}</option>
                </>
            )

    }
    const allOptionsSelect = allOptions.map(option=>returnOption(option))
    function onFormSubmit(e){
        e.preventDefault();
        console.log("Form submitted!");
        console.log(username);
        console.log(password);
        console.log(firstName);
        console.log(lastName);
        console.log(phoneNumber);
        console.log(contactType);
        console.log(email);


    }

    const [username,changeUsername] = useState('');
    const [email,changeEmail] = useState('');
    const [password,changePassword] = useState('');
    const [firstName,changeFirstName] = useState('');
    const [lastName,changeLastName] = useState('');
    const [phoneNumber,changePhoneNumber] = useState(0);
    const [contactType,changeContactType] = useState('Tel.');


    useEffect(function () {
        console.log("Use effect called!");
    },
    [
        // username
    ])

    return (
        <div>
            <form onSubmit={onFormSubmit}>
            <input onChange={e=>changeFirstName(e.target.value)} value={firstName} placeholder='firstName' id='firstName' type='text' name='firstName'/>
            <input onChange={e=>changeLastName(e.target.value)} value={lastName} placeholder='lastName' id='lastName' type='text' name='lastName'/>
            <input onChange={e=>changePhoneNumber(e.target.value)} value={phoneNumber} placeholder='phoneNumber' id='phoneNumber' type='number' name='phoneNumber'/>
                <input onChange={e=>changeUsername(e.target.value)} value={username} placeholder='username' id='username' type='text' name='username' />
                <input onChange={e=>changeEmail(e.target.value)} value={email} placeholder='email' id='email' type='email' name='email' />
                <input onChange={e=>changePassword(e.target.value)} value={password} placeholder='password' id='password' type='password' name='password'/>

                <select onChange={e=>changeContactType(e.target.value)} value={contactType} id='contactType' name='contactType'>
                    
                    {allOptionsSelect}
                </select>
                
                <button  type='submit'>Submit</button>

            </form>


        </div>
    )
}
