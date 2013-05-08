define(["jquery", "underscore", "backbone","text!/jst/SourceItemView.html"], 
function($, _, Backbone,html) {


    var View = Backbone.View.extend({

        "events": {
            
        },
        template: _.template( html ) ,

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
        },
        render: function(){

            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });

    return View;
});

