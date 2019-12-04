var pageCounter = 1;
var infoContainer = document.getElementById("rez");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://linasliux.github.io/JSON/info.json');
  ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);

  renderHTML(ourData);
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 1) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
      htmlString += "<p>" + "Sveikiname, " + data[i].name + ", laimejus 69% nuolaida. Jusu nuolaidos kodas yra: " + "<b>" + data[i].code + "</b>";
      htmlString += '.</p>';
  }

  infoContainer.insertAdjacentHTML('beforeend', htmlString);
}
