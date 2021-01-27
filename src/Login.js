import React, {useState} from 'react'
import axios from 'axios';
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            firstName : firstName,
            lastName : lastName,
            email :  email,
            userName : userName,
            password : password
        }
        const result = await axios.post('http://iampubli.com:4000/api/influencers/register', data);
    }

    return ( 
        <form
            onSubmit={submit}
        >
            <input 
                type="text"
                value={firstName}
                name="firstName"
                onChange={e => setFirstName(e.target.value)}
            />
            <input 
                type="text"
                value={lastName}
                name="lastName"
                onChange={e => setLastName(e.target.value)}
            />
            <input 
                type="text"
                value={email}
                name="email"
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="text"
                value={userName}
                name="userName"
                onChange={e => setUserName(e.target.value)}
            />
            <input 
                type="text"
                value={password}
                name="password"
                onChange={e => setPassword(e.target.value)}
            />
            <input 
                type="submit"
                value="registrarte"
            />
        </form>
     );
}
 
export default Register;