define(["jquery", "underscore", "backbone",
    "collections/SourceCollection", "models/SourceTwitterModel"], 

function($, _, Backbone, SourceCollection, SourceTwitterModel) {

    var api = '/api/search/twitter?q=<%=q%>&page=<%=page%>'




    var Collection = SourceCollection.extend({

        model : SourceTwitterModel

    ,   load : function(query){

            if(query) {
                this.query = query;
            }

            this.url = _.template(api,{q:this.query, page:this.page});
            this.fetch({reset:true});
            // this.fetch();
    }
    ,   parse: function(response) {

            // console.log("parse()",response);
            this.totalCount = response.results.length;

            return response.results;
        }
    ,   isMore : function(){

            return (this.totalCount > 0);
        }
    });

    return Collection;
});

