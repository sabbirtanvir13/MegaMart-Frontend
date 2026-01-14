import React from 'react';

const TrendingProducts = () => {
    const products = [
        { id: 1, name: "USDA Choice Angus Beef Stew Meat", price: "$49.99", oldPrice: "$79.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRHb-NSDmG0PKKWYg4SEQQLEAmp0pVYo3fg&s" },
        
        { id: 2, name: "Warrior Blend Organic", price: "$29.00", oldPrice: "$39.00", img: "https://naturalfoodpantry.ca/cdn/shop/products/Natural750g_1024x1024.jpg?v=1754681160" },

        { id: 3, name: "Encore Seafoods Stuffed Alaskan Salmon", price: "$27.49", oldPrice: "$32.49", img: "https://target.scene7.com/is/image/Target/GUEST_71d255c3-c779-4abe-af8a-c3fa9192dcc3" },

        { id: 4, name: "Vital Farms Pasture-Raised Egg Bites Bacon...", price: "$25.00", oldPrice: "$29.00", img: "https://www.eatingwell.com/thmb/hmds463dE2Opl9uPHtLA4npLrvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vital-farms-pasture-raised-egg-bites-uncured-bacon-and-cheddar-cheese-dd6592bed9ed4b37a3b2b274fed26459.jpg" },

        { id: 5, name: "Field Roast Chao Cheese Creamy Original", price: "$19.50", oldPrice: "$24.00", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_b56jxKT9Gl7axXQ0d1O6WTdwLp7MyjvpQw&s" },
    ];

    return (
        <div className="w-64 border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
            <h3 className="text-[13px] font-bold uppercase tracking-wider mb-5 text-gray-800">Trending Products</h3>
            <div className="flex flex-col gap-5">
                {products.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start group cursor-pointer">
                        <img src={item.img} alt={item.name} className="w-12 h-12 object-contain rounded-md" />
                        <div className="flex flex-col">
                            <h4 className="text-[13px] font-medium leading-snug text-blue-900 group-hover:text-blue-500 transition-colors line-clamp-2">
                                {item.name}
                            </h4>
                            <div className="flex gap-2 items-center mt-1">
                                <span className="text-[12px] text-gray-400 line-through">{item.oldPrice}</span>
                                <span className="text-[14px] font-bold text-red-500">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;