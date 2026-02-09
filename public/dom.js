function updateURL() {
  const val = document.getElementById("msgInput").value;
  window.location.search = "?msg=" + val;
}

const params = new URLSearchParams(window.location.search);
document.getElementById("output").innerHTML = params.get("msg");
