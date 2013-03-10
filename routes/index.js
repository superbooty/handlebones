
/*
 * GET home page.
 */

exports.index = function(req, res){

    fs.readFile('./views/products.hbs', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var str = eval('('+data+')');
        console.log(data);
        res.render('index', { 'myData': data, payload:str});
    });

};