const userInput = document.getElementById ('user-input'); 
const lengthNum = document.getElementById ('length');
const volumeNum = document.getElementById ('volume';)
const massNum = document.getElementById ('mass');
const formInput = document.getElementById ('.form');

userInput.addEventListener ('input', displayResults)

formEl.addEventListener('submit', (e) => {
    e.preventDefault ();
} );


function displayResults () {
    const num = +userInput.value;
    const len = convertLength (num);
    const volume = convertVolume(num);
    const mass = convertMass(num);

    lengthEl.textContent = `${num} meters = ${len[0]} feet | ${num} feet = ${len[1]} meters`;
    volumeEl.textContent = `${num} liters = ${volume[0]} gallons | ${num} gallons = ${volume[1]} liters`;
    massEl.textContent = `${num} kilos = ${mass[0]} pounds | ${num} pounds = ${mass[1]} kilos`;
}

function convertLength(numberToConvert) {
    const feetToMeters = numberToConvert / 3.28084;
    const lengthResult = roundNumber(metersToFeet, feetToMeters);
    return lengthResult; 
}

function convertVolume(numberToConvert) {
    const litersToGallons = numberToConvert * 0.2641;
    const gallonsToLiters = numberToConvert / 0.2641;
    const volumeResult = roundNumber(litersToGallons, gallonsToLiters);
    return volumeResult;
  }
  
  function convertMass(numberToConvert) {
    const kilostoPounds = numberToConvert * 2.20462;
    const poundsToKilos = numberToConvert / 2.20462;
    const massResult = roundNumber(kilostoPounds, poundsToKilos);
    return massResult;
  }
  
  /*
    Pass in the array as a rest parameter and
    apply toFixed()-method to each of the numbers
    in the array.
  */
  function roundNumber(...numbersToRound) {
    const roundedNumbers = numbersToRound.map((number) => number.toFixed(3));
    return roundedNumbers;
  }


//Math.round(x) for rounding //