const dateOfBirthInput = document.getElementById("date");
const submitDateButton = document.getElementById("button");
const daysToBirthday = document.getElementById("days-to-birthday");

function calcDaysToBirthday() {
  let dateOfBirtValue = dateOfBirthInput.value;
  console.log(dateOfBirtValue);
  const date = new Date();
  const daysDiffMilleseconds = new Date(dateOfBirtValue) - date;
  const daysDiff = Math.ceil(daysDiffMilleseconds / (1000 * 60 * 60 * 24));
  let result;
  if (daysDiff == 0 || (daysDiff >= 5 && daysDiff <= 20)) {
    result = `До дня рождения осталось ${daysDiff} дней`;
  } else if (daysDiff == 1 || daysDiff % 10 == 1) {
    result = `До дня рождения остался ${daysDiff} день`;
  } else if (
    (daysDiff >= 2 && daysDiff <= 4) ||
    daysDiff % 10 == 2 ||
    daysDiff % 10 == 3 ||
    daysDiff % 10 == 4
  ) {
    result = `До дня рождения осталось ${daysDiff} дня`;
  } else if (isNaN(dateOfBirthInput)) {
    result = "Выберите дату";
  } else {
    result = `До дня рождения осталось ${daysDiff} дней`;
  }

  daysToBirthday.textContent = result;
  dateOfBirtValue = "";
}

submitDateButton.addEventListener("click", calcDaysToBirthday);
