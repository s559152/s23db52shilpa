var Bank = require('../models/Bank');
// List of all Banks
exports.Bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bank list');
};
// for a specific Bank.
exports.Bank_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Bank.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Bank create on POST.
exports.Bank_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bank();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Bank_type":"goat", "cost":12, "size":"large"}
    document.Bank_Name = req.body.Bank_Name;
    document.Account_Type = req.body.Account_Type;
    document.Balance = req.body.Balance;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Bank delete form on DELETE.
exports.Bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bank delete DELETE ' + req.params.id);
};
// Handle Bank update form on PUT.
exports.Bank_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Bank.findById( req.params.id)
    // Do updates of properties
    if(req.body.Bank_Name)
    toUpdate.Bank_Name = req.body.Bank_Name;
    if(req.body.Account_Type) toUpdate.Account_Type= req.body.Account_Type;
    if(req.body.Balance) toUpdate.Balance = req.body.Balance;
    let result = await toUpdate.save();
    if(req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;

    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
}
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