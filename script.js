document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
}
document.addEventListener("DOMContentLoaded", function () {
    const balloonContainer = document.getElementById("balloons");

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        const colors = [
            "rgba(255, 105, 180, 2.0)",
            "rgba(255, 215, 1, 2.0)",
            "rgba(2, 191, 255, 2.0)",
            "rgba(255, 69, 3, 2.0)",
            "rgba(140, 43, 226, 2.0)"
        ];

        balloon.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
        balloon.style.left = Math.random() * (window.innerWidth - 60) + "px";
        balloonContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.style.animation = "pop 0.3s ease-out forwards";
            setTimeout(() => {
                balloon.remove();
            }, 300);
        }, 6000);
    }

    setInterval(createBalloon, 1000);
});
