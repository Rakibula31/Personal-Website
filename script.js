document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('projectToggle');
    const projectsSection = document.getElementById('projectsSection');
    const toggleText = document.querySelector('.toggle-text');

    toggle.addEventListener('change', function() {
        if (this.checked) {
            projectsSection.classList.remove('hidden');
            toggleText.textContent = 'Hide Projects';
        } else {
            projectsSection.classList.add('hidden');
            toggleText.textContent = 'Show Projects';
        }
    });
});
