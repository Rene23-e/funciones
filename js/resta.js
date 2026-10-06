function restar() {
    let n1 = parseFloat(document.getElementById('resta1').value) || 0;
    let n2 = parseFloat(document.getElementById('resta2').value) || 0;
    let total = n1 - n2;
    document.getElementById('resResta').innerText = total;
}