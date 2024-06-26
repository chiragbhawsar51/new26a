function addRecordInputs() {
    var count = document.getElementById('records_count').value;
    var container = document.getElementById('records');
    container.innerHTML = '';
    for (var i = 0; i < count; i++) {
        container.innerHTML += `<h3>Record ${i+1}</h3>`;
        container.innerHTML += `<label for="sn_${i}">S.no:</label>`;
        container.innerHTML += `<input type="text" id="sn_${i}" name="sn_${i}" required><br><br>`;
        container.innerHTML += `<label for="description_${i}">Description:</label>`;
        container.innerHTML += `<input type="text" id="description_${i}" name="description_${i}" required><br><br>`;
        container.innerHTML += `<label for="rate_${i}">Rate:</label>`;
        container.innerHTML += `<input type="number" id="rate_${i}" name="rate_${i}" required step="0.01"><br><br>`;
        container.innerHTML += `<label for="quantity_${i}">Quantity:</label>`;
        container.innerHTML += `<input type="number" id="quantity_${i}" name="quantity_${i}" required step="0.01"><br><br>`;
    }
}
