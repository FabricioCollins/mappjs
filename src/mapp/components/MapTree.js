var defaultOptions = {
	displayName: "",
	searchBox: true
};

var MapTree = function(target, settings) {

	var self = this;

	this.options = $.extend({}, defaultOptions, settings);

	this.target = "";
	this.items = [];

	this.addItem = function(item) {
		self.items.push(item);
	};

	this.addItems = function(items) {
		for(var i in items) {
			self.addItem(items[i]);
		}
	};

	this.render = function() {
		return this;
	};
};