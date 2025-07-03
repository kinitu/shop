import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

let cart = [];
let user;

app.post('/data/cart', (req, res) => {
    const newData = req.body;
    let id = cart.findIndex(item => item.product.id === newData.product.id);
    if(id !== -1) cart[id].quantity += newData.quantity;
    else cart.push(newData);
    console.log('товар добавлен')
});

app.post('/data/cart/remove', (req, res) => {
    const newData = req.body;
    cart.pop(newData);
    console.log('товар убран')
});

app.get("/data/cart", (req, res) => {
    res.json(cart);
    console.log(cart)
    console.log('список отправлен')
})

app.get("/data/user", (req, res) => {
    res.json(user);
})

app.post('/data/user/signin', (req, res) => {
    const newData = req.body;
    user = newData;
    cart = []
    console.log(user);
    console.log("авторизован");
});

app.post('/data/user/signout', (req, res) => {
    user = null;
    cart = []
    console.log("вышел")
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});