let TheHimalayanTimes = document.title;

window.addEventListener("blur", () => {
  document.title = "Come back here";
});

window.addEventListener("focus", () => {
  document.title = TheHimalayanTimes;
});

let student = {
  name: "Ghokante",
  age: 15,
};
console.log(student);
