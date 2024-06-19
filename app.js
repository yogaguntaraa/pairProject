const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));


app.get("/", );
app.get("/users", );
app.get("/courses", );
app.get("/users/:id", );
app.post("/users/:id", );
app.get("/courses/:id", );
app.post("/courses/:id", );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})