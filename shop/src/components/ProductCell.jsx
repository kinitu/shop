import React, { useState } from 'react'
import Cart from '../data/Cart.json'

function ProductCell(props) {
    const {item} = props;
    const [value, setValue] = useState(1);

    const increment = () => setValue(prev => prev + 1);
    const decrement = () => value > 1 ? setValue(prev => prev - 1):{};

    const handleAddOnCart = (id, quantity) => {
        Cart.products.push({id: id, quantity: quantity})
    }

    return (
        <div className='bg-white flex flex-col w-[225px] h-[270px] rounded-[8px]'>
            <div className='grow flex justify-center items-center'>ФОТО</div>
            <div className='w-full h-[90px] flex flex-col bg-[#d9d9d9] rounded-b-[8px] gap-[6px] px-[12px] py-[6px]'>
                <p className='text-[#1c1c1c] text-[14px] font-semibold truncate'>{item.title}</p>
                <p className='text-[#353535] text-[12px] font-medium'>{item.price}$</p>
                <div className='flex justify-between'>
                    <div className='flex relative w-[75px] h-[20px] justify-between items-center px-[1px] bg-[#505050] rounded-full'>
                        <div onClick={decrement} className='size-[18px] rounded-full bg-white flex justify-center items-center'>
                            <img src="./src/assets/minus.png" alt="minus" className='size-[12px]'/></div>
                        <p className='text-[12px] text-white font-medium'>{value}</p>
                        <div onClick={increment} className='size-[18px] rounded-full bg-white flex justify-center items-center'>
                            <img src="./src/assets/plus.png" alt="plus" className='size-[12px]'/></div>
                    </div>
                    <button onClick={handleAddOnCart(item.id, value)} className='w-[85px] h-[20px] bg-[#51b57e] rounded-full text-white text-[12px] font-semibold'>В КОРЗИНУ</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCell
