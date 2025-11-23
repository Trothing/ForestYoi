const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const btnContainer = document.getElementById('btnContainer');
const mainGif = document.getElementById('mainGif');
const successContainer = document.getElementById('successContainer');
const dateMsg = document.getElementById('date-msg');
const bdayMsg = document.getElementById('bday-msg');
const bdayMsg2 = document.getElementById('bday-msg2');

function moveButton() {
    const width = window.innerWidth - 100;
    const height = window.innerHeight - 100;
    const newX = Math.random() * width;
    const newY = Math.random() * height;
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

yesBtn.addEventListener('click', () => {
    question.style.display = 'none';
    btnContainer.style.display = 'none';
    successContainer.style.display = 'block';

    mainGif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmIwOTJ6dDQ5cTZncnBoZmVscDh4OHo2azFvM3hqOWY5eHEybmJsaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LML5ldpTKLPelFtBfY/giphy.gif";

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    dateMsg.style.display = 'block';

    setTimeout(() => {
        bdayMsg2.style.display = 'block';

        setTimeout(()=>{
            bdayMsg.style.display = 'block';
            mainGif.src = "https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif";
            var duration = 3000;
            var end = Date.now() + duration;
            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
            }, 1000)
    }, 1500);
});