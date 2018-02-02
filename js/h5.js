// 内容管理对象
var H5 = function () {
	this.id = ('h5_' + Math.random()).replace('.', '_');
	this.el = $('<div class="h5" id="' + this.id + '">').hide();
	$('body').append(this.el);
	this.page = [];

	this.addPage = function (name, text) {
		var page = $('<div class="h5_page section">');
		if (name) {
			page.addClass('h5_page_' + name);
		}
		if (text) {
			page.text(text);
		}
		this.page.push(page)
		this.el.append(page);
		return this;

	}
	this.addComponent = function (name, cfg) {
		var cfg = cfg || {};
		cfg = $.extend({
			type: 'base'
		}, cfg);

		var component;
		var page = this.page.slice(-1)[0];
		switch (cfg.type) {
			case 'base':
				component = new h5ComponentBase(name, cfg);
				break;
			default:
				// statements_def
				break;
		}
		page.append(component);
		return this;
	}
	this.loader = function () {
		this.el.show();
		this.el.fullpage({
			onLeave: function (index, nextIndex, direction) {
			    $(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad: function (anchorLink, index) {
			    $(this).find('.h5_component').trigger('onLoad');
			}
		});
		this.page[0].find('.h5_component').trigger('onLoad');
		return this;
	}
	return this;

}