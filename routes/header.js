fs = require('fs');

exports.moduleHelper =  moduleHelper = {

    modules:{},
    toModuleArray: function(module){

        this.modules["m" + module.tileName] = module;
        var myModules = module.childModules;
        for (var idx = 0; idx < myModules.length; idx++) {
            this.toModuleArray(myModules[idx]);
            console.log(this.modules["m" + module.moduleId]);
        }

    }

};


exports.getHeaderData = function(req, res){
    //var id = req.params.id;

    fs.readFile('./views/headerData.hbs', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var str = eval('('+data+')');
        this.moduleHelper.toModuleArray(str.headerModules[0]);
        console.log(moduleHelper.modules);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });

};