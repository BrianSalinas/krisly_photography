

var gallery = document.querySelector('#galleryDESACTIVATED');
/*
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};

gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        //console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});

window.addEventListener('resize', resizeAll);
*/
gallery.querySelectorAll('.gallery-itemDESACTIVATED').forEach(function (item) {
    item.addEventListener('click', function (e) {   
        e.preventDefault();
        var ubicacion = document.getElementById("imagenModal");
        var nodo = e.target;
        var clone = nodo.cloneNode(true);
        ubicacion.innerHTML = '';
        ubicacion.appendChild(clone);
        $('#exampleModal').modal('show');
        //item.classList.toggle('full');        
    });
});

