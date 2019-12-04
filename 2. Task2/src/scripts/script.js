var sliderIndex = 0;
window.addEventListener("scroll", scrollHandle);

function toggleMenu() {
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
    var filtersPanel = document.querySelector(".filters");
    var filters = document.querySelector(".filters-main-wrap");
    var map = document.querySelector(".map");
    if(window.scrollY >= filtersPanel.offsetTop) {
        filters.classList.add("filters-fixed");
        map.classList.add("map-fixed");
        return;
    }
    filters.classList.remove("filters-fixed");
    map.classList.remove("map-fixed");
}

function showFilters() {
    var filtersPanel = document.querySelector(".filters_mobile");
    var fade = document.querySelector(".fade-block");
    filtersPanel.classList.add("filters-opened");
    fade.classList.add("fade-open");
}

function hideFilters() {
    var filtersPanel = document.querySelector(".filters_mobile");
    var fade = document.querySelector(".fade-block");
    filtersPanel.classList.remove("filters-opened");
    fade.classList.remove("fade-open");
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