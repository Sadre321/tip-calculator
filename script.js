document.querySelector('.container').onchange = function(){
    let price = Number(document.getElementById('price').value);
    
    let range = document.querySelector('#range');
    let range_output = document.querySelector('.range-value');
    let percent_value = range.value;
    range_output.innerHTML = '%' + percent_value;

    var tipAmount = price * (percent_value/100);
    var totalBill = price + tipAmount;

    let tip = document.querySelector('#tip');
    let totalValue = document.querySelector('#totalBill');
    
    tip.value =tipAmount.toFixed(2);
    totalValue.value = totalBill.toFixed(2);

    console.log(totalBill);
}