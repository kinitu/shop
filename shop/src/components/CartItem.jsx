import React, { useCallback, useState } from 'react'
import axios from 'axios';

function CartItem(props) {
    const {item} = props;
    const [value, setValue] = useState(item.quantity);

    const refresh = () => {
        window.location.reload()
    }
    const increment = () => {
        axios.post("http://localhost:5000/data/cart",
            {product: item.product, quantity: 1});
        setValue(value+1);
        refresh();
    }
    const decrement = () => {
        if(value > 1) {
            axios.post("http://localhost:5000/data/cart",
                {product: item.product, quantity: -1});
            setValue(value-1);
            refresh();
        }
    }
    const remove = () => {
        axios.post("http://localhost:5000/data/cart/remove", item);
        refresh();
    }
    return (
        <div className='bg-[#d9d9d9] rounded-[8px] flex flex-row'>
            <div className='bg-white h-[150px] w-[200px] flex justify-center items-center rounded-l-[8px]'>
                <p>ФОТО</p>
            </div>
            <div className='grow flex flex-row p-[16px] gap-[10px]'>
                <div className='grow flex flex-col justify-between'>
                    <p className='line-champ-2 overflow-hidden text-ellipsis font-medium text-[24px] text-[#1c1c1c]'>{item.product.title}</p>
                    <p className='font-medium text-[18px] text-[#353535]'>Стоимость: {item.product.price}$</p>
                </div>
                <div className='flex flex-col justify-between items-end'>
                    <p className='font-medium text-[18px]'>Цена:</p>
                    <p className='font-medium text-[18px]'>{item.product.price * value}$</p>
                    <div className='flex relative w-[75px] h-[20px] justify-between items-center px-[1px] bg-[#505050] rounded-full'>
                        <div onClick={decrement} className='size-[18px] rounded-full bg-white flex justify-center items-center'>
                            <img src="./src/assets/minus.png" alt="minus" className='size-[12px]'/></div>
                        <p className='text-[12px] text-white font-medium'>{value}</p>
                        <div onClick={increment} className='size-[18px] rounded-full bg-white flex justify-center items-center'>
                            <img src="./src/assets/plus.png" alt="plus" className='size-[12px]'/></div>
                    </div>
                    <input type="button" onClick={remove} value="Убрать" className='w-[85px] h-[20px] bg-[#bf1212] rounded-full text-white text-[12px] font-semibold'/>

                </div>
            </div>
        </div>
    )
}

export default CartItem
