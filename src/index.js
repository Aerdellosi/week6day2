import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getDinoName() {
  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&words=1&paragraphs=1`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
        return response;
      // printElements(response);
    } else {
        console.log(response);
      // printError(this, response, city);
    }
  });

  request.open("GET", url);
  request.send();
}


window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("click", getDinoName);
});