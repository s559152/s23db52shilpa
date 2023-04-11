var Bank = require('../models/Bank');
// List of all Costumes
exports.Bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bank list');
};
// for a specific Costume.
exports.Bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bank detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Bank_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bank();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Bank_type = req.body.Bank_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.Bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bank delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Bank_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bank update PUT' + req.params.id);
};

exports.Bank_list = async function(req, res) {
    try{
    theBank = await Bank.find();
    res.send(theBank);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    
// VIEWS
// Handle a show all view
exports.Bank_view_all_Page = async function(req, res) {
    try{
    theBank = await Bank.find();
    res.render('Bank', { title: 'Bank Search Results', results: theBank });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };