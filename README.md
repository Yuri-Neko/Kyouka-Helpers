![Logo](https://telegra.ph/file/0201b9bbd766212d4979b.jpg)

# Kyouka API

Simple Usage Rest API Kyouka

## Documentation

[Documentation](https://api.maelyn.my.id)

## Installation

```bash
  npm install kyouka-helpers
```
    
## Usage/Examples

```javascript
const KyoukaAPI = require('kyouka-helpers');

const api = new KyoukaAPI('YOUR-APIKEY');

api.get('nekopoi/search', { q: 'Questions' })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

```javascript
const KyoukaAPI = require('kyouka-helpers');

const api = new KyoukaAPI('YOUR-APIKEY');

api.get('gemini', { query: 'Questions', url: 'URL-Image'})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

```javascript
const KyoukaAPI = require('kyouka-helpers');

const api = new KyoukaAPI('YOUR-APIKEY');

api.get('nekopoi/latest')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Base

- [@ClayzaAubert](https://www.github.com/ClayzaAubert)

## Authors

- [@KyoukaHashiba](https://www.github.com/Yuri-Neko)

Dengan perubahan ini, Anda bisa menggunakan `KyoukaAPI` sesuai dengan dokumentasi di atas. Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya!
