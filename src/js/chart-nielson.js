var gradientSteps = {
	'0%': '#5BCEE0',
	'33%': '#AAFFA4',
	'100%': '#FF6601'
};

var gradientDirection = 'v'; 

var traffic = c3.generate({
	bindto: '#nielson-chart',
	padding: {
		left: 40,
		right: 40
	},
	size: {
		width: 1160,
		height: 300
	},
	data: {
		columns: [
		["data", 0, .08, .18, .32, .42, .5, .55, .58, .6, .63, .65, 
		.67, .69, .72, .74, .76, .78, .8, .81, .83, .85, 
		.87, .88, .90, .91, .92, .93, .94 ,.95, .99]
		],
		types: {
			data: 'line'
		}
	},
	axis: {
		x: {
			tick: {
				format: function (x) { return (x) + 's'; },
				culling: {
					max: 6
				}
			},
			label: {
				text: 'Seconds Video Watched',
				position: 'inner-center'
			}
		},
		y: {
			tick: {
				format: d3.format("p")
			},
			label: {
				text: 'Cummulative Impact',
				position: 'inner-middle'
			}
		}
	},
	legend: {
		show: false
	},
	tooltip: {
	    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        return "<font>" + Math.round(d[0].value * 100) + "% Impacted</font><br/><font>" + (d[0].x) + "s Watched</font>";
	  }
  },
	point: {
		show: false
	}
});

function svgElement(element, attr) {
	el = $(document.createElementNS('http://www.w3.org/2000/svg', element));
	return el.attr(attr);
}

if (gradientDirection == 'v') {
	var x2 = '0%';
	var y1 = '100%';
} else if (gradientDirection == 'h') {
	var x2 = '100%';
	var y1 = '0%';
}

var grad = svgElement('linearGradient', {id: 'bgGradient', x1: '0%', x2: x2, y1: y1, y2: '0%'}).appendTo('#nielson-chart svg defs');

$.each(gradientSteps, function(offset, color){
	svgElement('stop', {'style':'stop-color:'+gradientSteps[offset], 'offset': offset}).appendTo('#nielson-chart svg defs #bgGradient');
});

$('.load-ad-recall').on('click', function(e) {
	e.preventDefault();
	$('.chart .link').removeClass('link--active');
	traffic.load({
		columns: [
		["data", 0, .18, .32, .47, .56, .6, .63, .65, .68, .71, .74, 
		.75, .77, .78, .8, .82, .85, .87, .88, .89, .9, 
		.91, .92, .93, .94, .95, .96, .97 ,.98, .99]
		]
	});
	$(this).addClass('link--active');
});

$('.load-brand-awareness').on('click', function(e) {
	e.preventDefault();
	$('.chart .link').removeClass('link--active');
	traffic.load({
		columns: [
		["data", 0, .08, .18, .32, .42, .5, .55, .58, .6, .63, .65, 
		.67, .69, .72, .74, .76, .78, .8, .81, .83, .85, 
		.87, .88, .90, .91, .92, .93, .94 ,.95, .99]
		]
	});
	$(this).addClass('link--active');
});

