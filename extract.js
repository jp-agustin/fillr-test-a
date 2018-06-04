module.exports.extract = function(window) {

  // Write your solution to Task #2 - Extract Metadata task here
  // Parsing of form fields from the webpage
  var hash = {};
  var form = window.document.getElementsByTagName("form");
  var rows = form[0].getElementsByTagName("tr");

  for (let row of rows) {
    // Excluding rows without control fields
    if (row.cells.length === 2) {
      let key = row.cells[0].textContent.trim();
      let value = row.cells[1].firstChild.name;

      hash[key] = key + " " + value;
    }
  }

  return hash;
}
