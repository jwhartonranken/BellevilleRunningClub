

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.getElementById('brcNav').classList.add('fixed-top');
        }
        else {
            document.getElementById('brcNav').classList.remove('fixed-top');
        }
    });
});