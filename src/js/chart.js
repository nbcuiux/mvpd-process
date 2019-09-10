var gradientSteps = {
  '0%': '#5BCEE0',
  '33%': '#AAFFA4',
  '100%': '#FF6601'
};

var gradientDirection = 'v'; // v / h

var traffic = c3.generate({
  bindto: '#market-chart',
  padding: {
    left: 12,
    right: 12
  },
	// size: {
	// 	width: 1160,
	// 	height: 300
	// },
	data: {
		columns: [
      ['data', 6.25, 7.4, 8.25, 10.58, 16.50]
     ],
		types: {
			data: 'area-spline',
      data2: 'scatter'
		}
	},
	axis: {
		y: {
			show: false
		},
		x: {
			show: false
		}
	},
	legend: {
		show: false
	},
	tooltip: {
		show: false
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

var grad = svgElement('linearGradient', {id: 'bgGradient', x1: '0%', x2: x2, y1: y1, y2: '0%'}).appendTo('#market-chart svg defs');

$.each(gradientSteps, function(offset, color){
  svgElement('stop', {'style':'stop-color:'+gradientSteps[offset], 'offset': offset}).appendTo('#market-chart svg defs #bgGradient');
});


$('.load-2009').on('click', function(e) {
  e.preventDefault();
  $('.chart .link').removeClass('link--active');
  count(6.25);
  $(this).addClass('link--active');
});

$('.load-2011').on('click', function(e) {
  e.preventDefault();
  $('.chart .link').removeClass('link--active');
  count(7.40);
  $(this).addClass('link--active');
});

$('.load-2012').on('click', function(e) {
  e.preventDefault();
  $('.chart .link').removeClass('link--active');
  count(8.25);
  $(this).addClass('link--active');
});

$('.load-2014').on('click', function(e) {
  e.preventDefault();
  $('.chart .link').removeClass('link--active');
  count(10.58);
  $(this).addClass('link--active');
});

$('.load-2017').on('click', function(e) {
  e.preventDefault();
  $('.chart .link').removeClass('link--active');
  count(16.50);
  $(this).addClass('link--active');
});

var numbers = document.querySelector('.callout span'),
    to = 0;


var count = function(toNumber) {
  to = toNumber;
  (parseFloat(numbers.innerHTML) < to) ? countUp() : countDown();
}

var countUp = function () {
  if (parseFloat(numbers.innerHTML) >= to) {
    return;
  }
  requestAnimationFrame(countUp);
  numbers.innerHTML = Math.round((parseFloat(numbers.innerHTML) + 0.1) * 100) / 100;
}

var countDown = function () {
  if (parseFloat(numbers.innerHTML) <= to) {
    return;
  }
  requestAnimationFrame(countDown);
  numbers.innerHTML = Math.round((parseFloat(numbers.innerHTML) - 0.1) * 100) / 100;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ3JhZGllbnRTdGVwcyA9IHtcbiAgJzAlJzogJyM1QkNFRTAnLFxuICAnMzMlJzogJyNBQUZGQTQnLFxuICAnMTAwJSc6ICcjRkY2NjAxJ1xufTtcblxudmFyIGdyYWRpZW50RGlyZWN0aW9uID0gJ3YnOyAvLyB2IC8gaFxuXG52YXIgdHJhZmZpYyA9IGMzLmdlbmVyYXRlKHtcbiAgYmluZHRvOiAnI21hcmtldC1jaGFydCcsXG4gIHBhZGRpbmc6IHtcbiAgICBsZWZ0OiAxMixcbiAgICByaWdodDogMTJcbiAgfSxcblx0c2l6ZToge1xuXHRcdHdpZHRoOiAxMTYwLFxuXHRcdGhlaWdodDogMzAwXG5cdH0sXG5cdGRhdGE6IHtcblx0XHRjb2x1bW5zOiBbXG4gICAgICBbJ2RhdGEnLCA2LjI1LCA3LjQsIDguMjUsIDEwLjU4LCAxNi41MF1cbiAgICAgXSxcblx0XHR0eXBlczoge1xuXHRcdFx0ZGF0YTogJ2FyZWEtc3BsaW5lJyxcbiAgICAgIGRhdGEyOiAnc2NhdHRlcidcblx0XHR9XG5cdH0sXG5cdGF4aXM6IHtcblx0XHR5OiB7XG5cdFx0XHRzaG93OiBmYWxzZVxuXHRcdH0sXG5cdFx0eDoge1xuXHRcdFx0c2hvdzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdGxlZ2VuZDoge1xuXHRcdHNob3c6IGZhbHNlXG5cdH0sXG5cdHRvb2x0aXA6IHtcblx0XHRzaG93OiBmYWxzZVxuXHR9LFxuXHRwb2ludDoge1xuXHRcdHNob3c6IGZhbHNlXG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBzdmdFbGVtZW50KGVsZW1lbnQsIGF0dHIpIHtcbiAgZWwgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBlbGVtZW50KSk7XG4gIHJldHVybiBlbC5hdHRyKGF0dHIpO1xufVxuXG5pZiAoZ3JhZGllbnREaXJlY3Rpb24gPT0gJ3YnKSB7XG4gIHZhciB4MiA9ICcwJSc7XG4gIHZhciB5MSA9ICcxMDAlJztcbn0gZWxzZSBpZiAoZ3JhZGllbnREaXJlY3Rpb24gPT0gJ2gnKSB7XG4gIHZhciB4MiA9ICcxMDAlJztcbiAgdmFyIHkxID0gJzAlJztcbn1cblxudmFyIGdyYWQgPSBzdmdFbGVtZW50KCdsaW5lYXJHcmFkaWVudCcsIHtpZDogJ2JnR3JhZGllbnQnLCB4MTogJzAlJywgeDI6IHgyLCB5MTogeTEsIHkyOiAnMCUnfSkuYXBwZW5kVG8oJyNtYXJrZXQtY2hhcnQgc3ZnIGRlZnMnKTtcblxuJC5lYWNoKGdyYWRpZW50U3RlcHMsIGZ1bmN0aW9uKG9mZnNldCwgY29sb3Ipe1xuICBzdmdFbGVtZW50KCdzdG9wJywgeydzdHlsZSc6J3N0b3AtY29sb3I6JytncmFkaWVudFN0ZXBzW29mZnNldF0sICdvZmZzZXQnOiBvZmZzZXR9KS5hcHBlbmRUbygnI21hcmtldC1jaGFydCBzdmcgZGVmcyAjYmdHcmFkaWVudCcpO1xufSk7XG5cblxuJCgnLmxvYWQtMjAwOScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuICBjb3VudCg2LjI1KTtcbiAgJCh0aGlzKS5hZGRDbGFzcygnbGluay0tYWN0aXZlJyk7XG59KTtcblxuJCgnLmxvYWQtMjAxMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuICBjb3VudCg3LjQwKTtcbiAgJCh0aGlzKS5hZGRDbGFzcygnbGluay0tYWN0aXZlJyk7XG59KTtcblxuJCgnLmxvYWQtMjAxMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuICBjb3VudCg4LjI1KTtcbiAgJCh0aGlzKS5hZGRDbGFzcygnbGluay0tYWN0aXZlJyk7XG59KTtcblxuJCgnLmxvYWQtMjAxNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpwqB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmNoYXJ0IC5saW5rJykucmVtb3ZlQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xuICBjb3VudCgxMC41OCk7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2xpbmstLWFjdGl2ZScpO1xufSk7XG5cbiQoJy5sb2FkLTIwMTcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKcKge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJy5jaGFydCAubGluaycpLnJlbW92ZUNsYXNzKCdsaW5rLS1hY3RpdmUnKTtcbiAgY291bnQoMTYuNTApO1xuICAkKHRoaXMpLmFkZENsYXNzKCdsaW5rLS1hY3RpdmUnKTtcbn0pO1xuXG52YXIgbnVtYmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsb3V0IHNwYW4nKSxcbiAgICB0byA9IDA7XG5cblxudmFyIGNvdW50ID0gZnVuY3Rpb24odG9OdW1iZXIpIHtcbiAgdG8gPSB0b051bWJlcjtcbiAgKHBhcnNlRmxvYXQobnVtYmVycy5pbm5lckhUTUwpIDwgdG8pID8gY291bnRVcCgpIDogY291bnREb3duKCk7XG59XG5cbnZhciBjb3VudFVwID0gZnVuY3Rpb24gKCkge1xuICBpZiAocGFyc2VGbG9hdChudW1iZXJzLmlubmVySFRNTCkgPj0gdG8pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNvdW50VXApO1xuICBudW1iZXJzLmlubmVySFRNTCA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQobnVtYmVycy5pbm5lckhUTUwpICsgMC4xKSAqIDEwMCkgLyAxMDA7XG59XG5cbnZhciBjb3VudERvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChwYXJzZUZsb2F0KG51bWJlcnMuaW5uZXJIVE1MKSA8PSB0bykge1xuICAgIHJldHVybjtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY291bnREb3duKTtcbiAgbnVtYmVycy5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKChwYXJzZUZsb2F0KG51bWJlcnMuaW5uZXJIVE1MKSAtIDAuMSkgKiAxMDApIC8gMTAwO1xufSJdLCJmaWxlIjoiY2hhcnQuanMifQ==
