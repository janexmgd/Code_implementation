//no3
function divideAndSort(num) {
    if (typeof (num) == "number") {
        let hasil = '';
        let numArray = num.toString().split('0');
        numArray.forEach(element => {
            hasil = hasil + element.split('').sort().join('')
        });
        console.log(hasil);
    } else {
        console.log("parameter harus number");
    }
}
divideAndSort(74108520159098987);
divideAndSort(5956560159466056)