# Apa Itu TypeScript?

Pada dasarnya, TypeScript hanyalah JavaScript yang diberi tipe data.

Contoh program JavaScript:

```javascript
function panggil(nama){
  return `Halo ${nama}`
}
```

Jika diubah menjadi TypeScript, maka kodenya akan seperti ini:

```typescript
function panggil(nama: string): string {
  return `Halo ${nama}`
}
```