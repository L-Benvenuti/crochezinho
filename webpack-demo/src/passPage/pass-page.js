export function passwordCheck() {
  const submitBtn = document.querySelector('button');
  submitBtn.addEventListener('click', () => {
    const passInput = document.querySelector('input');
    passInput.value === 'relaxaMama' ? alert('thats right') : alert('oopsies');
    passInput.value = '';
  });
}

export function newTabWhats() {
  const whatsapp = document.querySelector('.whatsapp');
  whatsapp.addEventListener('click', () => {
    window.open('https://wa.me/5547991502002', '_blank');
  });
}
