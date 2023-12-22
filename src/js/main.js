window.addEventListener('wheel', function(e) {
    e.preventDefault();
}, { passive: false });
let menuItemList = document.querySelectorAll(".menu-item");
menuItemList.forEach((button, i) => {
    button.addEventListener("click", function jumpCarroselPage() {
        let slideList = document.querySelectorAll(".slide");
        switch (i) {
            case 0:
                for (let i2 = 0; i2 < slideList.length; i2++) {
                    slideList[i].style.marginLeft = "0";
                }
                break;
                case 1:
                    slideList[0].style.marginLeft = "-101%";
                    break;
                case 2:
                    slideList[0].style.marginLeft = "-202%";
                    break;
                case 3:
                    slideList[0].style.marginLeft = "-303%";
                    break;
            default:
                slideList[0].style.marginLeft = "0";
                break;
        }
    })
})