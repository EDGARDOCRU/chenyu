const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer DfshisW227t7k6kVvveB0mGQ0j5jg25rzeYVIV2BpjsVRk2cvCBXIy3PvdyqQTa1",
  },
};

fetch("https://api.iconfinder.com/v4/icons/search?query=arrow&count=10", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
