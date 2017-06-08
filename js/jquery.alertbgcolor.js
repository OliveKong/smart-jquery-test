;
(function($) {
	$.fn.extend({
		"alertBgColor": function(options) {
			options = $.extend({
				odd: "odd", //偶数行样式
				even: "even", //奇数行样式
				selected: "selected", //选中行样式
			}, options);
			$("tbody>tr:odd", this).addClass(options.odd);
			$("tbody>tr:even", this).addClass(options.even);
			$("tbody>tr", this).click(function() {
				//判断当前是否选中
				var hasSelected = $(this).hasClass(options.selected);
				//如果选中就移除selected，否则就加上selected
				$(this)[hasSelected ? "removeClass" : "addClass"](options.selected).find(":checkbox").prop("checked", !hasSelected);
			});
			// 如果单选框默认情况下是选中的，则高亮这行
			$("tbody>tr:has(:checked)", this).addClass(options.selected);
			return this; //返回this,使方法可链
		}
	});
})(jQuery);