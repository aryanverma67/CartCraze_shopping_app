import React, { useContext } from 'react'
import { FaCircle, FaSearch, FaUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { IoLogIn,IoLogOut } from "react-icons/io5";
import { useSelector,useDispatch } from 'react-redux';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import { useState } from 'react';
import Role from "../common/Role"
import Context from '../context/context';
import ROLE from '../common/Role';





const Header = () => {
  const navigate = useNavigate();
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const [menuDisplay,setMenuDisplay] = useState(false)
    const context = useContext(Context)
    const searchInput = useLocation()
    const URLSearch = new URLSearchParams(searchInput?.search)
    const searchQuery = URLSearch.getAll("q")
    const [search,setSearch] = useState(searchQuery)


    const handleLogout = async() => {
        const fetchData = await fetch(SummaryApi.logout_user.url,{
          method : SummaryApi.logout_user.method,
          credentials : 'include'
        })
    
        const data = await fetchData.json()
    
        if(data.success){
          toast.success(data.message)
          dispatch(setUserDetails(null))
          navigate("/")
        }
    
        if(data.error){
          toast.error(data.message)
        }
    
      }

      const handleSearch = (e)=>{
        const { value } = e.target
        setSearch(value)
    
        if(value){
          navigate(`/search?q=${value}`)
        }else{
          navigate("/search")
        }
      }
    
      
    
  
  return (
    <nav className='h-16 shadow-md bg-white fixed w-full z-40  '>
        <div className='h-full container mx-auto flex justify-between items-center px-3 '>
            <div className=''>
          <Link to= '/'>                
           <h1 className='text-3xl text-red-600 font-bold shadow-md rounded-2xl px-2 py-1'> CART<span className='text-2xl text-blue-900 font-semibold '>Craze</span></h1>
         </Link>

            </div>
            <div className='hidden lg:flex   items-center w-full  max-w-sm border rounded-full'>
                <input type="text" onChange={handleSearch} placeholder='search your product' className='px-3 py-2 w-full outline-none focus-within:shadow-md pl-2 text-black rounded-l-full' />
                <div className='min-w-[50px]  bg-blue-600 px-4 py-3 rounded-r-full text-white' >
                    <FaSearch  className='w-5 h-5 '/>
                </div>
                
            </div>
            <div className=' flex items-center gap-4 lg:gap-9'>
            <div className=' relative group lg:flex justify-center'>
              {
                user?._id && (
                  <div className='text-3xl cursor-pointer shadow-sm' onClick={()=>setMenuDisplay(preve=>!preve)}>
                  {
                            user?.profilePic ? (
                          <img src={user?.profilePic} className='w-7 h-7 rounded-full' alt={user?.name} />
                            ) : (
                              <FaUserCircle/>
                            )
                          }
  
  
                  </div>
  
                  
                )
                
              }
                {
                  menuDisplay && (
                    <div className='   absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded  '>
                  
                  <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                          }
                          <Link to={'/order'} className='whitespace-nowrap md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Order</Link>
                         
                        </nav>                  </div>
  
  
                  )
                }
            </div>
            {
                      user?._id &&(
                        <Link to= '/cart' className='text-2xl shadow-sm cursor-pointer relative'>
                        <span><IoCartSharp/></span>
                        <div className='bg-red-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-sm'>{context?.cartProductCount}</p>
                        </div>
                    </Link>
    

                      ) 
                    }

                <div >
                {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-4 flex items-center py-2 rounded-2xl text-black border shadow-md font-semibold bg-white active:bg-blue-600'> <IoLogOut className='w-7  h-7' />Logout</button>
                    )
                    : (
                        <Link to= '/login' className='px-4 flex items-center py-2 rounded-2xl text-black border shadow-md font-semibold bg-white active:bg-blue-600'> <IoLogIn className='w-7  h-7' /> Login</Link>
                    )
                  }

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header