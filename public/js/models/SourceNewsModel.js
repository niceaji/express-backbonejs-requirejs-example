define(["jquery", "underscore", "backbone", "models/SourceModel"], 

function($, _, Backbone, SourceModel) {

    var Model = SourceModel.extend({


        parse  : function(response){

            // console.log("SourceNewsItemModel.parse()" , arguments);

            this.set('title', response.title);
            this.set('desc', response.contents.substring(0,80) + "...");
            this.set('img', response.imageUrl);
            this.set('id', response.newsId);
            this.set('icon', '');
            this.set('service', 'news');
            this.set('date', response.regDt.substring(0,4) +'-'+ response.regDt.substring(4,6)+'-'+ response.regDt.substring(6,8)+' '+ response.regDt.substring(8,10)+':'+ response.regDt.substring(10,12)  );

            return this.toJSON();
        }
        
    });

    return Model;
});

