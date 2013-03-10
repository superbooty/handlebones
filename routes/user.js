
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.getUser = function(req, res){
    var id = req.params.id;
    res.send({'id':id});
};

exports.addAccount = function(req, res){
   console.log(req.body);
    res.render('user', req.body);

};
