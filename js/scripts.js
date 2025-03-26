// JS for navigation menu toggler
menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
});


// JS for footer

window.onscroll = function() {myFunction()};

var nav = document.getElementById('menu');

var sticky = nav.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
        nav.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;

    if ((scrollPosition + windowHeight) >= fullHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

// Javascript for darkmode/theme toggler

document.getElementById('themeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
