import { useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext';
import { assets } from "../assets/assets";
import Title from "../component/Title";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { products ,search , showSearch }  = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSupCategory] = useState([]);
  const [sortType, setsortType] = useState('relavent');


  const toggleCategory =(e) => {
     if(category.includes(e.target.value)) {
      setCategory(prev =>prev.filter(item => item !== e.target.value))
     }
     else {
      setCategory(prev => [...prev, e.target.value])
     }
  }
  const togglesubCategory =(e) => {
    if(subCategory.includes(e.target.value)) {
     setSupCategory(prev =>prev.filter(item => item !== e.target.value))
    }
    else {
      setSupCategory(prev => [...prev, e.target.value])
    }
 }
   const applyFilter = () => {
    let productsCopy = products.slice();
    if (search && showSearch) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) 
    }
    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setfilterProducts(productsCopy)
   }
  
   const sortProducts = () =>{
      let copyft =filterProducts.slice();
      switch(sortType) {
        case 'low-high': 
         setfilterProducts(copyft.sort((a, b) => a.price - b.price)) 
          break;
        case 'high-low': 
         setfilterProducts(copyft.sort((a, b) => b.price - a.price)) 
          break;
        default:
          applyFilter();
          break;
      }
   }
  useEffect(() => {
   applyFilter();
    },[category,subCategory,search,showSearch]);
  useEffect(() => {
   sortProducts();
    },[sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Tìm kiếm options */}
      <div className="min-w-60">
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Tìm Kiếm
          <img 
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
            src={assets.dropdown_icon} 
            alt=""
          />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* Tìm kiếm Types */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'}  onChange={togglesubCategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'}  onChange={togglesubCategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={togglesubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
         <div className=" flex justify-between text-base sm:text-2xl mb-4">
         <Title text1={'LATEST'} text2={'COLLECTION'}/>
          {/* product sort */}
          <select onChange={(e)=>setsortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2 ">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: Hihg To Low</option>
          </select>
         </div>
         {/* product sort */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
           {
             filterProducts.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              );
            })
           }
         </div>
      </div>
    </div>
  );
};

export default Collection;
