import React, { PureComponent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryList from '../data/Categories.json'
import ProductList from '../data/Product.json'
import ProductCard from '../components/ProductCard'

// import Search from '../components/Search'
// const navigate = useNavigate();
function Home() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        category: 'all',
        searchQuery: ''
    });
    const filteredProducts = ProductList.products.filter((item) => {
        if(filters.category !== 'all' && item.category !== filters.category) return false;
        if(!item.title.toLowerCase().startsWith(filters.searchQuery.toLowerCase())) return false;
        return true;
    });

    return (
        <div className='flex flex-row grow'>
            <div className='w-1/3 bg-[#fff8e5] grow flex flex-col'>
                <p className='py-[10px] text-[20px] font-semibold bg-[#f6ebce] pl-[30px]'>Каталог {filters.category} {filters.searchQuery}</p>
                <div className='flex flex-col w-full'>
                    <div onClick={()=>{setFilters({...filters, category: 'all'}); console.log(filteredProducts)}} className='w-full py-[4px] pl-[30px] hover:bg-[#fffdf6] text-[18px]'>
                        All
                    </div>
                    {CategoryList.map((item) => (
                        <div onClick={()=>setFilters({...filters, category: item})} className='w-full py-[4px] pl-[30px] hover:bg-[#fffdf6] text-[18px]'>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full bg-[#cac5c5] p-[10px] grow'>
                <div className='flex gap-[10px] h-[32px] mb-[10px]'>
                    <div className='relative flex grow bg-white w-full rounded-full'>
                        <button className='absolute h-full flex items-center pl-[12px]'><img src="/src/assets/search.png" alt="search" className='w-[24px]'/></button>
                        <input type="text" value={filters.searchQuery}  onChange={(e) => setFilters({...filters, searchQuery: e.target.value})} placeholder='Введите поиск товара' className='h-full w-full pl-[48px] rounded-full text-[16px] font-medium' />
                    </div>
                    <input type="button" value="Корзина" onClick={() => navigate('/cart')} className='h-full w-[160px] bg-white rounded-full border-[#51b57e] border-[2px] font-bold text-[#51b57e]'/>
                </div>
                <div className='flex flex-wrap gap-[10px]'>
                    {filteredProducts.map((item) => (
                        <ProductCard item = {item}/>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home