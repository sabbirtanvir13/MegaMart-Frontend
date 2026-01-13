import {
    Person,
    Email,
    Phone,
    Lock,
    Image as ImageIcon,
    Visibility,
} from "@mui/icons-material";
import Logo from '../../assets/logo.png';
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  p-6">

            {/* Card */}
            <div className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

                {/* LEFT FORM */}
                <div className="p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                    <p className="text-gray-500 mb-8">
                        Register to start shopping
                    </p>

                    {/* Name */}
                    <div className="mb-4 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <Person />
                        </span>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <Email />
                        </span>
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-4 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <Phone />
                        </span>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <ImageIcon />
                        </span>
                        <input
                            type="file"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner text-gray-500 file:hidden"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <Lock />
                        </span>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77df43] cursor-pointer">
                            <Visibility />
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6 relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                            <Lock />
                        </span>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77df43] cursor-pointer">
                            <Visibility />
                        </span>
                    </div>

                    {/* Button */}
                    <button className="w-44 mx-auto py-3 rounded-full bg-[#77df43] text-white font-semibold shadow-lg hover:scale-105 transition">
                        REGISTER
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?
                        <Link to="/login" className="text-[#77df43] cursor-pointer ml-1">Login</Link>
                    </p>
                </div>


                {/* RIGHT CONTENT */}
                <div className="relative bg-[#77df43] text-white flex items-center justify-center p-12 overflow-hidden">

                    {/* Cloud Shape */}
                    <div className="absolute inset-0 bg-white rounded-l-[50%] z-0 md:block hidden"></div>

                    {/* Text Content */}
                    <div className="max-w-sm  text-black z-10 relative">
                        <div className="flex items-center justify-center gap-4">
                            <img className="w-24" src={Logo} alt="" />
                            <p className="text-3xl font-bold text-black"> <span className="text-[#77df43]">Mega </span>Mart</p>
                        </div>
                        <h2 className="text-3xl flex items-center justify-center font-bold mb-4">Join Us!</h2>
                        <p className="opacity-90 flex items-center justify-center ml-20">
                            Create an account to enjoy fast checkout, order tracking,
                            and exclusive deals.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;
