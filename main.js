let body = document.querySelector("body");
let bigArray = [];
let counter = 3;
let excludeArray = [];
let go = true;

for (let i = 0; i < 17; i++) {
	bigArray.push([]);
}

$(document).ready(function() {

  // query the PokeAPI for info about this pokemon
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649',
    success: function(data, status) {
      console.log(data);

      for (let i = 0; i < 650; i++) {

        if (go == true) {

        checkImage("footprints/" + (i + 1) + ".png", 
          // if image loads
          function() { 
            let name = data.results[i].name;
            let nameLength = name.length; // 19 is the longest

            bigArray[nameLength - 3].push([name, i + 1]);
          
            if (i == 648) {
              let bigDiv = document.createElement("div");

              for (let j = 0; j < bigArray.length - 9; j++) {
                let newTable = document.createElement("table");
                let tr = document.createElement("tr");

                tr.innerHTML = (j + 3) + " letters";

                newTable.appendChild(tr);

                for (let k = 0; k < bigArray[j].length; k++) {
                  if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
                    let tr2 = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let newImg = document.createElement("img");

                    newImg.src = "footprints/" + bigArray[j][k][1] + ".png";
                    td1.innerHTML = bigArray[j][k][0];

                    newTable.appendChild(tr2);
                    tr2.appendChild(td1);
                    tr2.appendChild(newImg);
                  }
              }

              bigDiv.appendChild(newTable);
              }

              body.appendChild(bigDiv);
            }
          }, 

          // if image does not load
          function() { console.log(i); } );

      }
    },

    error: function(req, data, status) {
      console.log("error");
    }

  });

}); // end jQuery document ready function

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}
