// 封装插件，调用$("html").foo({key: "value"});
(function($) {
	$.foo = function(el, options) {
		console.log(el);
		console.log(options);
	};
	$.fn.foo = function(options) {
		$.foo(this, options);
	};
})(jQuery);