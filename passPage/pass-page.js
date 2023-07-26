export const passwordCheck = function () {
  const submitBtn = document.querySelector('button');
  submitBtn.addEventListener('click', () => {
    const passInput = document.querySelector('input');
    passInput.value === 'relaxaMama' ? alert('thats right') : alert('oopsies');
    passInput.value = '';
  });
};

export const newTabWhats = function () {
  const whatsapp = document.getElementsByClassName('whatsapp');
  whatsapp.addEventListener('click', () => {
    window.open('https://wa.me/5547991502002', '_blank');
  });
};
