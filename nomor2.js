const PijarFood = (harga, voucher, jarak, pajak) => {
    //cek type data
    if (typeof (harga) != "number") {
        console.log("Parameter harga harus bertype number");
    } else if (typeof (jarak) != "number") {
        console.log("Parameter jarak harus bertype number");
    } else if (typeof (pajak) != "boolean") {
        console.log("Parameter pajak harus bertype boolean");
    } else {
        let tax
        let ongkir
        let potongan

        //cek voc?
        if (voucher) {
            if (voucher == "PIJARFOOD5") {
                if (harga >= 50000) {
                    let disc = harga * (50 / 100)
                    if (disc <= 50000) {
                        potongan = disc
                    } else {
                        potongan = 50000
                    }
                } else {
                    potongan = 0
                }
            } else if (voucher == "DITRAKTIRPIJAR") {
                if (harga >= 25000) {
                    let disc = harga * (60 / 100)
                    if (disc <= 30000) {
                        potongan = disc
                    } else {
                        potongan = 30000
                    }
                } else {
                    potongan = 0
                }
            }
        } else {
            potongan = 0
        }

        //cek jarak
        if (jarak >= 2) {
            ongkir = 5000 + (jarak - 2) * 3000
        } else {
            ongkir = 5000
        }
        //cek pajak
        if (pajak) {
            tax = harga * (5 / 100)
        } else {
            tax = 0
        }
        total = harga - potongan + tax + ongkir
        console.log(`
                        Harga       = ${harga}
                        Potongan    = ${potongan}
                        Biaya Antar = ${ongkir}
                        Pajak       = ${tax}
                        Total       = ${total}`);
    }
}


PijarFood(75000, "PIJARFOOD5", 5, true)