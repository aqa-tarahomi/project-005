function navscroll() {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? document.querySelector("nav").classList.add("nav-background") : document.querySelector("nav").classList.remove("nav-background"), document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? document.getElementById("back_to_top").style.opacity = "1" : document.getElementById("back_to_top").style.opacity = "0"
 }
 AOS.init();
 // Function to animate the count
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = target / 200; // You can adjust this value to change the speed
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 10); // Adjust the interval for faster/slower counting
        } else {
          counter.innerText = target; // Ensure the final value is set correctly
        }
      };
      updateCount();
    });
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', animateCounters);
  