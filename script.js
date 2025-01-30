function calculateMaturityAmount() {
  //get input values from the form element

  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(
    document.getElementById("InterestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  //perform the calculation

  const maturityAmount = (principal + principal * interestRate * tenure) / 100;

  //display the result

  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

//attach the eventlistener to the calculate btn
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
