import React, { PureComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import fs from 'fs'
import category from '../data/Categories.json'
import product from '../data/Product.json'
import ProductCell from '../components/ProductCell'

// import Search from '../components/Search'
// const navigate = useNavigate();
function Home() {
    const navigate = useNavigate();
    return (
        <div className='flex flex-row grow'>
            <div className='w-1/3 bg-[#fff8e5] grow flex flex-col'>
                <p className='py-[10px] text-[20px] font-semibold bg-[#f6ebce] pl-[30px]'>Каталог</p>
                <div className='flex flex-col w-full'>
                    {category.map((item) => (
                        <div className='w-full py-[8px] pl-[30px] hover:bg-[#fffdf6]'>
                            <p className='text-[18px]'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full bg-[#cac5c5] p-[10px] grow'>
                <div className='flex gap-[10px] h-[32px] mb-[10px]'>
                    <div className='relative flex grow bg-white w-full rounded-full'>
                        <button className='absolute h-full flex items-center pl-[12px]'><img src="/src/assets/search.png" alt="search" className='w-[24px]'/></button>
                        <input type="text" placeholder='Введите поиск товара' className='h-full w-full pl-[48px] rounded-full text-[16px] font-medium' />
                    </div>
                    <input type="button" value="Корзина" onClick={() => navigate('/cart')} className='h-full w-[160px] bg-white rounded-full border-[#51b57e] border-[2px] font-bold text-[#51b57e]'/>
                </div>
                <div className='flex flex-wrap gap-[10px]'>
                    {product.products.map((item) => (
                        <ProductCell item = {item}/>
                        // <div className='bg-white flex flex-col w-[225px] h-[270px] rounded-[8px]'>
                        //     <div className='grow flex justify-center items-center'>ФОТО</div>
                        //     <div className='w-full h-[90px] flex flex-col bg-[#d9d9d9] rounded-b-[8px] gap-[7px] px-[12px] py-[6px]'>
                        //         <p className='text-[#1c1c1c] text-[14px] font-semibold'>{item.title}</p>
                        //         <p className='text-[#353535] text-[12px] font-medium'>{item.price}</p>
                        //         <div className='flex relative w-[90px] h-[20px]'>
                        //             <div className='flex absolute w-full h-full m-[1px] justify-between'>
                        //                 <div className='m-[1px] size-[18px] rounded-full bg-[#6d6d6d] flex justify-center items-center text-[#d9d9d9] text-[10px] font-black'>-</div>
                        //                 <div className='size-[16px] rounded-full bg-[#6d6d6d] flex justify-center items-center text-[#d9d9d9] text-[10px] font-semibold'>+</div>
                        //             </div>
                        //             <input type="number" min={1} value={1} className='px-[20px] w-full h-full bg-white rounded-full flex justify-center'/>
                        //         </div>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home