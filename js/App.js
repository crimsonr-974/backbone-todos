var app = (function(){
	var api = {
		views: {},
		models: {},
		collections: {},
		content: null,
		router: null,
		todos: null,
		init: function(){
			this.content = $("#content");
		},
		changeContent: function(el){
			this.content.empty().append(el);
			return this;
		}
	};
	var ViewsFactory = {};
	var Router = Backbone.Router.extend({});
	api.router = new Router();

	return api;
})();