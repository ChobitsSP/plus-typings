/// <reference path="../typings/index.d.ts" />

const MyPlus: plus.PlusStatic = null;
function Test1() {
  const plus = MyPlus;
  plus.webview.create('');

  const barcode = new plus.barcode.Barcode('id1');
  barcode.onmarked = function (type, result) {

  }
}

function XhrTest<T>(url: string, method: "POST" | "GET", body) {
  const plus = MyPlus;
  const xhr = new MyPlus.net.XMLHttpRequest();

  if (xhr.readyState === 1) {

  }

  if (method === "GET" && body) {
    url += '?' + Object.keys(body).map(key => `${key}=${encodeURIComponent(body[key])}`).join("&");
  }

  return new Promise<T>((resolve, reject) => {
    /** @type{XMLHttpRequest} */
    const xhr = new plus.net.XMLHttpRequest();
    xhr.open(method, url);

    const token = "";

    if (token) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    }

    xhr.setRequestHeader('Accept', 'application/json');

    if (body instanceof FormData) {
      xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    } else {
      xhr.setRequestHeader(
        'Content-Type',
        'application/json;charset=UTF-8'
      );
    }

    // 这里需要构造body
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 4:
          if (xhr.status == 200) {
            const result: T = JSON.parse(xhr.responseText);
            try {
              resolve(result);
            } catch (err) {
              reject(err);
            }
          } else {
            reject(xhr.readyState);
          }
          break;
        default:
          break;
      }
    };

    if (method === 'POST') {
      if (body instanceof FormData) {
        xhr.send(body);
      } else {
        xhr.send(JSON.stringify(body));
      }
    } else {
      xhr.send();
    }
  });
}
