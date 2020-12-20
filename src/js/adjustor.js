const adjustSchedule = (e) => {
  const selector = 'td div.editable input[type=text], td div.editable textarea';
  const fields = document.querySelectorAll(selector);
  let i = 0;
  while (i < fields.length) {
    if (fields[i + 4].value == "01:30") {
      fields[i + 4].value = "01:00";
      fields[i + 5].value = "30 分休憩なし";
      fields[i + 4].style.backgroundColor = "#FF0";
      fields[i + 5].style.backgroundColor = "#FF0";
    }
    i += 6;
  }
}

const generateAdjusterButton = () => {
  const adjusterButton = document.createElement('div');
  adjusterButton.classList.add('ml-1');
  adjusterButton.classList.add('btn');
  adjusterButton.classList.add('jbc-btn-outline-primary');
  adjusterButton.innerText = '休憩時間調整';
  adjusterButton.addEventListener('click', adjustSchedule);
  return adjusterButton;
}

(() => {
  const adjusterButton = generateAdjusterButton();
  const parent = document.querySelector('#search-result > form > div.card-header.jbc-card-header.d-flex.justify-content-between > div:nth-child(2)');
  const reference = document.querySelector('#search-result > form > div.card-header.jbc-card-header.d-flex.justify-content-between > div:nth-child(2) > div');
  parent.insertBefore(adjusterButton, reference);
})();
