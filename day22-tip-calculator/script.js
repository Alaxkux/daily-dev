function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseFloat(document.getElementById('tipPercent').value);
    const peopleCount = parseInt(document.getElementById('peopleCount').value);

    if (isNaN(billAmount) || isNaN(tipPercent) || isNaN(peopleCount) || peopleCount <= 0) {
        alert("Please enter valid values");
        return;
    }

    const tipTotal = (billAmount * tipPercent) / 100;
    const totalBill = billAmount + tipTotal;

    const tipPerPerson = tipTotal / peopleCount;
    const totalPerPerson = totalBill / peopleCount;

    document.getElementById('tipPerPerson').textContent = `$${tipPerPerson.toFixed(2)}`;
    document.getElementById('totalPerPerson').textContent = `$${totalPerPerson.toFixed(2)}`;
}
