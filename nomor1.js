//nomor1 

//its Palindrom?
// const cekPalindrom = (kata) => {
//     caseKata = kata.toLowerCase()
//     let text = caseKata.split('').reverse().join('')
//     if (text == caseKata) {
//         console.log("Palindrom");
//     } else {
//         console.log("Bukan Palindrom");
//     }
// }

// cekPalindrom("Viola")
// cekPalindrom("MaLAM")

//ReverseWord
const ReverseWord = (kalimat) => {
    const balik = kalimat.split(' ').reverse('').join(' ')
    console.log(balik);
}
ReverseWord("Saya belajar Javascript")