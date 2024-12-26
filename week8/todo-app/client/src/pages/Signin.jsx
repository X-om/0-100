import { useState } from "react";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonWarning from "../components/BottomWarning";

export default function Signin(){
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    return (
    <div className="bg-slate-200 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white h-max w-80 text-center p-2 px-4">
                <Heading label={'Sign in'}/>
                <Subheading label={'Enter your credentials'}/>
                <Inputbox label={'username'} placeholder={'Enter your username'} 
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                <Inputbox label={'password'} placeholder={'Enter your password'}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    type="password"
                />
                <div className="py-4">
                    <Button
                        label={'Sign in'}
                        onClick={async ()=>{
                            const response = await axios.post('http://192.168.250.206:3000/api/v1/user/signin',{
                                username,
                                password
                            });
                            localStorage.setItem('token', response.data.Token);
                            navigate('/dashboard');
                            
                        }}
                    />
                <ButtonWarning label={'Create an account'} buttonText={'Sign up'} to={'/signup'}/>
                </div>
            </div>
        </div>
    </div>
    )
}