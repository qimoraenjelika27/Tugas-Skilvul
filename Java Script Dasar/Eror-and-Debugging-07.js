/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
///   -> Jawaban :Type error adalah error yang terjadi ketika salah memasukan huruf atau lambang 
/// - Reference Error
///   -> Jawaban : Reference Error adalah error yang terjadi ketika kita memanggil variabel yang belum
/// - Range Error
///   -> Jawaban : Range Error adalah RangeError dilemparkan saat mencoba meneruskan angka sebagai argumen ke fungsi yang tidak mengizinkan rentang yang menyertakan angka itu
/// - Syntax Error
///   -> Jawaban : syntax error adalah error yang terjadi jika ada kesalahan sintaks dalam script dan pesan kesalahan akan muncul pada outputnya ketika dijalankan
/// WRITE YOUR ANALYSIS HERE


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:

/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
///   -> Jawaban : Error
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
///   -> Jawaban : reference Error
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
///   -> Jawaban : karena digunakan sebelum di deklarasikan itu tidak bisa untuk variabel const

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;