var http = require('http');
var service = require('./dbControll.js');
var bodyParser=require('body-parser');
var express = require('express');
var url = require('url');
const port = 3000;


const SUCESS_MESSAGE = "200"; // 成功返回
const EMPTY_MESSAGE = "300"; // 空数据
const DISABLE_MESSAE = "400"; // 请求不可用
const FAILURE_MESSAGE = "500"; // 服务器错误


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//退出登陆
app.get('/user/loginout', (req, res) => {


});

/**
注册用户，需要传的参数用户名和密码
3:服务器异常
2:用户名已存在
1:成功
**/
app.post("/register",(req,res)=>{
  let name = req.body.username;
  let pwd = req.body.password;
  if(!name||!pwd){
    responseInfo(res, addResultInfo("", 0, FAILURE_MESSAGE, "参数错误", false));
  }
  service.register(name.trim(),pwd.trim()).then((type)=>{
      switch(type){
         case 1:
         msg = "注册成功";
         code = SUCESS_MESSAGE;
         break;
         case 2:
         msg = "用户名已存在!";
         code = EMPTY_MESSAGE;
         break;
         case 3:
         msg = "服务器异常,请稍后重试!";
         code = FAILURE_MESSAGE;
         break;
      }
    responseInfo(res, addResultInfo({name}, 0, code, msg, false));
  });
})

//登陆
app.post("/login", (req, res) => {
    let name = req.body.username;
    let pwd = req.body.password;

    let msg, code;
    if (name && pwd) {
        service.checkUser(name, pwd, (type, user, error) => {
            switch (type) {
                case 1:
                    msg = "登陆成功";
                    code = SUCESS_MESSAGE;
                    break;
                case 2:
                    msg = "密码错误";
                    code = EMPTY_MESSAGE;
                    break;
                case 3:
                     msg = "用户名不存在";
                     code = EMPTY_MESSAGE;
                    break;
                case 4:
                    msg = "服务器异常";
                    code = FAILURE_MESSAGE;
                   break;
            }
            responseInfo(res, addResultInfo(user, 0, code, msg, false));
        });
    } else {
        responseInfo(res, addResultInfo("", 0, FAILURE_MESSAGE, "参数错误", false));
    }
});

//得到menu数据
app.get("/menu", (req, res) => {

    service.getMenuList((list, error) => {
        if (error) {
            responseInfo(res, addResultInfo(list, 0, FAILURE_MESSAGE, "", true));
        } {
            responseInfo(res, addResultInfo(list, list == null ? 0 : list.length, SUCESS_MESSAGE, "", true));
        }
    });

});


//得到menu某类数据
app.get('/foodList', (req, res) => {
    var params = url.parse(req.url, true).query;
    let type = params.type;
    let start = parseInt(params.start);
    let pageSize = parseInt(params.pageSize);

    if (isNaN(type) || isNaN(start)|| isNaN(pageSize)) {
        responseInfo(res, addResultInfo("", 0, FAILURE_MESSAGE, "参数错误", false));
    } else {
        service.getFoodList(type, start, pageSize, (list, error) => {
            responseInfo(res, addResultInfo(list, list == null ? 0 : list.length, SUCESS_MESSAGE, "", true));
        });
    }
});

function responseInfo(res, data) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Methods","GET,POST");
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.end(JSON.stringify(data));
}



function addResultInfo(data, total, resultCode,
    msg, success) {
    let map = new Map();
    if (data) {
        map.set("data", data);
    } else {
        map.set("data", "");
    }
    map.set("total", total);
    map.set("code", resultCode);
    map.set("message", msg);
    map.set("success", success);

    return strMaptoObj(map);
}

function strMaptoObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

//上面的代码启动一个服务并监听从 3000 端口进入的所有连接请求。
var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
