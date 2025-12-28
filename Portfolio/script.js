const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.getElementById('nav-overlay');
const header = document.querySelector('.main-header');
const homeContent = document.querySelector('#home .home-content');
const profilePic = document.querySelector('#home .profile-pic');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

navOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (homeContent) {
        homeContent.style.opacity = '1';
        homeContent.style.transform = 'translateY(0)';
    }
    if (profilePic) {
        profilePic.style.opacity = '1';
        profilePic.style.transform = 'translateY(0)';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});