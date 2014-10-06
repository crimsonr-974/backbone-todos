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
			this.todos = new api.collections.ToDos();
			return this;
		},
		changeContent: function(el){
			this.content.empty().append(el);
			return this;
		}
	};
	var ViewsFactory = {
		menu: function(){
			if(!this.menuView){
				this.menuView = new api.views.menu({
					el: $("#menu")
				});
			}
			return this.menuView;
		}
	};
	var Router = Backbone.Router.extend({});
	api.router = new Router();

	return api;
})();