;
(function($) {
	$.fn.extend({
		"color": function(value) {
			//this指向的是jquery对象
			if (value == undefined) {
				return this.css("color")
			} else {
				return this.css("color", value)
			}
		}
	});
})(jQuery);