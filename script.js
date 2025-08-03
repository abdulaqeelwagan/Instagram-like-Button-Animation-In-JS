let imageContainer = document.getElementById("mainImg");
let heartIcon = document.querySelector("#like i");

imageContainer.addEventListener("dblclick", () => {
    heartIcon.style.transform = "translate(-50%, -50%) scale(2)";
    heartIcon.style.opacity = 1.0;
 


    setTimeout(() => {
        heartIcon.style.opacity = 0;
    }, 3000);

    setTimeout(() => {
        heartIcon.style.transform = "translate(-50%, -50%) scale(0)";
    }, 3000);
});
