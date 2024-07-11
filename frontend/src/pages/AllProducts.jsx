import React from 'react'
import UploadProduct from '../components/UploadProduct'
import { useState ,useEffect} from 'react'
import SummaryApi from '../common'
import AdminProductCard from '../components/adminProductCard'

const AllProducts = () => {
  const [openuploadProduct, setopenuploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])


  const fetchAllProduct = async() =>{
    const response = await fetch(SummaryApi.allProduct.url)
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])



  return (
    <div>
              <div className='bg-white py-2 rounded-3xl px-4 flex justify-between items-center'>
            <h2 className='font-semibold text-gray-700 text-xl'>All Products</h2>
            <button  className='border-2 text-white font-semibold bg-blue-600 hover:bg-blue-800 hover:text-white transition-all py-2 px-4 rounded-full ' onClick={()=>setopenuploadProduct(true)}>Upload Product</button>
        </div>


        {/* all products */}
        <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
          {
            allProduct.map((product,index)=>{
              return(
                <div className='flex items-center flex-wrap gap-5 py-4 '>
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>

                  </div>
                
              )
            })
          }
        </div>





        {/* upload product component */}
        {
          openuploadProduct && (
            <UploadProduct onclose={()=>setopenuploadProduct(false)} fetchData={fetchAllProduct}/>
          )
        }


    </div>
  )
}

export default AllProducts