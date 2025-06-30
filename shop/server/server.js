import fs from 'fs'

fetch('https://dummyjson.com/products?limit=0&select=title,description,price,category')
.then(res => res.json())
.then(res => fs.writeFileSync('../shop/src/data/Product.json', JSON.stringify(res, null, 2), 'utf8'));

fetch('https://dummyjson.com/users?limit=3&select=email,username,password')
.then(res => res.json())
.then(res => fs.writeFileSync('../shop/src/data/Users.json', JSON.stringify(res, null, 2), 'utf8'))

fetch('https://dummyjson.com/products/category-list')
.then(res => res.json())
.then(res => fs.writeFileSync('../shop/src/data/Categories.json', JSON.stringify(res, null, 2), 'utf8'));