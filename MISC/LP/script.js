const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

console.log(primaryNav)

navToggle.addEventListener("click", ()=> {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false")
    {
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    } else if(visibility === "true")
    {
        primaryNav.setAttribute('data-visible',false)
        navToggle.setAttribute('aria-expanded',false);
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector('.logo');
    const textUnderLogo = document.createElement('p');
    textUnderLogo.classList.add('text-under-logo');
    logo.parentNode.insertBefore(textUnderLogo, logo.nextSibling);

    const images = document.querySelectorAll('.container img');
    const logoText = document.querySelector('.text-under-logo');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const imageText = image.getAttribute('alt');
            logoText.textContent = imageText;
            logoText.style.display = 'block';
        });

        image.addEventListener('mouseleave', () => {
            logoText.style.display = 'none';
        });
    });
});

