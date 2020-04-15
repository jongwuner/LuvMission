const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('express.js로 만든 서버입니다.');
})

app.get('/user', (req, res) => {
    res.send('haha');
    console.log('잉?')
})

app.listen(3000, () => {
    console.log('3000번에 열었습니다.');
})