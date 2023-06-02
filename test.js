(function () {
  var container = document.getElementById('container');
  var inner = document.getElementById('inner');
  var hoverClass = '';

  var onMouseEnterHandler = function (event) {
    var x = event.clientX - container.getBoundingClientRect().left;
    var y = event.clientY - container.getBoundingClientRect().top;
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var hoverX = x < containerWidth / 2 ? 'left' : 'right';
    var hoverY = y < containerHeight / 2 ? 'top' : 'bottom';

    hoverClass = 'hover-' + hoverX + ' ' + 'hover-' + hoverY;
    inner.classList.add(hoverClass);
  };

  var onMouseLeaveHandler = function () {
    inner.classList.remove(hoverClass);
  };

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
})();
