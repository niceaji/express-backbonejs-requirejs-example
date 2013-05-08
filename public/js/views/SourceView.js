define([
    "jquery", "underscore", "backbone", "lib/jquery.timeago", "lib/autolink",
    "collections/SourceCollection", "collections/SourceNewsCollection", "collections/SourceTwitterCollection", 
    "views/SourceItemView",
    "text!/jst/SourceView.html"], 

function($, _, Backbone, timeago, autolink,
    SourceCollection, SourceNewsCollection, SourceTwitterCollection, 
    SourceItemView,
    html) {

    var sourceType = 'Twitter' 
    ,   $box = ''
    ,   $more = ''
    ,   $loading = ''
    ,   sourceCollection = ''

    // console.log("SourceView",util)

    var View = Backbone.View.extend({
        el : '#source',

        "events": {
                "keydown #searchInput" : "search"
            ,   "click #sourceSelectTab a[data-toggle=tab]" : "selectSourceTab"
            ,   "click .btn.more" : "searchMore"
        },
        template: _.template(html),

        initialize: function(options){
            // _.bindAll(this.complateSearch);
            // _.extend(this, {}, options);

            this.render();


        },
        search : function(event){

            if(event && event.keyCode!="13") {
                return;
            }

            $box.html('');
            this.startLoadingStatus();

            sourceCollection = this.getSourceCollection();
            // sourceCollection.on("add", this.addSourceItemView, this);
            // sourceCollection.on("reset", this.complateSearch, this);

            // this.listenTo(sourceCollection, 'add', this.addOne);
            this.listenTo(sourceCollection, 'reset', this.addAll);
            // this.listenTo(sourceCollection, 'all', this.all);

            sourceCollection.load( $('#searchInput').val() );

        },
        // all : function(){
        //     console.log('all', sourceCollection.length)
        // },
        addAll : function(){

            // console.log('addAll')

            sourceCollection.each(this.addOne, this);

            this.$('.timeago').timeago();

            $loading.hide();

            if( sourceCollection.isMore() ){
                $more.show();
            }
            else {
                $nothing.show();
            }
        },
        addOne : function(item){
            // console.log('addOne')

            var view = new SourceItemView({model:item});
            $box.append(view.render().el);
        },
        getSourceCollection : function(){
            if(sourceType==="News"){
                return new SourceNewsCollection();
            }
            else if(sourceType==="Twitter"){
                return new SourceTwitterCollection();
            }
            else {
                console.error("존재하지 않는 클래스");
            }
        },
        searchMore : function(){

            sourceCollection.page++;

            this.startLoadingStatus();

            sourceCollection.load();
        },

        startLoadingStatus : function(){
            $loading.show();
            $more.hide();
            $nothing.hide();
        },

        selectSourceTab : function(event){
            var $currentTarget = $(event.currentTarget)
            ,   query = $('#searchInput').val();

            $('#searchInput').attr('placeholder', $currentTarget.data("placeholder") );
            sourceType = $currentTarget.data("sourcetype");


            if(query) {
                this.search();
            }
        },

        render: function(){
            // $(this.el).append(this.template( this.model.toJSON() ));

            this.$el.html( this.template );

            //cache
            $box = this.$(".body .box");
            $more = this.$(".bottom .btn.more");
            $loading = this.$(".bottom .icon-spin");
            $nothing = this.$(".bottom .nothing");

            return this;
        }
    });

    return View;
});

