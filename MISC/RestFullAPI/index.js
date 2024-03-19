const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(express.json());


app.listen(3000, () => 
{
    console.log('Server is running on port 3000');
});


app.get('/', (req, res) =>
{
    res.send("Hello From Node API Ayaan Saad");
});


app.post('/api/products', async (req, res) =>
{
//     console.log(req.body);
//   res.send(req.body);

try {
    console.log(req);
    const product = await Product.create(req);
    res.status(200).json(product);
} catch (error) {
    res.status(500).json({message: error.message});
}
});


mongoose.connect("connectionstring")
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Connection Failed'));