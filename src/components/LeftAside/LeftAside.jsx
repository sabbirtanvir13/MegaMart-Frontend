// import React from 'react';
// import CategoryDropdown from '../ui/Header/CategoryDropdown';

// const LeftAside = () => {
//     return (
//         <div>
//          <CategoryDropdown></CategoryDropdown>

//           <div className='border'>
//             <img src="https://thumbs.dreamstime.com/b/shopping-cart-packed-variety-fresh-groceries-including-fruits-vegetables-bread-drinks-other-food-items-visible-422592147.jpg" alt="" />
//           </div>

//         </div>
//     );
// };

// export default LeftAside;


import React from 'react';
import CategoryDropdown from '../ui/Header/CategoryDropdown';
import InfoSidebar from '../ui/InfoSidebar/InfoSidebar';
import { useLocation } from 'react-router';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import TrendingProducts from '../Product/TrendingProducts';

const LeftAside = () => {



    const location = useLocation();


    const isHomePage = location.pathname === "/";

    return (



        <div className="flex ml-32 flex-col gap-4">

            {/* Category Dropdown */}
            <div className="w-70 h-[500px]   overflow-hidden">
                <CategoryDropdown />
            </div>

            {isHomePage ? (
                /* --- শুধুমাত্র হোম পেজে এই সেকশনগুলো দেখাবে --- */
                <>
                    {/* গ্রোসারি ব্যানার */}
                    <div className="relative w-64 h-[400px] overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-full object-cover"
                            src="https://thumbs.dreamstime.com/b/shopping-cart-packed-variety-fresh-groceries-including-fruits-vegetables-bread-drinks-other-food-items-visible-422592147.jpg"
                            alt="grocery"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                            <span className="text-lg font-semibold">MegaMart Natural Food</span>
                            <span className="text-sm mb-3">Special Grocery Items</span>
                            <button className="bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700 px-4 py-2 text-sm">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* বেকারি ব্যানার */}
                    <div className="relative w-64 h-[400px] overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-full object-cover"
                            src="https://img.freepik.com/premium-photo/chocolate-dessert-with-fruit-top_777078-19332.jpg"
                            alt="bakery"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                            <span className="text-lg font-semibold">Best Bakery Products</span>
                            <span className="text-sm mb-3">Freshly Baked Every Hour</span>
                            <button className="bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700 px-4 py-2 text-sm">
                                Bakery
                            </button>
                        </div>
                    </div>

                    <div className='h-[400px] overflow-hidden rounded-2xl'>
                        <InfoSidebar />
                    </div>
                       
                    <div className='h-[450px] overflow-hidden rounded-2xl'>
                     <TrendingProducts></TrendingProducts>
                    </div>
                       

                     
                </>
            ) : (
               
                <div className="w-64">
                 
                    <SidebarFilter />
                </div>
            )}




















            {/* <div className=" relative w-64 h-[400px] overflow-hidden rounded-2xl"> */}

            {/* Image
                <img
                    className="w-full h-full object-cover"
                    src="https://thumbs.dreamstime.com/b/shopping-cart-packed-variety-fresh-groceries-including-fruits-vegetables-bread-drinks-other-food-items-visible-422592147.jpg"
                    alt="grocery"
                /> */}

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                    <span className="text-lg font-semibold">
                        MegaMart Natural Food
                    </span>
                    <span className="text-sm mb-3">
                        Special Grocery Items
                    </span>
                    <button className="bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700 px-4 py-2  text-sm">
                        Shop Now
                    </button>
                </div>

            </div> */}



            {/* bakery */}

            {/* <div className=" relative w-64 h-[400px] overflow-hidden rounded-2xl">

                {/* Image */}
            {/* <img
                    className="w-full h-full object-cover"
                    src="https://img.freepik.com/premium-photo/chocolate-dessert-with-fruit-top_777078-19332.jpg"
                    alt="grocery"
                />  */}

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
                    <span className="text-lg font-semibold">
                   Best Bakery Products
                    </span>
                    <span className="text-sm mb-3">
                  Freshly Baked Every Hour
                    </span>
                    <button className="bg-green-600 rounded-2xl cursor-pointer hover:bg-green-700 px-4 py-2  text-sm">
                    Bakery
                    </button>
                </div> */}

            {/* </div>

          <div className='h-[400px] overflow-hidden rounded-2xl'>
            <InfoSidebar></InfoSidebar>
          </div> */}

        </div>
    );
};

export default LeftAside;
