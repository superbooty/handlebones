/**
 * Created with JetBrains WebStorm.
 * User: superbooty
 * Date: 2/24/13
 * Time: 9:55 PM
 * To change this template use File | Settings | File Templates.
 */

var routes = require('./routes')
    , user = require('./routes/user')
    , product = require('./routes/product')
    , header = require('./routes/header');

var router = exports = module.exports = {};

router.configure = function(app){
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get('/user/:id', user.getUser);
    app.get('/data/header', header.getHeaderData);
    app.get('/product/productsAsJSON', product.getProductsAsJSON);
    app.post('/user/addAccount', user.addAccount);

};
