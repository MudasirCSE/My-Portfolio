// For Typing :
let typed = new Typed(".text", {
    strings: ["Front-End Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10,
    loop: true
});




// Header Scroll
const header = document.querySelector("header");
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);


// Side Bar:

const sideshow = document.querySelector(".fa-bars");
sideshow.addEventListener('click', () => {
    // Toggle the icon between 'fa-bars' and 'fa-times'
    sideshow.classList.toggle("fa-bars");
    sideshow.classList.toggle("fa-times");

    // Toggle the navbar visibility
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbar-toggle");

    // Click on Links Remove Navbar:

    const navLinks = document.querySelectorAll('.navbar .nav-link');
    // Handle link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor behavior
            event.preventDefault();

            // Get the target section ID
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the navbar if on mobile
            if (window.innerWidth <= 768) {
                navbar.classList.remove('navbar-toggle');
                sideshow.classList.remove('fa-times');
                sideshow.classList.add('fa-bars')
            }
        });
    });
});


// Sun Moon Icon:
let moonIcon;
let sunIcon;
document.addEventListener('DOMContentLoaded', function () {
    moonIcon = document.querySelector(".Dark-Bright").getElementsByTagName("i")[0];
    sunIcon = document.querySelector(".Dark-Bright").getElementsByTagName("i")[1];
    // Html Body Color Changing:
    let HtmlBodyColor = document.querySelector("body");
    // Function to toggle icons
    function toggleIcons() {
        if (moonIcon.style.display === 'none') {
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
            HtmlBodyColor.style.background = "white";
            HtmlBodyColor.style.color = "black";
        } else {
            HtmlBodyColor.style.background = "#1c2841";
            HtmlBodyColor.style.background = "black";
            HtmlBodyColor.style.color = "white";
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        }
        updateInputColors()
        updateTextareaColor()
    }
// For input text color change when anything typed:

    const input = document.querySelector("form").getElementsByTagName('input');
    const textarea = document.querySelector("form").getElementsByTagName('textarea')[0];
    function updateInputColors() {
        Array.from(input).forEach(input => {
            if (HtmlBodyColor.style.backgroundColor === 'black') {
                input.style.color = 'white';
            } else {
                input.style.color = 'black';
            }
        });
    }
    function updateTextareaColor(){
        if(HtmlBodyColor.style.backgroundColor === 'black'){
            textarea.style.color = 'white'
        }else{
            textarea.style.color = 'black'
        }
    }
   
    // Add click event listener to the container
    document.querySelector(".Dark-Bright").addEventListener('click', toggleIcons);
});
