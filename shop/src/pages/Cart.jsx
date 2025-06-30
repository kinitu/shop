import React, { PureComponent } from 'react'

function Cart() {
    return (
        <div className='flex w-full h-[100vh] bg-[#cac5c5] px-[50px]'>
            <div className='w-full h-full'>

            </div>
            <div className='w-[400px] h-full bg-[#ffffff] flex flex-col items-center px-[20px]'>
                <p className='text-[20px] font-semibold my-[10px]'>Корзина</p>
                <div className='grow'>

                </div>
                <div className=' flex justify-between border-t-[7px] border-double w-full flex-col h-[120px] mb-[20px] '>
                    <div className='flex justify-between '>
                        <p className='text-[18px] font-medium'>Итого</p>
                        <p className='text-[px] font-medium'>=12345₽</p>
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