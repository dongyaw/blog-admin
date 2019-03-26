const mongoose = require('mongoose')

mongoose.connect('mongodb://root:dong7848@localhost/gomall',{useNewUrlParser:true})
const conn = mongoose.connection

conn.on('error', console.error.bind(console, '数据库连接失败'))

conn.once('open', ()=>{
  console.log('连接成功')
})