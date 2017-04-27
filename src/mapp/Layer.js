var defaultOptions = {
	visible: true,
	displayName: "",
	visibleInTree: true,
};

var Layer = function(object, settings) {

	var self = this;

	this.options = $.extend({}, defaultOptions, settings);

	var layer = object || null;

	this.getSource = function() {
		return layer;
	};

	this.show = function() {
		layer.setVisibility(true);

		// TODO: Update Tree Layer
	};

	this.hide = function() {
		layer.setVisibility(false);

		// TODO: Update Tree Layer
	};

	this.getName = function() {

	};
};