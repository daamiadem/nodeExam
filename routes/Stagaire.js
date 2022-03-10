var express = require('express');
var router = express.Router();


var Stagaire= require('../models/Stagaire');
  
router.get('/', function(req, res, next) {
  Stagaire.find(
    (err, Stagaires) => {
res.render(
         'form.twig',
         { title :
"Stagaires list", Stag :
Stagaires
         }
       );
    }
    );
})

// router.get('/:id', function(req, res, next) {
//   Stagaire.findById( req.params.id,(err, Stagaires) => {
//     res.render(
//              'form.twig',
//              { title2 :
//     "Recherche par id ", contactById :
//     contacts
//              }
//            );
//         }
//         );
//     })

// router.get('/delete/:id', function(req, res, next) {
//   Contact.findByIdAndRemove(req.params.id,function(err,docs){
//     if(err)
//     console.log(err);
//     res.redirect('/contact');

//   }) });


//   router.get('/delete2/:id', function(req, res, next) {
//     Contact.findById({_id:req.params.id},function(err,docs){
//       if(err)
//       console.log(err);
//       doc.remove(function(err,Contact){
//         res.redirect('/contact');
      
//     }) }) });
  
router.post('/', function(req, res, next) {
    new Stagaire({
        
               cin : req.body.cin, 
               nom : req.body.nom, 
               prenom : req.body.prenom, 
               sexe : req.body.sexe, 
               email : req.body.email, 
               telephone : req.body.telephone, 
               option : req.body.option

             })
             .save(
               (err, newStagaire)=>{
    if (err)
                     console.log("error message :" +err);
                     else{
    console.log(newStagaire);
                   //  res.json(" : Contact :" + newcontact._id +" added");
                     res.redirect('/Stagaire');

                 }
               }
             );
            })
            

module.exports = router;
