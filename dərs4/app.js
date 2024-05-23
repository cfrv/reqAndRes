const express = require('express');
const app = express();
const products = [
    { id: 1, name: 'kitab', miqdar: 50, qiymet: 5 },
    { id: 2, name: 'qelem', miqdar: 150, qiymet: 1 },
    { id: 3, name: 'defter', miqdar: 110, qiymet: 2 },
    { id: 4, name: 'silgi', miqdar: 70, qiymet: 0.5 },
    { id: 5, name: 'karandas', miqdar: 50, qiymet: 1 },
    { id: 6, name: 'telefon', miqdar: 90, qiymet: 500 },
    { id: 7, name: 'eynek', miqdar: 200, qiymet: 10 },
    { id: 8, name: 'qulaqciq', miqdar: 50, qiymet: 5 },
    { id: 9, name: 'koynek', miqdar: 45, qiymet: 15 },
    { id: 10, name: 'cetir', miqdar: 50, qiymet: 25 }
]
app.get('/', (req, res) => {
    res.send()
})
app.get('/users', (req, res) => {
    res.send(products)
})
app.get('/users/:id', (req, res) => {
    const productID = req.params.id;
    const selectedProduct = products.find(product => product.id == productID)
    if (selectedProduct) {
        res.send(selectedProduct)
    }
    else {
        res.status(404).send('mehsul yoxdur')
    }
})
app.listen(3002, () => {
    console.log("server quruldu");
})