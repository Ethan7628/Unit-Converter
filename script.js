function convert() {
  const inputValue = parseFloat(document.getElementById("userInput").value);
  const conversionType = document.getElementById("unit").value;
  let result = 0;
  let resultString = "";

  if (isNaN(inputValue)) {
    resultString = "Please enter a valid number";
  } else {
    switch (conversionType) {
      case 'milesToKm':
        result = inputValue * 1.60934;
        resultString = `${inputValue} miles = ${result.toFixed(2)} kilometers`;
        break;
      case 'kmToMiles':
        result = inputValue / 1.60934;
        resultString = `${inputValue} kilometers = ${result.toFixed(2)} miles`;
        break;
      case 'fToC':
        result = (inputValue - 32) * 5 / 9;
        resultString = `${inputValue}°F = ${result.toFixed(2)}°C`;
        break;
      case 'cToF':
        result = (inputValue * 9 / 5) + 32;
        resultString = `${inputValue}°C = ${result.toFixed(2)}°F`;
        break;
      case 'kgToLb':
        result = inputValue * 2.20462;
        resultString = `${inputValue} kilograms = ${result.toFixed(2)} pounds`;
        break;
      case 'lbToKg':
        result = inputValue / 2.20462;
        resultString = `${inputValue} pounds = ${result.toFixed(2)} kilograms`;
        break;
      case 'inToCm':
        result = inputValue * 2.54;
        resultString = `${inputValue} inches = ${result.toFixed(2)} centimeters`;
        break;
      case 'cmToIn':
        result = inputValue / 2.54;
        resultString = `${inputValue} centimeters = ${result.toFixed(2)} inches`;
        break;
      case 'ftToCm':
        result = inputValue * 30.48;
        resultString = `${inputValue} feet = ${result.toFixed(2)} centimeters`;
        break;
      case 'cmToFt':
        result = inputValue / 30.48;
        resultString = `${inputValue} centimeters = ${result.toFixed(2)} feet`;
        break;
      default:
        resultString = "Invalid conversion type";
    }
  }

  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}