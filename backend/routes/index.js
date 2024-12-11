const express = require('express')

const router = express.Router()


const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user/userDetails')
const userLogout = require('../controller/user/userLogout')
const updateUser = require('../controller/user/UpdateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProduct')
const deleteUser = require('../controller/user/userDelete')
const deleteProductController = require('../controller/product/deleteProduct')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const userForgotPassword = require('../controller/user/userForgotPassword')
const userResetPassword  = require('../controller/user/userResetPassword')
const verifyEmail = require('../controller/user/VerifyUser')
const userCreateController = require('../controller/user/userCreate')
const paymentCart = require('../payment/momo')
const UpdateCart = require('../controller/cart/UpdateCart')
const allUsers = require('../controller/user/allUsers')



//user
router.post("/signup",userSignUpController)
router.post("/user-create",userCreateController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/user-logout",userLogout)
router.delete("/delete-user",authToken,deleteUser)
router.post("/forgot-password",userForgotPassword)
router.post("/reset-password/:token",userResetPassword)
router.post("/verifyemail",verifyEmail)
//admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)
//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/getcategory-product",getCategoryProduct)
router.delete("/delete-product",authToken,deleteProductController)
router.post("/category-product",getCategoryWiseProduct)
router.post("/category-details",getProductDetails)
router.get("/search", searchProduct)
router.post("/filter-product",filterProductController)
//addtocart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-cart-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.delete("/delete-cart-product",authToken,deleteAddToCartProduct)
router.post("/payment",authToken,paymentCart)
router.post("/update-cart",authToken,UpdateCart)



module.exports = router