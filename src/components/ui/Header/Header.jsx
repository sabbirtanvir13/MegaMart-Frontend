import { Search } from "@mui/icons-material";
import {
    IconButton,
    InputBase,
    MenuItem,
    Select,
    Box,
} from "@mui/material";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { Link, } from "react-router";
import CategoryDropdown from "./CategoryDropdown";
import logo from "../../../assets/logo.png";
// import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import TopHotline from "./HeaderStrip";
import HeaderStrip from "./HeaderStrip";
const Header = () => {



    // const [data, setData] = useState([]);
    // const [selectedContinent, setSelectedContinent] = useState("");
    // const [selectedCountry, setSelectedCountry] = useState("");
    // const [selectedState, setSelectedState] = useState("");

    // // Fetch Regions.json on component mount
    // useEffect(() => {
    //     fetch("/Regions.json")
    //         .then(res => res.json())
    //         .then(json => setData(json))
    //         .catch(err => console.error("Failed to load regions:", err));
    // }, []);

    // // Get countries of selected continent
    // const countries = selectedContinent
    //     ? data.find(c => c.continent === selectedContinent)?.countries || []
    //     : [];

    // // Get states of selected country
    // const states = selectedCountry
    //     ? countries.find(c => c.name === selectedCountry)?.states || []
    //     : [];

    return (
        <header className="w-full bg-white border-b">
            {/* TOP BAR */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

                {/* Logo */}
                <div className="flex items-center gap-2 min-w-[220px]">
                    <img src={logo} alt="logo" className="w-10 h-10" />
                    <div>
                        <h1 className="text-xl font-bold text-blue-700">MegaMart</h1>
                        <p className="text-xs text-gray-500">
                            Online Grocery Shopping Center
                        </p>
                    </div>
                </div>
{/* 

                <div className="w-[400px] border">
                    <Marquee className="bg-green-400 text-white font bold ">
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div> */}



                {/* Location */}
                {/* <Select
                    size="small"
                    defaultValue="Colorado"
                    sx={{ minWidth: 140 }}
                >
                    <MenuItem disabled={true} >Pick a Regions</MenuItem>
                    {
                        Regions.map((region, idx) => <MenuItem key={idx}>{region}</MenuItem>)
                    }
                </Select> */}
                {/* 
                {/* Location / Region Dropdown */}
                {/* Region Dropdown */}
                {/* Continent Dropdown
                {/* Continent Dropdown */}
                {/* <Select
                    size="small"
                    displayEmpty
                    value={selectedContinent}
                    onChange={(e) => {
                        setSelectedContinent(e.target.value);
                        setSelectedCountry("");
                        setSelectedState("");
                    }}
                >
                    <MenuItem disabled value="">
                        Pick Continent
                    </MenuItem>
                    {data.map((c, idx) => (
                        <MenuItem key={idx} value={c.continent}>
                            {c.continent}
                        </MenuItem>
                    ))}
                </Select> */}

                {/* Country Dropdown */}
                {/* <Select
                    size="small"
                    displayEmpty
                    value={selectedCountry}
                    onChange={(e) => {
                        setSelectedCountry(e.target.value);
                        setSelectedState("");
                    }}
                    disabled={!selectedContinent}
                >
                    <MenuItem disabled value="">
                        Pick Country
                    </MenuItem>
                    {countries.map((c, idx) => (
                        <MenuItem key={idx} value={c.name}>
                            {c.name}
                        </MenuItem>
                    ))}
                </Select> */}

                {/* State/Region Dropdown */}
                {/* <Select
                    size="small"
                    displayEmpty
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    disabled={!selectedCountry}
                >
                    <MenuItem disabled value="">
                        Pick State/Region
                    </MenuItem>
                    {states.map((s, idx) => (
                        <MenuItem key={idx} value={s}>
                            {s}
                        </MenuItem>
                    ))}
                </Select>  */}

                {/* Search */}
                <Box className="flex-1 flex items-center bg-gray-100 rounded-full px-4">
                    <InputBase
                        placeholder="Search for products..."
                        sx={{ flex: 1, py: 0.8 }}
                    />
                    <IconButton>
                        <Search />
                    </IconButton>
                </Box>

                {/* User */}
                <IconButton>
                    <Link to="/login">  <FiUser className="text-xl hover:bg-green-400" /></Link>
                </IconButton>

                {/* Cart */}
                <div className="relative">
                    <IconButton>
                        <FiShoppingBag className="text-xl" />
                    </IconButton>
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        0
                    </span>
                </div>
            </div>

            {/* BOTTOM NAV */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">


                    <nav className="flex gap-6 text-sm font-medium">
                        <Link className="hover:text-green-600 " to="/">Home</Link>
                        <Link className="hover:text-green-600" to="/shop">Shop</Link>
                        <Link className="hover:text-green-600" to="/meats">Meats & Seafood</Link>
                        <Link className="hover:text-green-600" to="/bakery">Bakery</Link>
                        <Link className="hover:text-green-600" to="/beverages">Beverages</Link>
                        <Link className="hover:text-green-600" to="/blog">Blog</Link>
                        <Link className="hover:text-green-600" to="/contact">Contact</Link>
                        <Link className="hover:text-green-600" to="/coverage">Coverage</Link>
                    </nav>

                     <div>
                 <HeaderStrip></HeaderStrip>
                     </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
