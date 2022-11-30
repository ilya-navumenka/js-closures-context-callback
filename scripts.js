//Closure example without context

// window.onload = function() {
//     let item = document.querySelector('.items .item');

//     item.onclick = activeItem;

//     function activeItem() {
//         item.classList.toggle('item-active');
//     }
// }



//Closure example from context + setInterval

window.onload = function() {
    let items = document.querySelectorAll('.items .item');

    for(i = 0; i < items.length; i++) {
        items[i].onclick = activeItem;
    }
    

    function activeItem() {
        this.classList.toggle('item-active');
    }

    setInterval(function() {
        let random = mtRand(0, items.length - 1); // setInterval sees the items variable thanks to the closure
        activeItem.call(items[random]);  //context substitution and the call method calls within the given context
    }, 500)
}

function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}




//Closure example from context and setInterval (Timer)

//1 - function
// window.onload = function() {
//     let div = document.querySelector('.items__timer .item__timer');
//     let timer = new Timer(100, div);

//     //Closure
//     //2 - function
//     setInterval(function(){
//         timer.tick();
//     }, 1000)

// }

// //ES6
// class Timer {

//     constructor(time, elem) {
//         this.time = time;
//         this.elem = elem;
//     }
//     tick() {
//         this.time--;
//         this.elem.innerHTML = this.time;
//     }
// }

//ES5

// function Timer(time, elem) {
//     this.time = time;
//     this.elem = elem;

//     this.tick = function() {
//         this.time--;
//         this.elem.innerHTML = this.time;
//     }
// }