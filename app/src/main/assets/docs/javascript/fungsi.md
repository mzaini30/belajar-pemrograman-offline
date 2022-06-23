# Fungsi

Fungsi dalam JavaScript bertujuan untuk mendefinisikan program yang digunakan berulang-ulang. Contoh dari fungsi itu seperti ini:

```javascript
function panggil(){
  console.log('Halo')
}

panggil()
panggil()
panggil()
```

Dari kode di atas, akan menghasilkan teks seperti ini:

```
Halo
Halo
Halo
```

Jadi, `console.log('Halo')` itu diulangi sebanyak tiga kali.

## Fungsi dengan Parameter

Kita bisa memasukkan parameter ke dalam fungsi seperti ini:

```javascript
function panggil(nama){
  console.log(nama)
}

panggil('Zen')
```

Maka, akan menghasilkan teks `Zen`.