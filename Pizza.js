let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  console.log("add button clicked");
  var toppingInput = document.getElementById("toppings");
  var topping = toppingInput.value.trim();

  if (topping !== "") {
    var table = document
      .getElementById("toppingsTable")
      .getElementsByTagName("tbody")[0];
    if (table.rows.length < 5) {
      console.log(table.rows.length);
      var newRow = table.insertRow(table.rows.length);
      var cell = newRow.insertCell(0);

      cell.textContent = topping;
      let cell2 = newRow.insertCell(1);

      const delete_button = document.createElement("button");

      delete_button.innerText = "Delete";
      delete_button.classList.add("btn", "btn-danger");

      delete_button.addEventListener("click", function () {
        newRow.remove();
      });
      cell2.appendChild(delete_button);
      newRow.append();
      toppingInput.value = "";
    } else {
      alert("Only 5 Toppings Allowed");
    }
  } else {
    alert("You must enter a topping");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("Submit");
  submitBtn.addEventListener("click", function () {
    var size = document.querySelector('input[name="group1"]:checked')
      .nextElementSibling.textContent;
    var crust = document.querySelector('input[name="group2"]:checked')
      .nextElementSibling.textContent;
    var sauce = document.querySelector('input[name="group3"]:checked')
      .nextElementSibling.textContent;
    var toppings = "";
    document
      .querySelectorAll("#toppingsTable tbody tr:not(.delete-row)")
      .forEach(function (row) {
        toppings += row.textContent.trim() + ", ";
      });
    toppings = toppings.slice(0, -1);
    var message =
      "Your Perfect Pizza Is:\n" +
      "Size: " +
      size +
      "\n" +
      "Crust: " +
      crust +
      "\n" +
      "Sauce: " +
      sauce +
      "\n" +
      "Toppings: " +
      toppings.replace("Delete", "");

    console.log(toppings);
    alert(message);
  });
});
