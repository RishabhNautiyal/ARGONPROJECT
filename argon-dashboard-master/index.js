async function getClients() {
  let response = await fetch(
    "https://run.mocky.io/v3/d53400a3-6126-495e-9d16-0b4414b537b3"
  );
  let data = await response.text();
  return data;
}
getClients().then((data) => {
  const obj = JSON.parse(data + "}");
  console.log(obj);
  var table = document.getElementById("table");
  for (i = 0; i < obj.clients.length; i++) {
    var row = `<tr>
<td>${obj.clients[i].id}</td>
<td>${obj.clients[i].name}</td>
<td>${obj.clients[i].company}</td>
<td>${obj.clients[i].orderId}</td>
<td>${obj.clients[i].invoicepaid}</td>
</tr>`;
    table.innerHTML += row;
  }
  console.log(table.innerHTML);
});
