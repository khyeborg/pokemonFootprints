// program variables
let heightFactor = 4.5;
let body = document.querySelector("body");
let spanRef = document.getElementById("clipboard_notification");
let bigArray = [];
let bigArrayGeneric = [];
let bigArrayMemorized = [];
let bigArrayBirds = [];
let bigArrayHoles = [];
let bigArrayTeeny = [];
let colorArray = ["#000000", "#073763"];
let counter = 3;
let excludeArray = [];
let genericArray = [10, 13, 120, 121, 152, 197, 222, 265, 281, 311, 312, 344, 406, 420, 421, 422, 423, 470, 471, 480, 481, 482, 491, 507, 510, 511, 512, 517, 518, 530, 540, 543, 547, 558, 559, 574, 576, 595, 596, 605, 616, 636, 648];
let memorizedArray = [1, 4, 7, 9, 15, 16, 18, 19, 21, 26, 31, 46, 47, 52, 53, 56, 63, 64, 67, 69, 76, 77, 78, 81, 82, 84, 98, 99, 111, 123, 127, 137, 139, 141, 143, 150, 151, 163, 165, 168,  177, 178, 186, 193, 198, 207, 213, 214, 217, 224, 227, 229, 233, 237, 240, 246, 251, 252, 253, 254, 257, 260, 261, 262, 263, 264, 267, 269, 271, 273, 275, 283, 286, 288, 289, 290, 291, 293, 294, 295, 300, 301, 303, 305, 306, 308, 309, 310, 323, 324, 328, 329, 330, 335, 341, 342, 345, 346, 348, 352, 356, 357, 359, 374, 375, 376, 377, 379, 380, 381, 382, 383, 392, 394, 395, 396, 400, 403, 404, 441, 447, 448, 450, 453, 454, 460, 463, 469, 475, 483, 484, 485, 486, 487, 496, 503, 519, 525, 526, 536, 537, 538, 539, 549, 554, 555, 556, 565, 580, 581, 598, 612, 614, 621, 623, 627, 630, 633, 634, 643, 647];
let badNumArray = [11, 14, 23, 24, 29, 32, 41, 49, 50, 51, 70, 71, 72, 73, 74, 83, 86, 88, 87, 90, 89, 91, 92, 93, 95, 100, 101, 102, 109, 110, 116, 117, 118, 119, 122, 124, 129, 130, 131, 132, 140, 147, 148, 167, 169, 170, 171, 182, 191, 200, 201, 204, 205, 206, 208, 211, 218, 219, 223, 226, 230, 247, 250, 266, 268, 280, 284, 316, 317, 318, 319, 320, 321, 325, 336, 337, 338, 339, 340, 343, 347, 349, 350, 351, 353, 355, 358, 362, 363, 364, 365, 366, 367, 368, 369, 370, 378, 384, 402, 412, 414, 413, 415, 416, 422, 423, 425, 426, 429, 436, 437, 439, 442, 451, 452, 455, 456, 457, 458, 462, 474, 477, 478, 479, 488, 489, 490, 497, 513, 514, 515, 516, 527, 535, 541, 542, 544, 546, 548, 550, 557, 561, 562, 563, 564, 577, 578, 579, 582, 583, 584, 585, 586, 589, 590, 591, 592, 593, 594, 597, 599, 600, 601, 602, 603, 604, 607, 608, 609, 615, 617, 618, 632, 635, 637, 641, 642, 645, 650];
let birdsArray = [17, 22, 85, 144, 145, 146, 164, 255, 256, 276, 277, 334, 430, 520, 521];
let holesArray = [36, 37, 38, 106, 108, 133, 136, 161, 162, 175, 187, 272, 299, 327, 418, 427, 431, 432, 446, 523, 531];
let teenyArray = [43, 138, 173, 179, 282, 315, 331, 354, 385, 386, 407, 493, 495, 529, 568, 588];

for (let i = 0; i < 17; i++) {
	bigArray.push([]);
	bigArrayGeneric.push([]);
	bigArrayMemorized.push([]);
	bigArrayBirds.push([]);
	bigArrayHoles.push([]);
	bigArrayTeeny.push([]);
}

let activeColor = "lightblue";
let hoverColor = "lightblue";

// get references 
let tabsArray = document.getElementsByClassName("tab");
let tabsBackgroundColorArray = ["#153243", "#00747A", "#754668", "#4B5850", "#800F20", "#20124D"];
let pageArray = document.getElementsByClassName("page");
let specializedPage = document.getElementById("specialized_page");
let genericPage = document.getElementById("generic_page");
let memorizedPage = document.getElementById("memorized_page");
let birdsPage = document.getElementById("birds_page");
let holesPage = document.getElementById("holes_page");
let teenyPage = document.getElementById("teeny_page");

// add event listeners to tabs
for (let i = 0; i < tabsArray.length; i++) {
  // add background color
  tabsArray[i].style.backgroundColor = tabsBackgroundColorArray[i];

  if (tabsArray[i].classList.contains("active")) {
    tabsArray[i].style.backgroundColor = activeColor;
  }

  tabsArray[i].onclick = function() {
    for (let j = 0; j < pageArray.length; j++) {
      if (i == j) {
        pageArray[j].style.display = "block";
        tabsArray[j].classList.add("active");
      }

      else {
        pageArray[j].style.display = "none";
        tabsArray[j].classList.remove("active");
      }

      if (tabsArray[j].classList.contains("active")) {
        tabsArray[j].style.backgroundColor = activeColor;
      }

      else {
        tabsArray[j].style.backgroundColor = tabsBackgroundColorArray[j];
      }
    }
  }

  tabsArray[i].onmouseover = function() {
    tabsArray[i].style.backgroundColor = hoverColor;
  }

  tabsArray[i].onmouseout = function() {
    if (tabsArray[i].classList.contains("active")) {
      tabsArray[i].style.backgroundColor = activeColor;
    }

    else {
      tabsArray[i].style.backgroundColor = tabsBackgroundColorArray[i];
    }
  }
}

// construct the specialized page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (badNumArray.includes(i + 1) == false && genericArray.includes(i + 1) == false && memorizedArray.includes(i + 1) == false && birdsArray.includes(i + 1) == false && holesArray.includes(i + 1) == false && teenyArray.includes(i + 1) == false) {
    let name = pokedex[i].name.english.toLowerCase();
    let nameLength = name.length;
    bigArray[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv = document.createElement("div");

for (let j = 1; j < bigArray.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArray[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
      let tr2 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let tempDiv = document.createElement("div");
      let newImg = document.createElement("img");

      let pokeID = bigArray[j][k][1];

      newImg.src = "footprints_svg/" + pokeID + ".svg";

      // scalable height
      let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
      newImg.style.height = scalableHeight + "px";

      // safeguard
      if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
        console.log(pokedex[pokeID - 1].name.english, "error");
      }

      td1.innerHTML = bigArray[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

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
          td1.style.opacity = "0.5";
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

specializedPage.style.display = "block";
specializedPage.appendChild(bigDiv);

// construct the generic page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (badNumArray.includes(i + 1) == false && genericArray.includes(i + 1)) {
    let name = pokedex[i].name.english.toLowerCase();
    let nameLength = name.length;
    bigArrayGeneric[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv2 = document.createElement("div");

for (let j = 1; j < bigArrayGeneric.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArrayGeneric[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
	  let tr2 = document.createElement("tr");
	  let td1 = document.createElement("td");
	  let td2 = document.createElement("td");
	  let tempDiv = document.createElement("div");
	  let newImg = document.createElement("img");

	  let pokeID = bigArrayGeneric[j][k][1];

	  newImg.src = "generic_footprints/" + pokeID + ".svg";

	  // scalable height
	  let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
	  newImg.style.height = scalableHeight + "px";

	  // safeguard
	  if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
	    console.log(pokedex[pokeID - 1].name.english, "error");
	  }

      td1.innerHTML = bigArrayGeneric[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

      let tempArray = [td1, newImg];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].onclick = function() {
          let copyText = tempInput;
          copyText.value = bigArrayGeneric[j][k][0];

          // select the text field
          tempInput.style.display = "inline";
          copyText.select();
          // copyText.setSelectionRange(0, 99999); // for mobile devices*/

          // copy the text inside the text field
          document.execCommand("copy");
          // tempInput.style.display = "none";
          
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
          td1.style.opacity = "0.5";
          newImg.style.opacity = "0.7";
        }

        tempArray[i].onmouseout = function() {
          td1.style.opacity = "1";
          newImg.style.opacity = "1";
        }
      }
  }

  bigDiv2.appendChild(newTable);
}

// genericPage.style.display = "block";
genericPage.appendChild(bigDiv2);

// construct the memorized page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (memorizedArray.includes(i + 1)) {
    let name = pokedex[i].name.english.toLowerCase();   
    let nameLength = name.length;
    bigArrayMemorized[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv3 = document.createElement("div");

for (let j = 1; j < bigArrayMemorized.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArrayMemorized[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
      let tr2 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let tempDiv = document.createElement("div");
      let newImg = document.createElement("img");

      let pokeID = bigArrayMemorized[j][k][1];

      newImg.src = "memorized_footprints/" + pokeID + ".svg";

      // scalable height
      let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
      newImg.style.height = scalableHeight + "px";

      // safeguard
      if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
        console.log(pokedex[pokeID - 1].name.english, "error");
      }

      td1.innerHTML = bigArrayMemorized[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

      let tempArray = [td1, newImg];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].onclick = function() {
          let copyText = tempInput;
          copyText.value = bigArrayMemorized[j][k][0];

          // select the text field
          tempInput.style.display = "inline";
          copyText.select();
          // copyText.setSelectionRange(0, 99999); // for mobile devices*/

          // copy the text inside the text field
          document.execCommand("copy");
          // tempInput.style.display = "none";
          
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
          td1.style.opacity = "0.5";
          newImg.style.opacity = "0.7";
        }

        tempArray[i].onmouseout = function() {
          td1.style.opacity = "1";
          newImg.style.opacity = "1";
        }
      }
  }

  bigDiv3.appendChild(newTable);
}

// memorizedPage.style.display = "block";
memorizedPage.appendChild(bigDiv3);

// construct the birds page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (birdsArray.includes(i + 1)) {
    let name = pokedex[i].name.english.toLowerCase();
    let nameLength = name.length;
    bigArrayBirds[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv4 = document.createElement("div");

for (let j = 1; j < bigArrayBirds.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArrayBirds[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
      let tr2 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let tempDiv = document.createElement("div");
      let newImg = document.createElement("img");

      let pokeID = bigArrayBirds[j][k][1];

      newImg.src = "birds_footprints/" + pokeID + ".svg";

      // scalable height
      let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
      newImg.style.height = scalableHeight + "px";

      // safeguard
      if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
        console.log(pokedex[pokeID - 1].name.english, "error");
      }

      td1.innerHTML = bigArrayBirds[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

      let tempArray = [td1, newImg];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].onclick = function() {
          let copyText = tempInput;
          copyText.value = bigArrayBirds[j][k][0];

          // select the text field
          tempInput.style.display = "inline";
          copyText.select();
          // copyText.setSelectionRange(0, 99999); // for mobile devices*/

          // copy the text inside the text field
          document.execCommand("copy");
          // tempInput.style.display = "none";
          
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
          td1.style.opacity = "0.5";
          newImg.style.opacity = "0.7";
        }

        tempArray[i].onmouseout = function() {
          td1.style.opacity = "1";
          newImg.style.opacity = "1";
        }
      }
  }

  bigDiv4.appendChild(newTable);
}

// memorizedPage.style.display = "block";
birdsPage.appendChild(bigDiv4);

// construct the holes page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (holesArray.includes(i + 1)) {
    let name = pokedex[i].name.english.toLowerCase();
    let nameLength = name.length;
    bigArrayHoles[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv5 = document.createElement("div");

for (let j = 1; j < bigArrayHoles.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArrayHoles[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
      let tr2 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let tempDiv = document.createElement("div");
      let newImg = document.createElement("img");

      let pokeID = bigArrayHoles[j][k][1];

      newImg.src = "holes_footprints/" + pokeID + ".svg";

      // scalable height
      let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
      newImg.style.height = scalableHeight + "px";

      // safeguard
      if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
        console.log(pokedex[pokeID - 1].name.english, "error");
      }

      td1.innerHTML = bigArrayHoles[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

      let tempArray = [td1, newImg];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].onclick = function() {
          let copyText = tempInput;
          copyText.value = bigArrayHoles[j][k][0];

          // select the text field
          tempInput.style.display = "inline";
          copyText.select();
          // copyText.setSelectionRange(0, 99999); // for mobile devices*/

          // copy the text inside the text field
          document.execCommand("copy");
          // tempInput.style.display = "none";
          
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
          td1.style.opacity = "0.5";
          newImg.style.opacity = "0.7";
        }

        tempArray[i].onmouseout = function() {
          td1.style.opacity = "1";
          newImg.style.opacity = "1";
        }
      }
  }

  bigDiv5.appendChild(newTable);
}

// memorizedPage.style.display = "block";
holesPage.appendChild(bigDiv5);

// construct the teeny page
for (let i = 0; i < 650; i++) {

  // if the pokemon has a valid footprint
  if (teenyArray.includes(i + 1)) {
    let name = pokedex[i].name.english.toLowerCase();
    let nameLength = name.length;
    bigArrayTeeny[nameLength - 3].push([name, i + 1]);
  }
}

let bigDiv6 = document.createElement("div");

for (let j = 1; j < bigArrayTeeny.length - 9; j++) {
  let newTable = document.createElement("table");

  if (j == 1) {
    newTable.classList.add("responsive_hide");
  }

  let tr = document.createElement("td");

  // tr styling + class
  tr.innerHTML = j + 3;
  tr.style.fontSize = "40px";
  tr.style.fontWeight = "bold";
  tr.style.color = "white";
  tr.classList.add("sticky");

  if (j % 2 == 0) {
    tr.style.backgroundColor = colorArray[1];
  }

  else {
    tr.style.backgroundColor = colorArray[0];
  }

  newTable.appendChild(tr);

  for (let k = 0; k < bigArrayTeeny[j].length; k++) {
    // if (bigArray[j][k][0].indexOf("-") == -1 && bigArray[j][k][0].indexOf("shellos") == -1 && bigArray[j][k][0].indexOf("gastrodon") == -1) {
      let tr2 = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let tempDiv = document.createElement("div");
      let newImg = document.createElement("img");

      let pokeID = bigArrayTeeny[j][k][1];

      newImg.src = "teeny_footprints/" + pokeID + ".svg";

      // scalable height
      let scalableHeight = pokedex[pokeID - 1].footprint_height * heightFactor;
      newImg.style.height = scalableHeight + "px";

      // safeguard
      if (badNumArray.includes(pokeID) == false && pokedex[pokeID - 1].footprint_height == undefined) {
        console.log(pokedex[pokeID - 1].name.english, "error");
      }

      td1.innerHTML = bigArrayTeeny[j][k][0];

      let tempInput = document.getElementById("myInput");
      // tempInput.style.display = "none";

      newTable.appendChild(tr2);
      tr2.appendChild(td1);

      tempDiv.classList.add("vertical_align");
      tempDiv.appendChild(newImg);
      tr2.appendChild(tempDiv);

      let tempArray = [td1, newImg];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].onclick = function() {
          let copyText = tempInput;
          copyText.value = bigArrayTeeny[j][k][0];

          // select the text field
          tempInput.style.display = "inline";
          copyText.select();
          // copyText.setSelectionRange(0, 99999); // for mobile devices*/

          // copy the text inside the text field
          document.execCommand("copy");
          // tempInput.style.display = "none";
          
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
          td1.style.opacity = "0.5";
          newImg.style.opacity = "0.7";
        }

        tempArray[i].onmouseout = function() {
          td1.style.opacity = "1";
          newImg.style.opacity = "1";
        }
      }
  }

  bigDiv6.appendChild(newTable);
}

// memorizedPage.style.display = "block";
teenyPage.appendChild(bigDiv6);







