var MapTreeGroup = function() {

	var self = this;

	this.parent = null;
	this.isOpen = true;
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