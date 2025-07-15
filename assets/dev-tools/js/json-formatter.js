function formatJSON() {
  const input = document.getElementById("input").value;
  try {
    const obj = JSON.parse(input);
    const formatted = JSON.stringify(obj, null, 2);
    document.getElementById("output").value = formatted;
  } catch (e) {
    document.getElementById("output").value = "Invalid JSON 😕";
  }
}

function minifyJSON() {
  const input = document.getElementById("input").value;
  try {
    const obj = JSON.parse(input);
    const minified = JSON.stringify(obj);
    document.getElementById("output").value = minified;
  } catch (e) {
    document.getElementById("output").value = "Invalid JSON 😕";
  }
}

function clearText() {
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
}
