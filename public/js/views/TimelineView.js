define([
    "jquery", "underscore", "backbone",
    "text!/jst/TimelineView.html"], 

function($, _, Backbone, html) {

    var View = Backbone.View.extend({
        el : '#timeline',
        "events": {

        },
        template: _.template(html),
        initialize: function(options){
            _.extend(this, {}, options);
            this.render();
        },
        render: function(){
            // $(this.el).append(this.template( this.model.toJSON() ));
            this.$el.html( this.template );
            return this;
        }
    });

    return View;
});

