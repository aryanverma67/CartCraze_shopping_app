import React from 'react'

const uploadImage = async(image) => {
    const cloudinary = import.meta.env.VITE_APP_CLOUDINARY_URL;

    const url = `https://api.cloudinary.com/v1_1/${cloudinary}/image/upload`;

        const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","ecomm_product")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()
    

}

export default uploadImage