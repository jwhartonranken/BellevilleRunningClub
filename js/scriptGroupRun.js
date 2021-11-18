

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 750) {
            document.getElementById('brcNav').classList.add('fixed-top');
        }
        else {
            document.getElementById('brcNav').classList.remove('fixed-top');
        }
    });
});