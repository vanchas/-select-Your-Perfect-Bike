let tipeOfBikes = [
  {
    'type': 'fixed'
  },
  {
    'type': 'road bike'
  },
  {
    'type': 'turing'
  },
  {
    'type': 'gravel'
  },
  {
    'type': 'city bike'
  },
  {
    'type': 'mountain bike'
  },
  {
    'type': 'fatbike'
  },
  {
    'type': 'cruiser'
  }
];

let arrayOfValues = [];
let arrayOfResults = [];

function renderCheckedInputs() {
  let form = document.querySelector('.form');
  let radio = form.getElementsByClassName('input');
  for (let radioItem = 0; radioItem < radio.length; radioItem++) {
    if (radio[radioItem].checked) {
      arrayOfValues.push(radio[radioItem].value.split(','));
    }
  }
  arrayOfResults = arrayOfValues[0].concat(
    arrayOfValues[1],
    arrayOfValues[2],
    arrayOfValues[3],
    arrayOfValues[4],
  );

  let objTypesScore = {};
  arrayOfResults.forEach(el => {
    objTypesScore[el] = objTypesScore[el] + 1 || 1;
  });

  let arrayTypesScore = Object.entries(objTypesScore);
  
  arrayTypesScore.sort((el1, el2) => {
    return el2[1] - el1[1];
  });
  
  // return arrayTypesScore;

  form.remove();
  document.querySelector('.header').textContent = "Result:";
  let display = document.querySelector('.display');
  return display.innerHTML = `
    Perfect bike for You is <strong><i>${arrayTypesScore[0][0]}</i></strong>
    </br>
    And You can also look at <strong><i>${arrayTypesScore[1][0]}</i></strong>`;
}