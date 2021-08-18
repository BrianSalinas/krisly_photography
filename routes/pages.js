const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const { request } = require("http");
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'photographykrisly@gmail.com',
      pass: 'Ks2663354*'
    }
  });


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
  
router.get("/",(req,res)=>{

    res.render("index.hbs");
    
});

router.get("/galeria",(req,res)=>{

    res.render("galeria.hbs");
    
});

router.get("/precios",(req,res)=>{

    res.render("precios.hbs");
    
});

router.get("/biografia",(req,res)=>{

    res.render("biografia.hbs");
    
});

router.get("/contacto",(req,res)=>{

    res.render("contacto.hbs");
    
});


router.post("/send_email",(req,res)=>{
    
        var mensaje = "<p style='font-weight:bold;'> Mensaje: </p>" + req.body.mensaje + "<br>" + "<p style='font-weight:bold;'> Numero de Telefono: </p>" + req.body.numero + "<br>" + "<p style='font-weight:bold;'>Correo del Cliente: </p>" + req.body.email;
          var mailOptions = {
            from: 'photographykrisly@gmail.com',
            to: 'krisly1020.o@gmail.com',
            subject: 'Informe de Pedido - Krisly Photography',
            html: mensaje
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

    res.redirect("/");
});


module.exports = router;