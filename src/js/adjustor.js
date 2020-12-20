const adjustSchedule = (e) => {
  const selector = 'td.edit div.editable input[type=text], td.edit div.editable textarea';
  fields = document.querySelectorAll(selector);
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

const generateAdjustButton = () => {
  const adjustButton = document.createElement('div');
  adjustButton.classList.add('ml-1');
  adjustButton.classList.add('btn');
  adjustButton.classList.add('jbc-btn-outline-primary');
  adjustButton.innerText = '休憩時間調整';
  adjustButton.addEventListener('click', adjustSchedule);
  return adjustButton;
}

(() => {
  const adjustButton = generateAdjustButton();
  const parent = document.querySelector('#search-result > form > div.card-header.jbc-card-header.d-flex.justify-content-between > div:nth-child(2)');
  const reference = document.querySelector('#search-result > form > div.card-header.jbc-card-header.d-flex.justify-content-between > div:nth-child(2) > div');
  parent.insertBefore(adjustButton, reference);
})();
