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

const generateContainer = (child) => {
  const container = document.createElement('td');
  container.appendChild(child);
  return container;
}

(() => {
  const adjustButton = generateAdjustButton();
  const container = generateContainer(adjustButton);
  const target = document.querySelector('#wrap-management-page > div.contents-wrap-middle > table > tbody > tr');
  target.appendChild(container);
})();
