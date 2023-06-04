

// Mobile Menu

let menuBtn = document.querySelector('.menu-button');
let menuIcon = document.querySelector('.menu-icon');
let closeBtn = document.querySelector('.close-btn');
let mobileNav = document.querySelector('.mobile-nav')
let navBtn = document.querySelectorAll('.nav-item');
let menuActive = false;

for (i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', () =>{
        mobileNav.classList.remove('nav-active')
    })
}

if (closeBtn || menuBtn) {


    closeBtn.addEventListener('click', () => {
        if (menuActive = true) {
            menuIcon.classList.remove("icon-active");
            mobileNav.classList.remove('nav-active')
        }
    })

    menuBtn.addEventListener('click', () => {
        if (menuActive != true) {
            menuIcon.classList.add("icon-active")
            mobileNav.classList.add('nav-active')
            menuActive = true;
        } else {
            menuIcon.classList.remove('icon-active')
            mobileNav.classList.remove('nav-active')
            menuActive = false;
        }
    })
}







// Tabs Section

window.onload = function () {

        let tabsBtn = document.querySelectorAll(".project-nav-item");
        let tabsContent = document.querySelectorAll(".tabsContent");


        tabsContent[0].classList.add("active-tab");

        tabsBtn[0].classList.add("active-tab-nav");

        for (var i = 0; i < tabsBtn.length; i++) {
            tabsBtn[i].addEventListener("click", function (event) {
                var index = Array.prototype.indexOf.call(tabsBtn, event.target);
                var tabsindex = Array.prototype.indexOf.call(tabsContent, tabsContent[index]);

                for (let j = 0; j < tabsContent.length; j++) {
                    if (tabsContent[j].classList.contains("active-tab")) {
                        tabsContent[j].classList.remove("active-tab");
                        tabsBtn[j].classList.remove("active-tab-nav");
                    }
                }
                tabsContent[tabsindex].classList.add("active-tab");
                tabsBtn[tabsindex].classList.add("active-tab-nav");


                tabsContent[tabsindex].classList.add("blinking");
                setTimeout(function () {
                    tabsContent[tabsindex].classList.remove("blinking");
                }, 1000);

            });
        }


};


let paginationNav = document.querySelectorAll('.pagination-nav');

for (var a = 0; a < paginationNav.length; a++) {
    paginationNav[a].addEventListener('click', ()=> {
        window.scrollTo(500,0)
    })
}
