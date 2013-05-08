define([
    "jquery", "underscore", "backbone", "bootstrap",
    "views/NavView", "views/TimelineView", "views/SourceView",
    ""], 

function($, _, Backbone, bootstrap, 
    NavView, TimelineView, SourceView) {

    // console.log("AppView",arguments);

    var View = Backbone.View.extend({
        initialize: function() {

            this.initViews();

        },
        initViews : function(){

            this.navView = new NavView();
            this.timelineView = new TimelineView();
            this.sourceView = new SourceView();

            $("[data-toggle='tooltip']").tooltip();

        }
    });

    return View;
});