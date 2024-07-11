import React from 'react'
import ROLE from '../common/Role'
import {IoMdClose} from "react-icons/io"
import { useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'

const ChangeUserRole = ({
  name,
  email,
  role,
  onclose,
  userId,
  callfunc
  
}) => {
  const [userRole, setuserRole] = useState("")
  const  handleChangeselect =(e)=>{
    setuserRole(e.target.value)
    console.log(e.target.value)
  }
  const updateUserRole  = async ()=>{
    const fetchResponse = await fetch(SummaryApi.updateUser.url,{
      method : SummaryApi.updateUser.method,
      credentials : 'include',
      headers : {
          "content-type" : "application/json"
      },
      body : JSON.stringify({
          userId : userId,
          role : userRole
      })
  })

  const responseData = await fetchResponse.json()

  if(responseData.success){
      toast.success(responseData.message)
      onclose()
      callfunc()
  }

  console.log("role updated",responseData)

}


  
  
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50'>
      <div className=' mx-auto bg-white shadow-md p-4 w-full max-w-sm mt-20 rounded-3xl '>
       <div>
        <button className='block ml-auto' onClick={onclose}>
        <IoMdClose/>
       </button>

       </div>
        <h1 className='text-lg pb-4 font font-medium'>Change User Role </h1>
        <p>Name : {name}</p>
        <p>Email: {email}</p>
        <div className='flex items-center justify-between my-4'>
        <p>Role</p>
        <select className='border px-4 py-1' value={userRole} onChange={handleChangeselect} >
          {
            Object.values(ROLE).map(el=>{
              return(
                <option value={el} key={el}>{el}</option>
              )
            })
          }
          <option >

          </option>
        </select>

        </div>
        <button className='w-fit border block px-3 mx-auto bg-blue-700 text-white hover:bg-blue-900 rounded-full py-1' onClick={updateUserRole}>Change Role</button>
      </div>


    </div>
  )
}

export default ChangeUserRole