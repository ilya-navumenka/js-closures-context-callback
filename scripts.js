window.onload = function() {
    let items = document.querySelectorAll('.items .item');

    for(i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            fade(this, 1000, function() {
                // console.log(this);
                this.style.display = 'none';
            }); //call function fade()
        }
    }
}

//Animation
function fade(elem, t, f) { //Callback (t) - this is what the function should additionally do after executing the code
    let fps = 50;
    let time = t || 500;
    let steps = time / fps;
    let op = 1;
    let d0 = op / steps;

    let callback = f || function(){}; //1-callback

    let timer = setInterval(function () {
        op -= d0;
        elem.style.opacity = op;
        steps--;

        if(steps === 0) {
            clearInterval(timer);
            // callback(); //context window!!!
            callback.call(elem); //2-callback, call after completion setInterval and call() - context this!!!
        }
    }, (1000 / fps));
}