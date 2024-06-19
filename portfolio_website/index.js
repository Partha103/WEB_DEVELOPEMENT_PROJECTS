document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    menuIcon.innerHTML = '&#9776;'; // Unicode for menu icon (hamburger icon)
    document.body.appendChild(menuIcon);

    menuIcon.addEventListener('click', function() {
        if (sidebar.style.transform === 'translateY(0%)') {
            sidebar.style.transform = 'translateY(-100%)';
        } else {
            sidebar.style.transform = 'translateY(0%)';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 830) {
            sidebar.style.transform = 'translateY(0%)';
        } else {
            sidebar.style.transform = 'translateY(-100%)';
        }
    });

    if (window.innerWidth < 830) {
        sidebar.style.transform = 'translateY(-100%)';
    }
});
