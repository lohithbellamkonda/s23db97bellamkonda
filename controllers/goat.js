var goat = require('../models/goat');
// var express = require('express');
// var router = express.Router();
// List of all Costumes
exports.goat_list = function(req, res) {
res.send('NOT IMPLEMENTED: goat list');
};
// for a specific goat.
exports.goat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: goat detail: ' + req.params.id);
};
// Handle goat create on POST.
exports.goat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: goat create POST');
};
// Handle goat delete form on DELETE.
// Handle goat delete on DELETE.
exports.goat_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await goat.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle goat update form on PUT.
exports.goat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: goat update PUT' + req.params.id);
};

// List of all Costumes
exports.goat_list = async function(req, res) {
    try{
    thegoat = await goat.find();
    res.send(thegoat);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.goat_view_all_Page = async function(req, res) {
    try{
    thegoat = await goat.find();
    res.render('goat', { title: 'goat Search Results', results: thegoat });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle goat create on POST.
    exports.goat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new goat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.goat_color = req.body.goat_color;
    document.goat_size = req.body.goat_size;
    document.goat_weight = req.body.goat_weight;
    
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// for a specific Costume.
exports.goat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await goat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
//Handle Costume update form on PUT.
exports.goat_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await goat.findById( req.params.id)
// Do updates of properties
if(req.body.goat_type)
toUpdate.goat_type = req.body.goat_type;
if(req.body.goat_color) toUpdate.goat_color = req.body.goat_color;
if(req.body.goat_size) toUpdate.goat_size = req.body.goat_size;
if(req.body.goat_weight) toUpdate.goat_weight = req.body.goat_weight;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle a show one view with id specified by query
exports.goat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await goat.findById( req.query.id)
    res.render('goatdetail',
    { title: 'goat Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.goat_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('goatcreate', { title: 'goat Create'});
    }
    catch(err){
        console.log(err,"err check")
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a costume.
// query provides the id
exports.goat_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await goat.findById(req.query.id)
    res.render('goatupdate', { title: 'goat Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.goat_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await goat.findById(req.query.id)
    res.render('goatdelete', { title: 'goat Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };