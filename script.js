// Simple Typewriter Effect
const text = "Bsc(Hons) Information Technology";
const typewriterElement = document.querySelector('.typewriter-text');
let i = 0;
function typeWriter() {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

// Scroll to lecture function
function scrollToLecture(id) {
    const element = document.getElementById(id);
    if (element) {
        const navHeight = document.querySelector('nav').offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Image viewer functions
function openImageViewer(src) {
    if (!src) return;
    const viewer = document.getElementById('imageViewer');
    const img = document.getElementById('viewedImage');
    if (viewer && img) {
        img.src = src;
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    if (viewer) {
        viewer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter
    typeWriter();

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight || 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image viewer setup
    const closeViewer = document.getElementById('closeViewer');
    const imageViewer = document.getElementById('imageViewer');
    if (closeViewer) {
        closeViewer.addEventListener('click', closeImageViewer);
    }
    if (imageViewer) {
        imageViewer.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageViewer();
            }
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageViewer();
        }
    });
});