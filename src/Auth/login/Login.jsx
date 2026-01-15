import { Email, Lock, Visibility } from "@mui/icons-material";
import { Link } from "react-router";
import Logo from '../../assets/logo.png';
import { useForm } from "react-hook-form";
import SocialLink from "../SocialLink";
const Login = () => {



  const { register, handleSubmit, formState: { errors } } = useForm();


  const handelLogin = (data) => {
    console.log(data)
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      {/* Card */}
      <div className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

        <form onSubmit={handleSubmit(handelLogin)} >
          {/* LEFT FORM */}
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Hello!</h2>
            <p className="text-gray-500 mb-8">Sign in to your account</p>

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
 
    
            {/* Remember / Forgot */}
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#77df43]" />
                Remember me
              </label>
              <span className="cursor-pointer hover:text-[#77df43]">
                Forgot password?
              </span>
            </div>    

            <SocialLink></SocialLink>

            {/* Button */}
            <button className="w-49 cursor-pointer mt-5 mx-auto py-3 rounded-full bg-[#77df43] text-white font-semibold shadow-lg hover:scale-105 transition">
              SIGN IN
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?
              <Link to="/register" className="text-[#77df43] cursor-pointer ml-1">
                Create Account
              </Link>
            </p>
          </div>
        </form>

        {/* RIGHT CONTENT */}
        <div className="relative bg-[#77df43] text-white flex items-center justify-center p-12">
          <div className="  max-w-sm  text-black z-10 relative">

            <div className="flex items-center justify-center gap-4">
              <img className="w-24" src={Logo} alt="" />
              <p className="text-3xl font-bold text-black"> <span className="text-[#77df43]">Mega </span>Mart</p>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed pharetra magna nisl, at posuere sem dapibus sed.
            </p>
          </div>

          {/* Cloud Shape */}
          <div className="absolute inset-0 bg-white rounded-l-[50%] md:block hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
