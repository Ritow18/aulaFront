const cardConserto30Min = document.getElementById('cardConserto30Min');
const regrasModal = document.getElementById('regrasModal');
const closeButton = document.querySelector('.close-button');

function openModal() {
  regrasModal.style.display = 'flex'; 
}
function closeModal() {
  regrasModal.style.display = 'none';
}
if (cardConserto30Min) { 
  cardConserto30Min.addEventListener('click', openModal);
}

if (closeButton) { 
  closeButton.addEventListener('click', closeModal);
}

window.addEventListener('click', function(event) {
  if (event.target == regrasModal) {
    closeModal();
  }
});
