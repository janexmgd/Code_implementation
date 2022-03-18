//no3
function divideAndSort(num) {
    if (typeof (num) == "number") {
        if (num < Number.MAX_SAFE_INTEGER) {
            let hasil = '';
            let numArray = num.toString().split('0');
            numArray.forEach(element => {
                hasil = hasil + element.split('').sort().join('')
            });
            console.log(hasil);
        } else {
            console.log("Tidak menampilkan hasil karena melebihi max_safe_integer");
        }
    } else {
        console.log("parameter harus number");
    }
}
divideAndSort(9007199254740991)
divideAndSort(74108520159098987741085201590989877410852015909898774108520159098987);
divideAndSort(5956560159466056)