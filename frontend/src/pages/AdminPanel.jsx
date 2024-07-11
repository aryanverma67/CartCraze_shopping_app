import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {FaUserCircle } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { Outlet ,useNavigate} from 'react-router-dom';
import ROLE from '../common/Role'


const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(()=>{
       if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    },[user])

  return (
    <div className='min-h-[calc(100vh-120px)]  md:flex hidden mb-8 ml-6  '>

        <aside className='bg-white min-h-full  w-full  max-w-60 shadow-lg  rounded-3xl '>
                <div className='h-32  flex justify-center items-center flex-col'>
                   <div className='text-5xl cursor-pointer relative flex justify-center'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-20 h-20 rounded-full mt-5' alt={user?.name} />
                        ) : (
                            <FaUserCircle/>
                        )
                        }
                    </div> 
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div> 

                 {/***navigation */}       
                <div>   
                    <nav className='grid p-4 gap-3'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100 text-gray-700'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100 text-gray-700'>All products</Link>
                    </nav>
                </div>  
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
            
        </main>
    </div>
  )
}

export default AdminPanel