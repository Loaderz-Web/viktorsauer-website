function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}
function showBeute() {
    document.getElementById('beuteModal').classList.add('show');
}
function showGrimm() {
    document.getElementById('grimmModal').classList.add('show');
}
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}
// Optional: Schließe Modal mit ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
    }
});

// Copyright Year Auto-Update
const startYear = 2025;
const currentYear = new Date().getFullYear();
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
    copyrightEl.textContent = currentYear > startYear 
        ? `${startYear}-${currentYear}` 
        : startYear;
}
