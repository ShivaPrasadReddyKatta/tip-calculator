'use strict';
const calBtn = document.querySelector('.cal');

calBtn.addEventListener('click', function () {
  const bill = Number(document.getElementById('bill').value);
  const tip = Number(document.getElementById('tip').value);
  const people = Number(document.getElementById('people').value);
  if (
    bill === '' ||
    bill <= 0 ||
    tip === '' ||
    tip <= 0 ||
    people === '' ||
    people <= 0
  ) {
    alert('Please enter valid values!');
  } else {
    const tipAmount = (bill * tip) / 100;
    const totalBill = bill + tipAmount;
    document.querySelector('.tip').textContent = (tipAmount / people).toFixed(
      2
    );
    document.querySelector('.bill').textContent = (totalBill / people).toFixed(
      2
    );
    if (people > 1) {
      document.querySelector('.pertip').style.display = 'block';
      document.querySelector('.perbill').style.display = 'block';
    }
  }
});
