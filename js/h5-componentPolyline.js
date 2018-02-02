var h5ComponentPolyline = function (name, cfg) {
	var component = new h5ComponentBase(name, cfg);
	var w = cfg.width;
	var h = cfg.height;
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;

	// 水平网格线 100份 10分
	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#aaa';
	window.ctx = ctx;

	for (var i = 0; i < step + 1; i++) {
		var y = (h / step) * i
		ctx.moveTo(0, y);
		ctx.lineTo(w, y)
	}

	// 垂直网格线
	step = cfg.data.length + 1;
	for (var i = 0; i < step + 1; i++) {
		var x = (w / step) * i
		ctx.moveTo(x, 0);
		ctx.lineTo(x, h)
	}
	ctx.stroke();
	component.append(cns);


	// 加入画布数据层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = '#ff8878';

	return component;
}