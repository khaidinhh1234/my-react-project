const express = require('express');
const app = express();
const port = 3000;

// Sử dụng body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

// Cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', './views');

let products = [];
// Product item sẽ gồm các trường sau: name, sku, price_regular, price_sale

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/products', (req, res) => {
    res.render('products/index', {
        products: products
    });
});

app.get('/products/create', (req, res) => {
    res.render('products/create');
});

app.post('/products/store', (req, res) => {
    // Xử lý thêm vào mảng products
    let product = req.body;

    products.push(product);

    res.redirect('/products');
});

app.listen(port, () => {
    console.log('Khởi tạo server thành công!');
});