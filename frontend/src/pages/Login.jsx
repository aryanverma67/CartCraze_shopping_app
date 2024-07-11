import React from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import Context from "../context/context";

const Login = () => {
    const [showpassword, setshowpassword] = useState(false);
        const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate();
    const { fetchUserDetails,fetchUserAddToCart } = useContext(Context)


    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const dataResponse = await fetch(SummaryApi.signIn.url,{
          method : SummaryApi.signIn.method,
          credentials : 'include',
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
      })

      const dataApi = await dataResponse.json()

      if(dataApi.success){
          toast.success(dataApi.message)
          navigate('/')
         fetchUserDetails();
          
          fetchUserAddToCart()
      }

      if(dataApi.error){
          toast.error(dataApi.message)
      }

  }


    







  return (
    <section id="login">
      <div className="mx-auto container px-4 ">
        <div className="bg-white p-2 py-5 h-[470px] w-full shadow-lg rounded-xl max-w-sm mx-auto mt-[4rem]">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login-icon" />
          </div>
          <form onSubmit= {handleSubmit}>
            <div className="flex flex-col gap-4 mt-5">
              <label>Email:</label>
              <div className="bg-slate-100 py-2">
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={data.email}
                  placeholder="enter email"
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-5 ">
              <label>Password:</label>
              <div className="bg-slate-100 py-2 flex">
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="enter password"
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                  className="h-full w-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setshowpassword((prev) => !prev)}
                >
                  <span>{showpassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forget-password"
                className="block w-fit  mt-3 ml-auto hover:underline hover:text-red-600"
              >
                Forget Password ?
              </Link>
            </div>
            <button  className="bg-red-600 text-white px-6 py-2 w-full  max-w-[150px] rounded-full hover:scale-110 transition-all mt-6 block mx-auto ">
              Login
            </button>
            <div className="text-black ml-20 mt-3">
              <Link to="/signup">
                New user ?{" "}
                <span className="text-red-600 hover:underline">
                  create an Account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
