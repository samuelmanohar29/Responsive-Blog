// script.js
// Toggle Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Toggle Sidebar
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

