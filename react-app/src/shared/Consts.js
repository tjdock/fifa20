export const API_URL = 'http://localhost:1234/';

export const transformRequest = data => {
  let body = '';
  for (const k in data) {
    if (k) {
      if (data[k]) {
        body += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      } else {
        body += encodeURIComponent(k) + '=&';
      }
    }
  }

  body = body.replace(/&$/g, '');
  return body;
};
