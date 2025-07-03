import React, { PureComponent, useEffect, useState } from 'react'
import axios from 'axios'
import CartItem from '../components/CartItem'

function Cart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/data/cart");
                const result = await response.json();
                setData(result)
            }catch(err){
                console.log("Error fetching data:", err);
            }

        };
        fetchData();

        // const intervalId = setInterval(fetchData, 1000);

        // return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='flex flex-row min-h-screen bg-[#cac5c5] px-[50px]'>
            <div className='grow m-[10px] flex flex-col gap-[10px]'>
                {data.map((item) => (
                    <CartItem item = {item}/>
                ))}
            </div>
            <div className='w-[400px] h-full bg-[#ffffff] flex flex-col items-center px-[20px]'>
                <p className='text-[20px] font-semibold my-[10px]'>Корзина</p>
                <div className='grow flex flex-col gap-[6px] w-full mb-[20px]'>
                    {data.map((item) => (
                        <div className='border-b-[2px] border-dotted flex justify-between gap-[10px]'>
                            <div className='w-full text-[16px] whitespace-nowrap font-medium overflow-hidden text-ellipsis'>
                                <p className='overflow-hidden text-ellipsis'>{item.product.title}</p> x {item.quantity}
                            </div>
                            <div className='w-1/2 flex justify-end items-end'>
                                <p className='text-[16px] font-medium'>={item.product.price * item.quantity}$</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' flex justify-between border-t-[7px] border-double w-full flex-col h-[100px] mb-[20px] '>
                    <div className='flex justify-between '>
                        <p className='text-[18px] font-medium'>Итого</p>
                        <p className='text-[18px] font-medium'>={data.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)}$</p>
                    </div>
                    <div className='flex justify-between'>
                        <button className='font-bold text-[#747474] border-[2px] w-[100px] h-[30px] rounded-full'>В каталог</button>
                        <button className='font-bold bg-[#747474] text-[#08ce61] border-[2px] w-[160px] h-[30px] rounded-full'>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart