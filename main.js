let progress = 113;
let body = document.querySelector("body");
let spanRef = document.getElementById("clipboard_notification");
let bigArray = [];
let counter = 3;
let excludeArray = [];
let badNumArray = [10, 11, 13, 14, 16, 21, 23, 24, 29, 32, 41, 49, 50, 51, 70, 71, 72, 73, 74, 86, 88, 87, 90, 89, 91, 92, 93, 95, 100, 101, 102, 109, 110, 116, 117, 118, 119, 120, 121, 124, 129, 130, 131, 132, 140, 147, 148, 152, 167, 169, 170, 171, 182, 191, 200, 201, 204, 205, 206, 208, 211, 218, 219, 222, 223, 226, 230, 247, 250, 265, 266, 268, 280, 281, 284, 311, 312, 316, 317, 318, 319, 320, 321, 325, 336, 337, 338, 339, 340, 343, 344, 347, 349, 350, 351, 353, 355, 358, 362, 363, 364, 365, 366, 367, 368, 369, 370, 378, 384, 402, 406, 412, 414, 413, 415, 416, 420, 421, 422, 423, 425, 426, 429, 436, 437, 442, 451, 452, 455, 456, 457, 458, 462, 470, 471, 474, 477, 478, 479, 480, 481, 482, 488, 489, 490, 491, 497, 507, 510, 511, 512, 513, 514, 515, 516, 517, 518, 527, 530, 535, 540, 541, 542, 543, 544, 546, 547, 548, 550, 557, 558, 559, 561, 562, 563, 564, 574, 576, 577, 578, 579, 582, 583, 584, 589, 590, 591, 592, 593, 594, 595, 596, 597, 599, 600, 601, 602, 603, 604, 605, 607, 608, 609, 615, 616, 617, 618, 632, 635, 636, 637, 641, 642, 645, 648, 650];

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

        if (badNumArray.includes(i + 1) == false) {
          let name = data.results[i].name;

          // special cases
          if (name == "mr-mime") { name = "mrmime"; }
          if (name == "mime-jr") { name = "mimejr"; }
          if (name == "deoxys-normal") { name = "deoxys"; }
          if (name == "shaymin-land") { name = "shaymin"; }
          if (name == "keldeo-ordinary") { name = "keldeo"; }
          if (name == "giratina-altered") { name = "giratina"; }
          if (name == "darmanitan-standard") { name = "darmanitan"; }

          let nameLength = name.length; // 19 is the longest

          bigArray[nameLength - 3].push([name, i + 1]);
        
          if (i == 648) {
            let bigDiv = document.createElement("div");

            for (let j = 1; j < bigArray.length - 9; j++) {
              let newTable = document.createElement("table");
              let tr = document.createElement("tr");

              tr.innerHTML = (j + 3) + " letters";

              newTable.appendChild(tr);

              for (let k = 0; k < bigArray[j].length; k++) {
                // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
                  let tr2 = document.createElement("tr");
                  let td1 = document.createElement("td");
                  let td2 = document.createElement("td");
                  let newImg = document.createElement("img");

                  if (bigArray[j][k][1] <= progress) {
                    newImg.src = "footprints_svg/" + bigArray[j][k][1] + ".svg";
                    // newImg.style.width = "40px";
                    newImg.style.height = "55px";
                    newImg.style.padding = "5px 0px";
                    newImg.setAttribute("fill", "red");
                  }

                  else {
                    newImg.src = "footprints/" + bigArray[j][k][1] + ".png";
                    newImg.style.width = "50px";
                    newImg.style.height = "50px";
                  }

                  td1.innerHTML = bigArray[j][k][0];

                  let tempInput = document.getElementById("myInput");
                  // tempInput.style.display = "none";

                  newTable.appendChild(tr2);
                  tr2.appendChild(td1);
                  tr2.appendChild(newImg);

                  let tempArray = [td1, newImg];

                  for (let i = 0; i < tempArray.length; i++) {
                    tempArray[i].onclick = function() {
                      let copyText = tempInput;
                      copyText.value = bigArray[j][k][0];

                      // select the text field
                      tempInput.style.display = "inline";
                      copyText.select();
                      // copyText.setSelectionRange(0, 99999); // for mobile devices*/

                      // copy the text inside the text field
                      document.execCommand("copy");
                      // tempInput.style.display = "none";

                      spanRef.style.paddingLeft = "15px";
                      spanRef.innerHTML = "COPIED TO CLIPBOARD: " + copyText.value;

                      if (i == 0) {
                        tempArray[i].style.opacity = "1";
                        tempArray[i + 1].style.opacity = "1";
                      }

                      else if (i == 1) {
                        tempArray[i - 1].style.opacity = "1";
                        tempArray[i].style.opacity = "1";
                      }
                    }

                    tempArray[i].onmouseover = function() {
                      td1.style.opacity = "0.7";
                      newImg.style.opacity = "0.7";
                    }

                    tempArray[i].onmouseout = function() {
                      td1.style.opacity = "1";
                      newImg.style.opacity = "1";
                    }
                  }
              }

              bigDiv.appendChild(newTable);
            }

            body.appendChild(bigDiv);
          }
        }
      }
    },

    error: function(req, data, status) {
      console.log("error");
    }

  });

});
