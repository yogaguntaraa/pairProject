const express = require('express');
const { home, downloadInvoice } = require('./controllers/controller');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(require('./routes'));


app.get("/", home);
app.post("/downloadInvoice", downloadInvoice);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
