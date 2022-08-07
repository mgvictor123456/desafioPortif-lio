/* Abre e fecha do menu lateral para modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
        body.classList.toggle("menu-nav-active")
});

/* Fecha menu quando clicar em alguma opção e muda icone de X para MENU */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

/* Animar todos os itens que tiverem o atributo data-anime*/

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;
    
    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
}) 