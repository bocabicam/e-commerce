const express = require("express");
const router = express.Router();

/* GET home page, */
router.get("/" , function(req,res,next){
    res.send("Estoy en home");
});

router.get("/detail-products" , function(req,res,next){
    res.send("Estoy en Detalle de Producto");
});

router.get("/sesion" , function(req,res,next){
    res.send("Estoy en Inicio de Sesion");
});

router.get("/registro" , function(req,res,next){
    res.send("Estoy en Registrarme");
});

router.get("/carrito" , function(req,res,next){
    res.send("Estoy en Carrito");
});



module.exports = router;