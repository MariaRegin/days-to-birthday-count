const dateOfBirthInput = document.getElementById("date");
const submitDateButton = document.getElementById("button");
const daysToBirthday = document.getElementById("days-to-birthday");

function calcDaysToBirthday() {
  let dateOfBirtValue = dateOfBirthInput.value;
  const date = new Date();
  const daysDiffMilleseconds = new Date(dateOfBirtValue) - date;
  const daysDiff = Math.ceil(daysDiffMilleseconds / (1000 * 60 * 60 * 24));
  let result;

  if (dateOfBirtValue === "") {
    result = "Выберите дату";
  } else if (daysDiff < 0) {
    result = "Выберите будущую дату";
  } else if (daysDiff == 0 || (daysDiff >= 5 && daysDiff <= 20)) {
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
  } else {
    result = `До дня рождения осталось ${daysDiff} дней`;
  }

  daysToBirthday.textContent = result;
  dateOfBirthInput = "";
}

submitDateButton.addEventListener("click", calcDaysToBirthday);
