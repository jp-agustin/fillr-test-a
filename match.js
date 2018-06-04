module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  var output = [];
  // Common expression for credit card date fields
  var exp = "Ecom_Payment_Card_ExpDate";

  for (let key in hash) {
    // Searching exp in every hash values
    if (hash[key].search(exp) !== -1) {
      output.push(key);
    }
  }

  return output;
}