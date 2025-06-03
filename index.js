// let khai báo bình thường
// const là hằng số thường ko thay đổi 
// var có cơ chế là hosting, thường khai báo lên đầu
document.addEventListener("DOMContentLoaded",function(){
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barsIcon = document.getElementById("bars-icon");
    let closeIcon = document.getElementById("close-icon");
   

    menuToggle.addEventListener("click",function() {
        //thêm class active vào mobile nav
        //Nếu đã có active thì bỏ đi, nếu chưa thì thêm vào
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            barsIcon.style.display = "none";
            barsIcon.style.display = "block";

        }else{
            barsIcon.style.display = "block";
            closeIcon
        }
    });
});