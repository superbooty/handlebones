fs = require('fs');

exports.getProducts = function(req, res){
    var id = req.params.id;
    res.send({'id':id});
};

exports.getProductsAsJSON = function(req, res){
    //var id = req.params.id;

    fs.readFile('./views/products.hbs', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        //this.moduleHelper.toModuleArray(str.headerModules[0]);
        //console.log(moduleHelper.modules);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });

};