define(["jquery", "underscore", "backbone",
    "collections/SourceCollection", "models/SourceNewsModel"], 

function($, _, Backbone, SourceCollection, SourceNewsModel) {

    var api = '/api/search/news?q=<%=q%>&page=<%=page%>'
    ,   totalCount = 0



    var Collection = SourceCollection.extend({

        model : SourceNewsModel

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

            totalCount = response.totalCount;
            return response.simpleNews;
        }
    ,   isMore : function(){
            
            if(this.page * this.countPerPage < totalCount) {
                return true;
            }
            else {
                return false;
            }
        }
    
    });

    return Collection;
});

