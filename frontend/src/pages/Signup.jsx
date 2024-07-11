import React from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import imagetobase64 from "../helper/imagetobase64";
import { toast } from 'react-toastify';
import SummaryApi from '../common';



const Signup = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    profilePic: "",
  });
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await imagetobase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(data.password === data.confirmpassword){

      const dataResponse = await fetch(SummaryApi.signUP.url,{
          method : SummaryApi.signUP.method,
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
  
        const dataApi = await dataResponse.json()

        if(dataApi.success){
          toast.success(dataApi.message)
          navigate("/login")
        }

        if(dataApi.error){
          toast.error(dataApi.message)
        }
  
    }else{
      toast.error("Please check password and confirm password")
    }

}




  


  return (
    <section id="signup">
      <div className="mx-auto container px-4 ">
        <div className="bg-white p-2 py-5 h-[500px] w-full shadow-lg rounded-xl max-w-sm mx-auto mt-[4rem]">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic ||loginIcons} alt="login-icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col gap-1 mt-1">
              <label>Name:</label>
              <div className="bg-slate-100 py-2">
                <input
                  type="text"
                  name="name"
                  onChange={handleOnChange}
                  value={data.name}
                  placeholder="enter your name"
                  required
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label>Email:</label>
              <div className="bg-slate-100 py-2">
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={data.email}
                  placeholder="enter email"
                  required
                  className="h-full w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label>password:</label>
              <div className="bg-slate-100 py-2 flex">
                <input
                  type={showpassword ? "text" : "password"}
                  name="password"
                  onChange={handleOnChange}
                  value={data.password}
                  placeholder="enter password"
                  required
                  className="h-full w-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setshowpassword((prev) => !prev)}
                >
                  <span>{showpassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-3 ">
              <label>Confirm Password:</label>
              <div className="bg-slate-100 py-2 flex">
                <input
                  type={showconfirmpassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  onChange={handleOnChange}
                  name="confirmpassword"
                  value={data.confirmpassword}
                  required
                  className="h-full w-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setshowconfirmpassword((prev) => !prev)}
                >
                  <span>
                    {showconfirmpassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 w-full  max-w-[150px] rounded-full hover:scale-110 transition-all mt-3 block mx-auto ">
              Signup
            </button>
            <div className="text-black ml-20 mt-2">
              <Link to="/login">
                already have an account ?
                <span className="text-red-600 hover:underline">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


export default Signup;
