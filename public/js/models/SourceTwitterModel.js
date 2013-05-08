define(["jquery", "underscore", "backbone", "models/SourceModel"], 

function($, _, Backbone, SourceModel) {

    var Model = SourceModel.extend({


        parse  : function(response){

            // console.log("SourceTwitterModel.parse()" , arguments);


            this.set('title', "<a href='http://twitter.com/"+response.from_user+"/status/"+response.id_str+"' target='_blank'>@"+response.from_user_name+'</a>');
            this.set('desc', response.text.autoLink({target:'_blank'}));
            this.set('img', response.profile_image_url);
            this.set('id', response.id);
            this.set('icon', '');
            this.set('service', 'twitter');
            this.set('date', response.created_at);


            return this.toJSON();
        }
        
    });

    return Model;
});

