import React, { PureComponent, useState } from 'react'
import Users from '../data/Users.json'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const authorization = () => {
        const user = Users.users.find(item => (item.username === login || item.email === login) && item.password === password)
        if(user !== undefined) {
            axios.post("http://localhost:5000/data/user/signin", user);
            navigate('/')
        }
        else alert("Неверный email или пароль");
    }

    return (
        <>
            <div className="h-screen w-screen bg-[#ddd5c0] flex justify-center items-center">
                <div className='bg-white h-[330px] w-[400px] rounded-[30px] px-[65px] pt-[40px]'>
                    <div className='mb-[16px]'>
                        <p className='text-base font-medium mb-[25px]'>Войти в систему</p>
                        <div className='w-full mb-[14px]'>
                            <p className='text-[10px] ml-[10px]'>Логин или Email</p>
                            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Введите логин или email' className='top-[16px] border-[1px] border-[#717171] h-[24px] w-full rounded-full px-[10px] text-[10px]'/>
                        </div>
                        <div className='w-full mb-[14px]'>
                            <p className='text-[10px] ml-[10px]'>Пароль</p>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль' className='top-[16px] border-[1px] border-[#717171] h-[24px] w-full rounded-full px-[10px] text-[10px]'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <input type="button" onClick={()=>authorization()} value="Войти" className='w-[70px] h-[24px] bg-[#17b72f] rounded-full text-white text-[12px] font-medium'/>
                            <p className='text-[#808080] text-[10px]'>Забыли пароль?</p>
                        </div>
                    </div>
                    <div className='flex items-center mb-[16px]'>
                        <div className='grow border-[1px] border-[#5d5d5d]'></div>
                        <span className='px-[2px] text-[9px] text-[#5d5d5d]'>или</span>
                        <div className='grow border-[1px] border-[#5d5d5d]'></div>
                    </div>
                    <div>
                        <input type="button" value="Зарегистрироваться" className='w-[121px] h-[20px] rounded-full border-[1px] border-[#888888] text-[#888888] text-[10px] font-medium'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login