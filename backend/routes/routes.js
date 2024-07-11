const express = require('express')

const router = express.Router()
const userSignUpController = require("../controller/UserSignup")
const userSignInController = require("../controller/UserSignin")
const userDetailsController = require("../controller/userDetails")
const authToken = require("../middleware/authToken")
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateuser')
const UploadProductController = require('../controller/uploadProduct')
const getProductController = require('../controller/getProduct')
const updateProductController = require('../controller/updateProduct')
const getCategoryProduct = require('../controller/GetCategoryProduct')
const getCategoryWiseProduct = require('../controller/getCategorywiseProduct')
const getProductDetails = require('../controller/getproductDetails')
const addToCartController = require('../controller/AddToCartcontroller')
const countAddToCartProduct = require('../controller/countAddToCartProduct')
const addToCartViewProduct = require('../controller/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct')
const searchProduct = require('../controller/Searchproduct')
const filterProductController = require('../controller/flilterProduct')
const paymentController = require('../controller/paymentController')
const webhooks = require('../controller/webhooks')
const allOrderController = require('../controller/allOrder.controller')
const orderController = require('../controller/order.controller')
router.post('/signup',userSignUpController)
router.post('/signin',userSignInController)
router.get('/user-details',authToken,userDetailsController)
router.get('/userlogout',userLogout)

//admin-panel
router.get('/all-users',authToken,allUsers)
router.post('/update-user',authToken,updateUser)

//upload product
router.post('/upload-product',authToken,UploadProductController)
router.get('/get-product',getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-category",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post('/product-details',getProductDetails)

//search product
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)

//order product
router.post('/checkout',authToken,paymentController)
router.post('/webhook',webhooks)//api/webhook
router.get('/order-list',authToken,orderController)
router.get('/all-order',authToken,allOrderController)






module.exports = router