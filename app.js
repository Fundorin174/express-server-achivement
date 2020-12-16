const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send(`<div style = "width: 100%; display: flex; justify-content: center">
    <button style = "width:100px; height: 50px; padding: 10px; border-radius: 25px;" onclick = "handleClick()">Push me</button>
    </div>
    <script>
    var handleClick = ()=>{
        console.log("+");
            fetch("/click", {method: 'POST'}).then((response)=>{
                let result = response;
                console.log(result)
            })
        }
    </script>`)
})

app.post('/click', function (request, response) {
    console.log("clicked")
    response.send('clicked');
  });

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})