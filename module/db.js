const mongoose = require('mongoose')
const Schema1 = mongoose.Schema

export const article = new Schema1({
  title: String,//标题
  author: String,//作者
  date: Date,//日期
  abstract: String,//首页简介
  content: String,//正文
},{
  collection: "article"
})
export const aboutUser = new Schema1({
  content: String//关于页面正文
},{
  collection: "aboutUser"
})
var models = {
  article: mongoose.model('article', article),
  aboutUserr: mongoose.model('about', aboutUser)
}

mongoose.connect('mongodb://root:dong7848@localhost/gomall',{useNewUrlParser:true}, err => {
  if (err) {
    console.error('数据库连接失败')
  } else {
    console.log('连接成功')
  }
})
module.exports = models