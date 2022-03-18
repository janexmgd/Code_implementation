//nomor1 

//its Palindrom?
const cekPalindrom = (kata) => {
    if (typeof (kata) == "string") {
        caseKata = kata.toLowerCase()
        let text = caseKata.split('').reverse().join('')
        if (text == caseKata) {
            console.log("Palindrom");
        } else {
            console.log("Bukan Palindrom");
        }
    } else {
        console.log("Type data harus berupa string");
    }
}

// cekPalindrom("saya")
// cekPalindrom("MaLAM")

//ReverseWord
const ReverseWord = (kalimat) => {
    if (typeof (kalimat) == "string") {
        const balik = kalimat.split(' ').reverse('').join(' ')
        console.log(balik);
    } else {
        console.log("Parameter kalimat harus bertype data string");
    }
}
ReverseWord("Saya udah makan")