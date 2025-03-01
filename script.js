 // Loader Animation
 document.addEventListener('DOMContentLoaded', function() {
    // Animate each letter with delay
    const logoLetters = document.querySelectorAll('.logo-animation span');
    logoLetters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Hide loader after 3 seconds
    setTimeout(() => {
      const loader = document.querySelector('.loader-container');
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 3000);
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  });