$('.load-purchase-intent').on('click', function(e) {
	e.preventDefault();
	$('.chart .link').removeClass('link--active');
	traffic.load({
		columns: [
		["data", 0, .14, .3, .44, .52, .59, .62, .65, .67, .69, .72, 
		.73, .76, .78, .8, .82, .84, .87, .88, .89, .9, 
		.91, .92, .93, .94, .95, .96, .97 ,.98, .99]
		]
	});
	$(this).addClass('link--active');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaGFydC1uaWVsc29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBncmFkaWVudFN0ZXBzID0ge1xuXHQnMCUnOiAnIzVCQ0VFMCcsXG5cdCczMyUnOiAnI0FBRkZBNCcsXG5cdCcxMDAlJzogJyNGRjY2MDEnXG59O1xuXG52YXIgZ3JhZGllbnREaXJlY3Rpb24gPSAndic7IFxuXG52YXIgdHJhZmZpYyA9IGMzLmdlbmVyYXRlKHtcblx0YmluZHRvOiAnI25pZWxzb24tY2hhcnQnLFxuXHRwYWRkaW5nOiB7XG5cdFx0bGVmdDogNDAsXG5cdFx0cmlnaHQ6IDQwXG5cdH0sXG5cdHNpemU6IHtcblx0XHR3aWR0aDogMTE2MCxcblx0XHRoZWlnaHQ6IDMwMFxuXHR9LFxuXHRkYXRhOiB7XG5cdFx0Y29sdW1uczogW1xuXHRcdFtcImRhdGFcIiwgMCwgLjA4LCAuMTgsIC4zMiwgLjQyLCAuNSwgLjU1LCAuNTgsIC42LCAuNjMsIC42NSwgXG5cdFx0LjY3LCAuNjksIC43MiwgLjc0LCAuNzYsIC43OCwgLjgsIC44MSwgLjgzLCAuODUsIFxuXHRcdC44NywgLjg4LCAuOTAsIC45MSwgLjkyLCAuOTMsIC45NCAsLjk1LCAuOTldXG5cdFx0XSxcblx0XHR0eXBlczoge1xuXHRcdFx0ZGF0YTogJ2xpbmUnXG5cdFx0fVxuXHR9LFxuXHRheGlzOiB7XG5cdFx0eDoge1xuXHRcdFx0dGljazoge1xuXHRcdFx0XHRmb3JtYXQ6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoeCkgKyAncyc7IH0sXG5cdFx0XHRcdGN1bGxpbmc6IHtcblx0XHRcdFx0XHRtYXg6IDZcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGxhYmVsOiB7XG5cdFx0XHRcdHRleHQ6ICdTZWNvbmRzIFZpZGVvIFdhdGNoZWQnLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2lubmVyLWNlbnRlcidcblx0XHRcdH1cblx0XHR9LFxuXHRcdHk6IHtcblx0XHRcdHRpY2s6IHtcblx0XHRcdFx0Zm9ybWF0OiBkMy5mb3JtYXQoXCJwXCIpXG5cdFx0XHR9LFxuXHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0dGV4dDogJ0N1bW11bGF0aXZlIEltcGFjdCcsXG5cdFx0XHRcdHBvc2l0aW9uOiAnaW5uZXItbWlkZGxlJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0bGVnZW5kOiB7XG5cdFx0c2hvdzogZmFsc2Vcblx0fSxcblx0dG9vbHRpcDoge1xuXHQgICAgY29udGVudHM6IGZ1bmN0aW9uIChkLCBkZWZhdWx0VGl0bGVGb3JtYXQsIGRlZmF1bHRWYWx1ZUZvcm1hdCwgY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIFwiPGZvbnQ+XCIgKyBNYXRoLnJvdW5kKGRbMF0udmFsdWUgKiAxMDApICsgXCIlIEltcGFjdGVkPC9mb250Pjxici8+PGZvbnQ+XCIgKyAoZFswXS54KSArIFwicyBXYXRjaGVkPC9mb250PlwiO1xuXHQgIH1cbiAgfSxcblx0cG9pbnQ6IHtcblx0XHRzaG93OiBmYWxzZVxuXHR9XG59KTtcblxuZnVuY3Rpb24gc3ZnRWxlbWVudChlbGVtZW50LCBhdHRyKSB7XG5cdGVsID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgZWxlbWVudCkpO1xuXHRyZXR1cm4gZWwuYXR0cihhdHRyKTtcbn1cblxuaWYgKGdyYWRpZW50RGlyZWN0aW9uID09ICd2Jykge1xuXHR2YXIgeDIgPSAnMCUnO1xuXHR2YXIgeTEgPSAnMTAwJSc7XG59IGVsc2UgaWYgKGdyYWRpZW50RGlyZWN0aW9uID09ICdoJykge1xuXHR2YXIgeDIgPSAnMTAwJSc7XG5cdHZhciB5MSA9ICcwJSc7XG59XG5cbnZhciBncmFkID0gc3ZnRWxlbWVudCgnbGluZWFyR3JhZGllbnQnLCB7aWQ6ICdiZ0dyYWRpZW50JywgeDE6ICcwJScsIHgyOiB4MiwgeTE6IHkxLCB5MjogJzAlJ30pLmFwcGVuZFRvKCcjbmllbHNvbi1jaGFydCBzdmcgZGVmcycpO1xuXG4kLmVhY2goZ3JhZGllbnRTdGVwcywgZnVuY3Rpb24ob2Zmc2V0LCBjb2xvcil7XG5cdHN2Z0VsZW1lbnQoJ3N0b3AnLCB7J3N0eWxlJzonc3RvcC1jb2xvcjonK2dyYWRpZW50U3RlcHNbb2Zmc2V0XSwgJ29mZnNldCc6IG9mZnNldH0pLmFwcGVuZFRvKCcjbmllbHNvbi1jaGFydCBzdmcgZGVmcyAjYmdHcmFkaWVudCcpO1xufSk7XG5cbiQoJy5sb2FkLWFkLXJlY2FsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0JCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuXHR0cmFmZmljLmxvYWQoe1xuXHRcdGNvbHVtbnM6IFtcblx0XHRbXCJkYXRhXCIsIDAsIC4xOCwgLjMyLCAuNDcsIC41NiwgLjYsIC42MywgLjY1LCAuNjgsIC43MSwgLjc0LCBcblx0XHQuNzUsIC43NywgLjc4LCAuOCwgLjgyLCAuODUsIC44NywgLjg4LCAuODksIC45LCBcblx0XHQuOTEsIC45MiwgLjkzLCAuOTQsIC45NSwgLjk2LCAuOTcgLC45OCwgLjk5XVxuXHRcdF1cblx0fSk7XG5cdCQodGhpcykuYWRkQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xufSk7XG5cbiQoJy5sb2FkLWJyYW5kLWF3YXJlbmVzcycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0JCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuXHR0cmFmZmljLmxvYWQoe1xuXHRcdGNvbHVtbnM6IFtcblx0XHRbXCJkYXRhXCIsIDAsIC4wOCwgLjE4LCAuMzIsIC40MiwgLjUsIC41NSwgLjU4LCAuNiwgLjYzLCAuNjUsIFxuXHRcdC42NywgLjY5LCAuNzIsIC43NCwgLjc2LCAuNzgsIC44LCAuODEsIC44MywgLjg1LCBcblx0XHQuODcsIC44OCwgLjkwLCAuOTEsIC45MiwgLjkzLCAuOTQgLC45NSwgLjk5XVxuXHRcdF1cblx0fSk7XG5cdCQodGhpcykuYWRkQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xufSk7XG5cbiQoJy5sb2FkLXB1cmNoYXNlLWludGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0JCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuXHR0cmFmZmljLmxvYWQoe1xuXHRcdGNvbHVtbnM6IFtcblx0XHRbXCJkYXRhXCIsIDAsIC4xNCwgLjMsIC40NCwgLjUyLCAuNTksIC42MiwgLjY1LCAuNjcsIC42OSwgLjcyLCBcblx0XHQuNzMsIC43NiwgLjc4LCAuOCwgLjgyLCAuODQsIC44NywgLjg4LCAuODksIC45LCBcblx0XHQuOTEsIC45MiwgLjkzLCAuOTQsIC45NSwgLjk2LCAuOTcgLC45OCwgLjk5XVxuXHRcdF1cblx0fSk7XG5cdCQodGhpcykuYWRkQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xufSk7Il0sImZpbGUiOiJjaGFydC1uaWVsc29uLmpzIn0=
