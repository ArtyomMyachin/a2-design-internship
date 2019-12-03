var sliderIndex = 0;
window.addEventListener("scroll", scrollHandle);

function toggleMenu() {
    // var openMenuButton = document.querySelector(".js-open-menu-button");
    var menu = document.querySelector(".js-main-menu");
    var main = document.querySelector(".main");
    menu.classList.toggle("opened");
    main.classList.toggle("with-menu");
}

function changeSlide(n) {
    var sliderItems = document.getElementsByClassName("slider__item");
    sliderItems[sliderIndex].classList.remove("active-picture");
    sliderIndex = (sliderIndex + n) % sliderItems.length;
    if(sliderIndex < 0) {
        sliderIndex += sliderItems.length;
    }
    sliderItems[sliderIndex].classList.add("active-picture");
}

function scrollHandle() {
    // var filtersPanel = document.querySelector(".filters");
    // var map = document.querySelector(".map");
    // if(window.scrollY >= filtersPanel.offsetTop) {
    //     filtersPanel.classList.add("fixed");
    //     map.classList.add("fixed");
    //     return;
    // }
    // filtersPanel.classList.remove("fixed");
    // map.classList.remove("fixed");
}

function showFilters() {
    var filtersPanel = document.querySelector(".filters_mobile");
    var content = document.querySelector(".active-content");
    filtersPanel.classList.add("filters-opened");
    content.classList.add("fading");
}

function hideFilters() {
    var filtersPanel = document.querySelector(".filters_mobile");
    var content = document.querySelector(".active-content");
    filtersPanel.classList.remove("filters-opened");
    content.classList.remove("fading");
}

function resetForm() {
    // var filtersMobile = document.querySelector(".filters-form_mobile");
    // filtersMobile.reset();
    // var filtersChecks = document.querySelectorAll(".filters_mobile input:c");
    // for(c in filtersChecks) {
    //     c.value = false;
    // }
}

function showMap() {
    var list = document.querySelector(".cards");
    var map = document.querySelector(".map");
    var listButton = document.querySelector(".filters__cards");
    var mapButton = document.querySelector(".filters__map");
    list.classList.remove("active-content");
    map.classList.add("active-content");
    mapButton.classList.remove("active-content-button");
    listButton.classList.add("active-content-button");
}

function showList() {
    var list = document.querySelector(".cards");
    var map = document.querySelector(".map");
    var listButton = document.querySelector(".filters__cards");
    var mapButton = document.querySelector(".filters__map");
    list.classList.add("active-content");
    map.classList.remove("active-content");
    mapButton.classList.add("active-content-button");
    listButton.classList.remove("active-content-button");
}