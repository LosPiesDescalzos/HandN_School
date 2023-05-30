let swiper = new Swiper(".mySwiper", { //объявляем
    slidesPerView: 3, //количество картинок в div
    spaceBetween: 0, //расстояние между ними
    loop: true, //навигация
    pagination: { //круглые
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});