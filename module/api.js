const express = require('express')
const router = express.Router()
const moment = require('moment')
import { article, aboutUserr } from './db.js'
router.get('/', function(req, res, next) {
  res.render('index', { title: 'api' });
});

router.get('/getArticleList', async(req, res) => {
  try {
    let query = {},total = await article.count(query),
        data = await article.find(query).sort({ date: -1 }).lean();
    for (let index = 0; index < data.length; index++) {
        let date = moment(data[index].date).format('YYYY-MM-DD HH:mm')
        
    }
    data = data.sort(function(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    res.json({ data: { total: total, list: data }, code: 200, msg: '' })
} catch (err) {
    console.log(err)
    res.json({ data: '', code: 500, msg: '服务器错误' })
}
})
router.get('/getArticleById', async(req, res) => {
  try {
    let data = await article.findOne({_id: req.query.id}).lean();
    //let date = moment(data.date).format('YYYY-MM-DD HH:mm')
    res.json({ data: data, code: 200, msg: '' })
} catch (err) {
    console.log(err)
    res.json({ data: '', code: 500, msg: '服务器错误' })
}
})

router.get('/getAboutUser', async(req, res) => {
  try {
    let data = await aboutUserr.findOne()
  res.json({ data: data, code: 200, msg: '' })
  } catch (error) {
    console.log(error)
    res.json({ data: '',code: 500, msg: "服务器端出错：/getAboutUser" })
  }
})
module.exports = router