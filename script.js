let grandTotal = 0;

    function addItem() {
      const product = document.getElementById("product").value;
      const qty = parseInt(document.getElementById("qty").value);
      const price = parseFloat(document.getElementById("price").value);

      if (!product || isNaN(qty) || isNaN(price)) {
        alert("Please enter valid product, quantity, and price!");
        return;
      }

      const total = qty * price;
      const tableBody = document.getElementById("billbody");

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product}</td>
        <td>${qty}</td>
        <td>₹${price.toFixed(2)}</td>
        <td>₹${total.toFixed(2)}</td>
      `;
      tableBody.appendChild(row);

      grandTotal += total;
      document.getElementById("grandTotal").innerText = "Grand Total: ₹" + grandTotal.toFixed(2);

      // Clear input fields
      document.getElementById("product").value = '';
      document.getElementById("qty").value = '';
      document.getElementById("price").value = '';
    }