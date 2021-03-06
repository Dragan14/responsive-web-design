// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

const footerText = "Dragan Stojanovski &copy; " + (new Date().getFullYear());
$("#footer > .container-fluid").html(footerText);

$(window).on("resize load", function calculateScrollPadding(e){     
    console.log('here');
    if ($(window).width() >= 265 ){
        $("html").css({"scroll-padding-top": "72px"});
    } else {
        $("html").css({"scroll-padding-top": "112px"});
    }
});