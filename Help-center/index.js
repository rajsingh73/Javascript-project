        function sendemailto(event){
            event.preventDefault();
            let vari = {
                name: document.getElementById("name").value.trim(),
                category: document.getElementById("category").value,
                course: document.getElementById("subject").value.trim(),
                email: document.getElementById("email").value.trim(),
                message: document.getElementById("description").value.trim()
            };
            if (!vari.name || !vari.category || !vari.course || !vari.email || !vari.message) {
                alert("Please fill in all the fields.");
                return;
            }
            emailjs.send("service_zhxtrit", "template_2zw1yra", vari).then(() => {
                alert('Your query has been submitted successfully.');
                document.querySelector("form").reset();
            }).catch(error => {
                alert('There was an error submitting your request. Please try again.');
                console.error('EmailJS error:', error);
            });
        }
        // Enhanced carousel functionality with circular looping
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        const carouselInner = document.querySelector('.carousel-inner');
        function showSlide(index) {
            // For circular looping, when we reach the end, smoothly transition to first slide
            if (index >= totalSlides) {
                // Option 1: Simply reset to the first slide
                currentSlide = 0;
            } else {
                // Normal forward progression
                currentSlide = index;
            }
            // Apply the transformation
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        // Auto slide the carousel every 3 seconds - always moving forward
        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
        // Fix for iOS Safari overflow issues
        document.addEventListener('DOMContentLoaded', function() {
            if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
                document.body.style.height = 'calc(100% + 1px)';
                setTimeout(function() {
                    document.body.style.height = '100%';
                }, 1000);
            }
        });