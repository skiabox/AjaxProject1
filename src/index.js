const loadData = () => {
  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true); // true is for asynchronous

  xhr.onload = function() {
    //console.log(this); //this refers to xhr object
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function() {
    console.log('Request error...');
  };

  xhr.send();
};

document.getElementById('button').addEventListener('click', loadData);

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
