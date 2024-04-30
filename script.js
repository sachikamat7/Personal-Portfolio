const projects = document.getElementById('project');
const load_btn = document.getElementById('load-more');
const main_cont = document.querySelector('main');
const header_cont = document.querySelector('header');
const home_section = document.getElementById('home');
const project_section = document.getElementById('projects');
const contact_section = document.getElementById('contact');
const back_btn = document.getElementById('back');

const projectData = [
    {
        title: 'Rock Paper Scissors Game',
        src: 'https://rock-paper-scissor-online.netlify.app',
        imgSrc: 'images/sps.jpg',
    },
    {
        title: 'Music Player',
        src:'https://pulseplayer.netlify.app',
        imgSrc: 'images/mp.jpg',
    },
    {
        title: 'Calorie Counter',
        src:'https://caloriecheckup.netlify.app',
        imgSrc: 'images/cc.jpg',
    
    },
    {
        title: 'Role Playing Game',
        src:'https://dragon-guard.netlify.app',
        imgSrc: 'images/rpg.jpg',
    
    },
    {
        title: 'ToDo',
        src:'https://list-it-do-it.netlify.app',
        imgSrc: 'images/td.jpg',
    },
];

const allProjects = [
    {
        title: 'Rock Paper Scissors Game',
        src: 'https://rock-paper-scissor-online.netlify.app',
        imgSrc: 'images/sps.jpg',
    },
    {
        title: 'Music Player',
        src:'https://pulseplayer.netlify.app',
        imgSrc: 'images/mp.jpg',
    },
    {
        title: 'Calorie Counter',
        src:'https://caloriecheckup.netlify.app',
        imgSrc: 'images/cc.jpg',
    
    },
    {
        title: 'Role Playing Game',
        src:'https://dragon-guard.netlify.app',
        imgSrc: 'images/rpg.jpg',
    
    },
    {
        title: 'ToDo',
        src:'https://list-it-do-it.netlify.app',
        imgSrc: 'images/td.jpg',
    },
]

const showData = (projectData) => {

    const projectHTML = projectData.map((data)=> {
        return `
            <a class="project" id="project-${data.title}" href="${data.src}" target ="_blank">
                <p id="p-${data.title}">${data.title}</p>
                
            </a>
        `;
    }).join('');
    projects.innerHTML = projectHTML;
    projectData.map((data)=> {
        document.getElementById(`project-${data.title}`).style.backgroundImage = `url(${data.imgSrc})`;
        document.getElementById(`p-${data.title}`).style.backgroundColor = ' rgb(203, 162, 144)';
    });
}

showData([...projectData]);

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Use smooth scrolling behavior
    });
  }

load_btn.addEventListener('click', () => {
    showData([...allProjects]);
    load_btn.style.display = 'none';
    header_cont.style.display = 'none';
    home_section.style.display = 'none';
    project_section.style.display = 'block';
    project_section.classList.add('project-more');
    // project_section.style.height = '100vh';
    contact_section.style.display = 'none';
    back_btn.style.display = 'block';

    const styleElement = document.createElement('style');
  
  // Define the @media CSS rules
  const mediaCSS = `
    @media screen and (min-width: 768px) {
        .projects-section {
            height:calc(100vh + 5.25rem);
        }
    }
    @media only screen and (max-width: 431px){
        .projects-section {
            
        }
    }
  `;
  
  // Set the CSS text
  styleElement.textContent = mediaCSS;
  
  // Append the style element to the document head
  document.head.appendChild(styleElement);
  event.preventDefault();
  
  // Call the function to scroll to the top of the page
  scrollToTop();

    projects.insertAdjacentHTML('afterend', backHTML);


});

back_btn.addEventListener('click', () => {
    showData([...projectData]);
    load_btn.style.display = 'block';
    header_cont.style.display = 'block';
    home_section.style.display = 'block';
    project_section.classList.remove('project-more');
    contact_section.style.display = 'block';
    back_btn.style.display = 'none';


    history.back();
});

document.addEventListener("DOMContentLoaded", function (event) {
    let outerBox = document.querySelector('.prohects-section');
    let innerBox = document.querySelector('#project');
    // multiplier is used to calculate width of inner div based on outer div, so they always look the same shape
    let multiplier = 0.8;
    function renderBox() {
    //let outerbox Dimension based on window width assuming 1500px width as base
        outerBox.style.height = window.innerWidth / 15 + 'px';
        outerBox.style.width = outerBox.style.height;
        innerBox.style.height = outerBox.offsetHeight * multiplier + 'px';
        innerBox.style.width = outerBox.offsetHeight * multiplier + 'px';
    }
    window.addEventListener("load", function (e) {
        renderBox();

    })
    window.addEventListener('resize', function (e) {
        renderBox();
    })
})

var text = "Hey, I'm Sachi";
var index = 0;

// Function to add one letter at a time to the paragraph element
function typeWriter() {
    if (index < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust the speed of typing (milliseconds)
    }
}

// Call the function to start the typewriter effect
typeWriter();