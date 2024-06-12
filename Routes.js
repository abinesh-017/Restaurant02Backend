const express = require("express")
const routes = express.Router()
const Registercontroler = require('./Registercontroler');
const Staffcontroler = require('./Staffcontroler');
const FoodController = require('./FoodController');
const cartcontrol = require("./cartcontrol")
const ordercontrol = require("./ordercontrol")
const staffcartcontrol = require("./staffcartcontrol")
const Staffordercontroler = require("./Staffordercontroler")

routes.post('/CustomerRegistation', Registercontroler.CustomerRegistation)
routes.post('/CustomerLogin', Registercontroler.customerLogin)
routes.post('/forgotpassword', Registercontroler.CustforgotPass)

routes.post('/StaffRegistration', Staffcontroler.StaffRegistation)
routes.post('/Stafflogin', Staffcontroler.StaffLogin)

routes.post('/addmenu',FoodController.addmenu)
routes.post('/viewmenu',FoodController.viewmenu)
routes.post('/viewmenuById/:id',FoodController.viewmenuById)

routes.post('/editfood',FoodController.editfood)
routes.post('/deletefood/:id',FoodController.deletefood)
routes.post('/Editfooddetails/:id',FoodController.editfood)

routes.post('/addcart/:foodid',cartcontrol.addcart)
routes.post('/viewcart/:userid',cartcontrol.viewcart)
routes.post('/deletecartitem/:id',cartcontrol.deletecartitem)
routes.post('/cartitems/:userid',cartcontrol.deletecart)

routes.post('/addorder',ordercontrol.addorder)
routes.post('/vieworder/:userid',ordercontrol.vieworder)
routes.post('/cancelorder',ordercontrol.cancelorder)
routes.post('/paymentstatus',ordercontrol.paymentstatus)
routes.post('/vieworderdetails/:userid',ordercontrol.vieworderdetails)
routes.post('/viewcustomerorder',ordercontrol.viewcustomerorder)

routes.post('/staffaddcart/:foodid',staffcartcontrol.staffaddcart)
routes.post('/staffviewcart/:staffid',staffcartcontrol.staffviewcart)
routes.post('/staffdeletecartitem/:id',staffcartcontrol.staffdeletecartitem)

routes.post('/staffaddorder/:customername',Staffordercontroler.staffaddorder)
routes.post('/stafforderdetails/:staffid',Staffordercontroler.stafforderdetails)
routes.post('/viewstafforder',Staffordercontroler.viewstafforder)



module.exports = routes