define(["jquery", "underscore", "backbone"], 

function($, _, Backbone) {

    var Model = Backbone.Model.extend({
        defaults: {
                "title":""
            ,   "desc":""
            ,   "icon":""
            ,   "service":""
            ,   "img":""
            ,   "date": new Date()
        }
    });

    return Model;
});

