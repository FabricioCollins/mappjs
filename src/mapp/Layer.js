var defaultOptions = {
	isVisible: true,
	displayName: "",
	visibleInTree: true,
	showLegend: true,
	featureInfoRegister: true
};

var Layer = function(object, settings) {

	var self = this;

	this.options = $.extend({}, defaultOptions, settings);

	this.layer = object || null;

	this.getSource = function() {
		return this.layer;
	};

	this.show = function() {		
		this.updateVisibility(true);
	};

	this.hide = function() {
		this.updateVisibility(false);		
	};

	this.updateVisibility = function(visibility) {
		this.layer.setVisibility(visibility);
		this.isVisible = visibility;
		// TODO: Update Tree Layer
	};

	this.refresh = function(force) {
		this.layer.refresh({force:force});
	};

	this.redraw = function() {
		this.layer.redraw();
	};

	this.isVisible = function() {
		return this.isVisible;
	};

	this.getName = function() {
		return (this.options.displayName === "")? 
			this.layer.name : this.options.displayName;
	};

	this.getCondinates = function() {

	};

	this.render = function() {
		return this;
	};
};