import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

const buttons = [{name:"Главная", path:'/'}, {name:"Корзина", path:'/cart'}, {name:"О компании", path:"/"}];

function Header() {
    return (
        <div className='bg-[#ddd5c0] w-full h-[60px] flex justify-between items-center'>
            <div className='flex justify-between h-full'>
                <div className='px-[30px] py-[5px]'>
                    <Link to={'/'} className='flex justify-center items-center bg-white size-full w-[100px]'>ЛОГО</Link>
                </div>
                <div className='flex h-full content-center'>
                    {buttons.map((item) => (
                        <Link to={item.path} className='px-[20px] h-full flex items-center hover:bg-[#f4ebd3] text-[18px] font-medium'>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div className='flex w-[160px] h-[40px] bg-white border-2 mx-[30px] rounded-[10px]'>
                <div className='w-full'></div>
                <div className='border-[1px]'></div>
                <Link to='/login' className='w-[50px] h-full flex justify-center items-center'><img src="/src/assets/exit.png" alt="exit" className='w-[28px] h-fit'/></Link>
            </div>
        </div>
    )
}

export default Header