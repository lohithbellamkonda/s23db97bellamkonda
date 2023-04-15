var goat = require('../models/goat');
// List of all goats
exports.goat_list = async function(req, res) {
    try{
    thegoats = await goat.find();
    res.send(thegoats);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific goat.
// for a specific goat.
// for a specific goat.
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
// Handle goat create on POST.
// Handle goat create on POST.
exports.goat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new goat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"goat_type":"goat", "cost":12, "size":"large"}
    document.goat_color = req.body.goat_color;
    document.weight = req.body.weight;
    document.size = req.body.size;
    try{
        thegoats = await document.save();
    res.send(thegoats);
    }  
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle goat delete form on DELETE.
exports.goat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: goat delete DELETE ' + req.params.id);
};
//Handle goat update form on PUT.
exports.goat_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await goat.findById( req.params.id)
 // Do updates of properties
 if(req.body.goat_type)
 toUpdate.goat_type = req.body.goat_type;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 if(req.body.size) toUpdate.size = req.body.size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// VIEWS
// Handle a show all view
exports.goat_view_all_Page = async function(req, res) {
try{
thegoats = await goat.find();
res.render('goat', { title: 'goat Search Results', results: thegoats });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
