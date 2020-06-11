document.body.ondragstart = function() {
    return false;
    }
  let zCount = 1;
  document.body.onmousedown = function(event) {
    event.preventDefault();
    if (!event.target.matches('.card')) return;
    let eventCoords = event.target.getBoundingClientRect();
    let eventX = eventCoords.left,
        eventY = eventCoords.top,
        shiftX = event.clientX - eventCoords.left,
        shiftY = event.clientY - eventCoords.top;
    event.target.style.position = 'absolute';
    event.target.style.zIndex = 1000;
    event.target.style.left = eventX + 'px';
    event.target.style.top = eventY + window.pageYOffset + 'px';
    let currentElement = event.target;
    if (!currentElement.style.zIndex) {
        currentElement.style.zIndex = zCount;
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
 
    function onMouseMove(event) {
        let newLeft = event.pageX - shiftX,
            newTop = event.pageY - shiftY;
        if (newLeft + currentElement.clientWidth > document.documentElement.clientWidth) {
            newLeft = document.documentElement.clientWidth - currentElement.offsetWidth;
        }
        if (newLeft <= 0) newLeft = 0;
 
        if (newTop <= 0 + window.pageYOffset) {
            window.scrollBy(0, -10);
            newTop = 0 + window.pageYOffset;
        }
        if (newTop + currentElement.offsetHeight > document.documentElement.clientHeight + window.pageYOffset) {
            newTop = document.documentElement.clientHeight - currentElement.offsetHeight + window.pageYOffset;
            window.scrollBy(0, 10);
        }
        currentElement.style.left = newLeft + 'px';
        currentElement.style.top = newTop + 'px';
    }
 
    function onMouseUp(event) {
        zCount++;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
   
   
  };
  /*ТРЕТЬЯ ПОПЫТКА РЕАЛИЗОВАТЬ ДРАГ-СКРИПТ (САМОЙ УДАЧНОЙ ПОПЫТКОЙ БЫЛА 2 ПОПЫТКА)*/


