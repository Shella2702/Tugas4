//Soal No 1

function onlineShop (pembeli,produk){
    return console.log("Terima kasih", pembeli, "telah membeli produk", produk);
};
onlineShop("Shella Batrisyia","Piring");

//Soal No 2 fahrenheit

function convertToFahrenheit (number){
    return number * (9/5);
};

function getFahrenheit (celcius){
    return convertToFahrenheit(celcius) + 32;
};
console.log(getFahrenheit(15));

// function convert Fahrenheit ke Celcius
function convertToCelcius (number1) {
    return number1 - 32;
};

function getCelcius (fahrenheit){
    return convertToCelcius(fahrenheit) * (5/9);
};
console.log(getCelcius(59));

//soal No 3 Hitung kucing dan manusia

let hitungUmur = (umurKucing) =>{
    let usiaManusia;
    if (umurKucing == 1){
        usiaManusia = 15;
    }
    else if (umurKucing == 2){
        usiaManusia = 15 + 9;
    }
    else if (umurKucing > 2){
        usiaManusia = (umurKucing - 2) * 4 + 24 ;
    }
    else {
        usiaManusia = 0;
    }
    return usiaManusia;
}
console.log(hitungUmur(4));

//Soal No 4 function untuk mengubah format semua string menjadi huruf kecil.

let changeFormat = valueString => valueString.toLowerCase();
console.log(changeFormat("SHELLA BATRISYIA LUPITASARI"));

//
