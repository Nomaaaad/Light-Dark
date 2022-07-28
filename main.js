const nav = document.querySelector('.nav');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const textBox = document.querySelector('.text-box')
const toggleIcon = document.querySelector('.toggle-icon');
const toggleSwitch = document.querySelector('input[type="checkbox"]');



function imageMode(color){
    img1.src = `./img/mentors_${color}.svg`
    img2.src = `./img/teammates_${color}.svg`
    img3.src = `./img/progress_${color}.svg`
}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 20%)' : 'rgb(255 255 255 / 20%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';;
    isDark ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon'):
        toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light')
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true)
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false)
    }
}

toggleSwitch.addEventListener('change', switchTheme);

(function(){
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme){
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if(currentTheme === 'dark'){
            toggleSwitch.checked = true;
            toggleDarkLightMode(true);
        }
    }
}());
