function navscroll() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.querySelector("nav").classList.add("nav-background") : document.querySelector("nav").classList.remove("nav-background"), document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? document.getElementById("back_to_top").style.opacity = "1" : document.getElementById("back_to_top").style.opacity = "0"
 }
 AOS.init();
 function animateCounters(counter) {
    const target = +counter.getAttribute('data-target');
    
    const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / 200; // Adjust this value to slow down the increment (higher value = slower)

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 14); // Increase this delay (in milliseconds) for slower counting
        } else {
            counter.innerText = target; // Ensure the final value is set correctly
        }
    };

    updateCount();
}

// Function to create the IntersectionObserver
function observeCounters() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        root: null, // The viewport
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters(entry.target); // Run the counter animation
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter); // Observe each counter
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', observeCounters);

  