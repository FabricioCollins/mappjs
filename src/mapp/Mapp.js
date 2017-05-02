var london = ol.proj.fromLonLat([-0.12755, 51.507222]);
var moscow = ol.proj.fromLonLat([37.6178, 55.7517]);
var istanbul = ol.proj.fromLonLat([28.9744, 41.0128]);
var rome = ol.proj.fromLonLat([12.5, 41.9]);
var bern = ol.proj.fromLonLat([7.4458, 46.95]);

var defaultOptions = {
	target: "map",
	source: 
	layers: [],
	controls: [],
	showNavigation: true,
	mouseWheel: true,
	showScale: true,
	showPanZoomBar: true,	
	loadTilesWhileAnimating: true
};

var Mapp = function(settings) {

	var self = this;

	this.options = $.extend({}, defaultOptions, settings);
	
	this.view = new ol.View({
        center: istanbul,
        zoom: 6
    });

	this.map = new ol.Map({
        target: self.options.target,
        layers: [
          new ol.layer.Tile({
            preload: 4,
            source: new ol.source.OSM()
          })
        ],
        // Improve user experience by loading tiles while animating. Will make
        // animations stutter on mobile or slow devices.
        loadTilesWhileAnimating: self.options.loadTilesWhileAnimating,
        view: self.view
    });

    this.layers = [];

    // End of attributes



	this.addLayer = function(layer) {
		self.layers.push(layer);
		self.map.addLayer(layer.getSource());
	};

	this.addLayers = function(layers) {
		for(var i in layers) {
			self.addLayers(layers[i]);
		}
	};

	this.getLayer = function(name) {

	};

	this.addControl = function(control) {
		self.map.addControl(control);
	};

	this.addControls = function(controls) {
		self.map.addControls(controls);
	};

	this.setMapCenter = function() {

	};

	this.flyTo = function(location, done) {
        var duration = 2000;
        var zoom = self.view.getZoom();
        var parts = 2;
        var called = false;
        function callback(complete) {
          --parts;
          if (called) {
            return;
          }
          if (parts === 0 || !complete) {
            called = true;
            done(complete);
          }
        }
        self.view.animate({
          center: location,
          duration: duration
        }, callback);
        self.view.animate({
          zoom: (zoom - 1),
          duration: (duration / 2)
        }, {
          zoom: zoom,
          duration: (duration / 2)
        }, callback);s
    };

    this.tour = function(locations = []) {
        var index = -1;
        function next(more) {
          if (more) {
            ++index;
            if (index < locations.length) {
              var delay = index === 0 ? 0 : 750;
              setTimeout(function() {
                self.flyTo(locations[index], next);
              }, delay);
            } else {
              console.log('Tour complete');
            }
          } else {
            console.log('Tour cancelled');
          }
        }
        next(true);
    };

    this.getMap = function() {
    	return self.map;
    };

    this.bounce = function(t) {
        var s = 7.5625, p = 2.75, l;
        if (t < (1 / p)) {
          l = s * t * t;
        } else {
          if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
          } else {
            if (t < (2.5 / p)) {
              t -= (2.25 / p);
              l = s * t * t + 0.9375;
            } else {
              t -= (2.625 / p);
              l = s * t * t + 0.984375;
            }
          }
        }
        return l;
      }

      // An elastic easing method (from https://github.com/DmitryBaranovskiy/raphael).
      this.elastic = function(t) {
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
      }

      this.init = function() {

      };

      this.init();
};