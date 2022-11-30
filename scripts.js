window.onload = function() {
    let item = document.querySelector('.items .item');

    item.onclick = activeItem;
}

function activeItem() {
    this.classList.toggle('item-active');
}