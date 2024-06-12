document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

document.addEventListener('touchstart', function(event) {
    jump();
});

function jump() {
    let helloKitty = document.getElementById('hello-kitty');
    if (!helloKitty.classList.contains('jump')) {
        helloKitty.classList.add('jump');
        setTimeout(function() {
            helloKitty.classList.remove('jump');
        }, 500);
    }
}

let isAlive = setInterval(function() {
    let helloKitty = document.getElementById('hello-kitty');
    let obstacle = document.getElementById('obstacle');

    let helloKittyTop = parseInt(window.getComputedStyle(helloKitty).getPropertyValue('bottom'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (obstacleLeft > 750 && obstacleLeft < 780 && helloKittyTop <= 50) {
        alert('Game Over!');
    }
}, 10);
