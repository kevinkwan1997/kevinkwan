const toggle = document.querySelector('controls__checkbox input[type="checkbox"]');

function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'default');
    }
}

this.toggle.addEventListener('change', switchTheme, false);