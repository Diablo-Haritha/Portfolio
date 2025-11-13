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
        document.addEventListener('DOMContentLoaded', typeWriter);

        // Mobile Menu Toggle
        function toggleMenu() {
            const dropdown = document.getElementById('dropdown');
            dropdown.classList.toggle('active');
        }

        // Scroll to lecture function
        function scrollToLecture(id) {
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Image viewer functions
        function openImageViewer(src) {
            const viewer = document.getElementById('imageViewer');
            const img = document.getElementById('viewedImage');
            
            img.src = src;
            viewer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeImageViewer() {
            const viewer = document.getElementById('imageViewer');
            viewer.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close image viewer
        document.addEventListener('DOMContentLoaded', () => {
            // Add smooth scrolling for all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
            
            // Close image viewer
            document.getElementById('closeViewer').addEventListener('click', closeImageViewer);
            document.getElementById('imageViewer').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeImageViewer();
                }
            });
            
            // Close with ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeImageViewer();
                }
            });
        });
