# tryout-ut-refactory
Jawaban soal tryout javascript No 1-10  

# Penjelasan
1. Menggunakan percabangan if..else dan operator perbandingan dan logika untuk mendapat nilai antara

2. Menggunakan operator modulu % untuk mendapat sisa pembagian untuk menentukan bilangan ganjil dan genap
```js
//Bilangan ganjil adalah bilangan yang memiliki sisa pembagian dan Bilangan genap adalah bilangan yang tidak memiliki sisa pembagian
```
3. Menggunakan fungsi ES6 pada array untuk mencari nilai maksimal,minimal, dan rata-rata dan menggunakan try..catch untuk mencegah kesalahan input sesuai paramater
    - Mencari nilai maksimal dengan menggunakan fungsi Math.max()
    - Mencari nilai minimal dengan menggunakan fungsi Math.min()
    - Menggunakan fungsi reduce() untuk menjumlah iterasi setiap nilai dan mentotalnya kemudian membagi dengan panjang array untuk mendapatkan rata-rata
    
4. Mendeteksi kalimat palidrom atau bukan menggunakan fungsi ES6 :
    - Yang pertama ubah dulu semua bilangan menjadi huruf kecil dan menghilangkan semua karakter whitespace agar bisa dibandingkan dengan setara
    - Kemudian ubah string menjadi array dulu menggunakan fungsi split() 
    - kemudian balik nilai array menggunakan fungsi reverse() 
    - selanjutnya gabungkan kembali array menjadi string menggunakan fungsi join()
    - Setelah itu kita bandingkan string awal dan string yang sudah dibalik
 ```js
//Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang
```
    
5. Menggunakan operator modulo untuk mencari tahun kabisat
 ```js
//Tahun kabisat adalah tahun yang dapat dibagi dengan 4 dan tidak oleh 100 atau habis dibagi oleh 400.
```
 

6. Membuat unordered list html tag dengan data object array menggunakan recursive
> nilai inputan berupa object array
```js
  let menuObj = [
                    {
                        menu : 'home',
                        link : 'home',
                        children : 
                            [
                                {
                                    menu : 'kontak',
                                    link : 'home/kontak',
                                    children : []
                                },
                                {
                                    menu : 'alamat',
                                    link : 'home/alamat',
                                    children : []
                                }
                            ]   
                    },
                    {
                        menu : 'app',
                        link : 'admin/app',
                        children : []  
                    }
                ];
```

>output fungsi berupa unordered list html

```html
<ul>
   <li>
      <a href=home>home</a>
      <ul>
         <li><a href=home/kontak>kontak</a></li>
         <li><a href=home/alamat>alamat</a></li>
      </ul>
   </li>
   <li><a href=admin/app>app</a></li>
</ul>
```

7. Fungsi membalikan string menggunakan fungsi split(),reverse(),join() ES6

8. Menggunakan perulangan do..while dengan kondisi berhenti dan ouput total nilai jika menerima inputan string '='

9. Menggunakan Set() untuk mendapatkan nilai array yang unique

10. Mendapatkan nilai dari object array sesuai kondisi yang ada dengan menggunakan fungsi filter() ES6
    - Ubah dulu JSON string menjadi JSON object
    - Iterasi kesemua elemen array dengan kondisi jika nilai < 21 maka object yang mengandung nilai tersebut di return oleh fungsi filter()
    - Terakhir mengubah ulang JSON object ke JSON string
```
