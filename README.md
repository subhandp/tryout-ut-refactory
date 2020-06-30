# tryout-ut-refactory
Jawaban soal tryout javascript No 1-10  

# Penjelasan
1. Menggunakan percabangan if..else dan operator perbandingan dan logika untuk mendapat nilai antara

2. Menggunakan operator modulu untuk mendapat sisa bagi
//bi 
```js
% 
//Bilangan ganjil adalah bilangan memiliki sisa pembagian dan Bilangan genap adalah sebaliknya
```

4. Mendeteksi kalimat  palidrom atau bukan :
    - Yang pertama ubah dulu semua bilangan menjadi huruf kecil agar bisa dibandingkan dan menghilangkan semua karakter whitespace
    - Kemudian ubah string menjadi array dulu menggunakan fungsi split() 
    - kemudian balik nilai array menggunakan fungsi reverse() 
    - selanjutnya gabungkan kembali array menjadi string agar bisa dibandingkan menggunakan fungsi join()
    - Setelah itu kita bandingkan 
 ```js
//Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang
```
    
5. Menggunakan operator modulo untuk mencari tahun kabisat
 ```js
//tahun kabisat adalah tahun 
```
 

6. Membuat unordered list html tag dengan data object array menggunakan recursive

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

><ul>
   <li>
      <a href=home>home</a>
      <ul>
         <li><a href=home/kontak>kontak</a></li>
         <li><a href=home/alamat>alamat</a></li>
      </ul>
   </li>
   <li><a href=admin/app>app</a></li>
</ul>

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

7. Fungsi membalikan string menggunakan fungsi ES6
```js
split();
reverse();
join();
```
9. Menggunakan Set() untuk mendapatkan nilai array yang unique

10. Mendapatkan nilai dari object array sesuai kondisi yang ada dengan menggunakan fungsi filter() ES6
    - Ubah dulu JSON string menjadi JSON object
    - Iterasi kesemua elemen array dengan kondisi jika nilai < 21 maka object yang mengandung nilai tersebut di return oleh fungsi filter()
    - Terakhir mengubah ulang JSON object ke JSON string
```
