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
			ViewsFactory.menu();
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
		},
		list: function(archive){
			if(!this.listView){
				this.listView = new api.views.list({
					model: api.todos
				})
			}
		}
	};
	var Router = Backbone.Router.extend({
		routes: {
			"archive": "archive",
			"new": "newToDo",
			"edit/:index": "editToDo",
			"delete/:index": "delteTodo",
			"": "list"
		},
		list: function(archive){
			var view = ViewsFactory.list();
			api
			.title(archive ? "Archive" : "Your ToDos:")
			.changeContent(view.$el);
			view.setMode(archive ? "archive" : null).render();
		},
		archive: function(){
			this.list(true);
		},
		newToDo: function(){},
		editToDo: function(index){},
		delteTodo: function(index){}
	});
	api.router = new Router();

	return api;
})();