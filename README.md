Sure, here's the cleaned-up version of the document:

---

![Logo](https://telegra.ph/file/0201b9bbd766212d4979b.jpg)

# Kyouka API

Simple Usage Rest API Kyouka

## Documentation

[Get Your Keys Access](https://) [COMING SOON]

## Installation

```bash
npm install kyouka-helpers
```

## Examples

### Parameterized Request

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

api.get('gemini', { query: 'Questions', url: 'URL-Image' })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### Non-parameterized Request

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

### POST Request

```javascript
const KyoukaAPI = require('kyouka-helpers');

const api = new KyoukaAPI('YOUR-APIKEY');

api.post('igodesu/search', { url: 'Your URL for igodesu search' })
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

---
