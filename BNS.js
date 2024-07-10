document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productImageInput = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const locationInfo = document.getElementById('locationInfo').value;

    if (productImageInput.files && productImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
            const newRow = productTable.insertRow();

            const cellImage = newRow.insertCell(0);
            const cellName = newRow.insertCell(1);
            const cellDescription = newRow.insertCell(2);
            const cellPrice = newRow.insertCell(3);
            const cellContact = newRow.insertCell(4);
            const cellLocation = newRow.insertCell(5);
            const cellActions = newRow.insertCell(6);

            cellImage.innerHTML = `<img src="${e.target.result}" alt="${productName}" width="100">`;
            cellName.textContent = productName;
            cellDescription.textContent = productDescription;
            cellPrice.textContent = productPrice;
            cellContact.textContent = contactInfo;
            cellLocation.textContent = locationInfo;
            cellActions.innerHTML = `<button onclick="deleteProduct(this)">Delete</button>`;
        };
        reader.readAsDataURL(productImageInput.files[0]);
    }

    document.getElementById('productForm').reset();
});

function deleteProduct(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
