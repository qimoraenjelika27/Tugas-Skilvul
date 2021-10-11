// Soal - 01
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

//  1. fungsi harus ditulis menggunakan recursive
//  2. memiliki 1 parameter:
//     -> arr [Array] => array of number yang nanti kita akan cari jumlahnya
//  3. return value [Number] => nilai kembalian berupa sebuah Number

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0
    }
    const nilai = arr[0]
    return nilai + sumOfArray(arr.slice(1))
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal - 02
// Pada soal sebelumnya kamu diminta untuk membuat sebuah fungsi untuk mencari total sebuah "array of number", pada soal kali ini kamu diminta untuk membuat sebuah fungsi yang mana akan memberikan jumlah angka yang nilainya melebihi nilai rata-rata. Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikan masalah tersebut:

//  1. pastikan bahwa array yang kalian gunakan pada soal-01 dan soal-02 itu identik atau sama
//  2. cari nilai rata-rata menggunakan fungsi yang sudah kalian buat pada soal-01
//  3. buat sebuah funsi yang mana memiliki 2 parameter
//        -> arr [Array] => array of number
//        -> avg [Number] => nilai rata-rata
//  4. fungsi pada soal-2 akan melakukan checking terhadap tiap-tiap nilai apakah ia melebihi nilai rata-rata atau tidak
//  5. langkah terakhir adalah mengembalikan jumlah dari nilai yang melebihi nilai rata-rata

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
    if (arr.length === 0) {
        return 0
    }
    return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// Soal - 03
// Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

//  1. fungsi harus ditulis menggunakan recursive
//  2. memiliki 2 parameter:
//      -> arr [Array] => array of number yang nanti akan kita cari value-nya
//      -> num [Number] => angka yang hendak kita cari
//  3. return value:
//      -> apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
//      -> apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"


const arr = [1, 2, 3, 4, 5];

function searchInArray(array, nilai) {
    if (array.length === 0) {
        return "angka tidak ditemukan"
    } else if (array[array.length - 1] === nilai) {
        return "angka ditemukan pada index: " + (array.length - 1)

    }
    return searchInArray(array.slice(0, -1), nilai)
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// Soal - 04
// Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida alfabet, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive

// 2. memiliki 2 parameter yang identik dengan tipe data Number, hal ini kita butuhkan untuk membuat sebuah perulangan menggunakan recursive

// 3. bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi trianglePattern

// 4. kalian hanya diperbolehkan untuk membuat "1 BUAH TRADITIONAL LOOP", hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

//      akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan traditional loop

function trianglePattern(a, b) {
    if (a === 0) {
        return;
    }
    let space = "";
    for (let index = 0; index < b; index++) {
        if (index < a - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (b - a + (index - a) + 2))
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}
trianglePattern(5, 5);