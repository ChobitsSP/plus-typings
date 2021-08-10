const axios = require("axios");

const API_HOST = 'https://www.html5plus.org';

async function GetNames() {
  const url = API_HOST + "/doc/h5p.html";
  const rsp = await axios.get(url);
  console.log(rsp.data);
}

GetNames();
