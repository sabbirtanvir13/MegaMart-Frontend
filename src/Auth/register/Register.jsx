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
import SocialLink from "../SocialLink";
import { useForm } from "react-hook-form"
const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handelRegistion = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center  p-6">

            {/* Card */}
            <div className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

                {/* LEFT FORM */}
                <form onSubmit={handleSubmit(handelRegistion)}>
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
                                {...register('name', { required: true })}
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                            />

                        </div>
                        {errors.name && <p className="text-red-500">Name is required</p>}

                        {/* Email */}
                        <div className="mb-4 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                                <Email />
                            </span>
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                placeholder="E-mail"
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                            />
                        </div>
                        {errors.email && <p className="text-red-500">Email is required</p>}

                        {/* Phone */}
                        <div className="mb-4 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                                <Phone />
                            </span>
                            <input
                                {...register('phone', { required: true })}
                                type="text"
                                placeholder="Phone Number"
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                            />
                        </div>
                        {errors.email && <p className="text-red-500">Phone Number is required</p>}

                        {/* Image Upload */}
                        <div className="mb-4  relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                                <ImageIcon />
                            </span>
                            <input
                                {...register('photo', { required: true })}
                                type="file"
                                className="w-full pl-12 cursor-pointer pr-4 py-3 rounded-full bg-gray-50 shadow-inner text-gray-500 file:hidden"
                            />
                        </div>
                        {errors.photo && <p className="text-red-500">Photo is required</p>}

                        {/* Password */}
                        <div className="mb-4 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                                <Lock />
                            </span>
                            <input
                                {...register('password', {

                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
                                })}
                                type="password"
                                placeholder="Password"
                                className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"


                            />



                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77df43] cursor-pointer">
                                <Visibility />
                            </span>



                        </div>
                        {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                        {errors.password?.type === "minLength" && <p className="text-red-500">Minimum 6 characters</p>}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-500">Must include upper, lower, number & special character</p>
                        )}


                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#77df43]">
                                <Lock />
                            </span>
                            <input
                                {...register("confirmPassword", {
                                    required: "Confirm your password",
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match"
                                })}
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-50 shadow-inner focus:outline-none"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77df43] cursor-pointer">
                                <Visibility />
                            </span>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500">{errors.confirmPassword.message}</p>
                        )}

                        <div className="divide-black"></div>

                        <SocialLink></SocialLink>
                        {/* Button */}
                        <button className="w-49 mt-4 mx-auto py-3 rounded-full bg-[#77df43] text-white font-semibold shadow-lg hover:scale-105 transition">
                            REGISTER
                        </button>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            Already have an account?
                            <Link to="/login" className="text-[#77df43] cursor-pointer ml-1">Login</Link>
                        </p>
                    </div>

                </form>




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
