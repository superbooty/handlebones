/**
 * Created with JetBrains WebStorm.
 * User: a0gueva
 * Date: 3/8/13
 * Time: 5:06 PM
 * To change this template use File | Settings | File Templates.
 */
Handlebars = require('handlebars');


var hbsHelper = exports = module.exports = {};

hbsHelper.setupHelpers = function () {
    Handlebars.registerHelper('everyNth', function (context, every, options) {
        var fn = options.fn, inverse = options.inverse;
        var ret = "";

        return (options.data.index ) % every == 0 ? fn(context) : inverse(this);
    });

    Handlebars.registerHelper('ratingsHelper', function (ratings) {
        var val = Math.round(ratings);
        return (5 - val) * 19;
    });

    Handlebars.registerHelper('desc', function (desc) {
        return desc.split(/<li>/i).slice(1).join(', ');
    });

}

