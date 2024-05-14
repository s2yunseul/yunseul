document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('proposalMessage').style.display = 'block';
});

document.getElementById('proposalMessage').addEventListener('click', function() {
    this.style.display = 'none';
});