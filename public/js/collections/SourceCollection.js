define(["jquery", "underscore", "backbone","models/SourceModel"], 

function($, _, Backbone, SourceModel) {

    var Collection = Backbone.Collection.extend({
        // model : SourceModel

            totalCount : 0
        ,   countPerPage : 10  
        ,   query : ''
        ,   page : 1

        ,   isMore : function(){

                return true;
        }

    });

    return Collection;
});

