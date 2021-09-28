/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
///   Jawab  -> 2
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
///   Jawab  -> variabel global = dapat diakses di seluruh dokumen web
///             Variabel Local = tersedia di fungsi saat ini
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
// ini adalah global scope secara default
var fashion = 'Sepatu';

function jenis() {
    // ini adalah local scope, dan kita
    // dapat mendeklarasikan variable kelereng secara local
    var fashion = 'Adidas';
    console.log(fashion); // 'Adidas'
}
jenis();

console.log(fashion); // 'Sepatu'

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
///   Jawab  -> Mariah 
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
///   Jawab  -> Karena yang di masukkan ke dalam console.lg adalah printfirstname dari "Mariah Carey"    
/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));