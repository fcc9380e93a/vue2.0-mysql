const db = require('./connDB.js');
//const pageSize = 8;

/**
type:
  1:密码错误
  2:登陆成功
  3:用户名不存在
**/
function checkUser(name, pwd, callback) {
    name = name.trim();
    pwd = pwd.trim();
    db.queryDB((cn, error) => {
        if (error) {
            callback(4,null, error);
        } else {
            let user;
            let sql = "select * from user where name='" + name + "'limit 1;";
            cn.query(sql, (err, rows, fields) => {
                let type;
                if (rows[0]) {
                    type = 2;
                    let item = rows[0];
                    if (pwd === item.password) {
                        type = 1;
                        user = {
                            name: item.name,
                            nickname: item.nickname,
                            email: item.email,
                            gender: item.gender,
                            favorites: item.favorites,
                            img: item.img
                        }
                    }
                } else {
                    type = 3;
                }
                release(cn);
                callback(type, user, null);
            });
        }

    });
}

function existUser(name, callback) {
    db.queryDB((cn, error) => {
        if (error) {
            callback(null, error);
        } else {
            let sql = "select password from user where name='" + name + "'limit 1;";
            cn.query(sql, (err, rows, fields) => {
                let exist = false;
                if (rows[0]) {
                    exist = true;
                }

                release(cn);
                callback(exist, null);
            });
        }

    });
}

function addOrUpdateUser(id, params, callback) {
    let sql;
    if (id === -1) {
        sql = "insert into user(name,password) values(?,?)";
    } else {
        sql = "update  user set name=?,email=?,gender=? where id=?";
    }
    db.queryDB((cn, error) => {
        if (error) {
            callback(null, error);
        }
        cn.query(sql, params, (err, rows, fields) => {
            let success = true;
            if (err) {
                success = false;
            }
            release(cn);
            callback(success, null);
        });
    });

}

/**
type:
   3:服务器异常
   2:用户名已存在
   1:成功
**/
var register = function(username, pwd) {
    var promise = new Promise((resolve, reject) => {
        let type;
        existUser(username,(exist, error) => {
            if (error) {
                type = 3;
                resolve(type);
            } else if (exist) {
                type = 2;
                resolve(type);
            } else {
                //insert table
            addOrUpdateUser(-1,new Array(username,pwd),(success,error)=>{
                  if(success){
                    type = 1;
                  }else{
                    type = 3;
                  }
                  resolve(type);
                });
            }
        });

    });
    return promise;
}


function getMenuList(callback) {
    db.queryDB((cn, error) => {
        if (error) {
            callback(null, error);
        }
        let sql = "select * from menu;";
        cn.query(sql, (err, rows, fields) => {
            let list = new Array();
            if (rows) {
                for (let item of rows) {
                    list.push({
                        id: item.id_type,
                        title: item.type,
                        desc: item.dcrp,
                        url: item.url
                    });
                }
            }
            callback(list, null);
            release(cn);
        });
    });
}


function getFoodList(type, start, pageSize, callback) {
    db.queryDB((cn, error) => {
        if (error) {
            callback(null, error);
        }
        cn.query('SELECT * from food where type= ? limit ?,?', [type, start == 0 ? 0 : start * pageSize, pageSize], (err, rows, fields) => {
            if (err) throw err;
            let list = new Array();
            if (rows) {
                for (let item of rows) {
                    list.push({
                        id: item.food_id,
                        name: item.name,
                        des: item.des,
                        detail: item.detail,
                        price: item.price,
                        img: item.img
                    });
                }
            }
            callback(list, null);
            release(cn);
        });
    });
}

/**
get the count of likes
**/
function getLikes(food_id, callback) {
    db.queryDB((cn, error) => {
        if (error) {
            callback(null, error);
        }
        let sql = "select count(*) from likes where food_id=?;";
        cn.query(sql, [food_id], (err, rows, fields) => {
            let count;
            if (rows) {
                for (let item of rows) {
                    count = JSON.stringify(item).replace(new RegExp(/[^0-9]/g), '');
                }
            }
            release(cn);
            callback(count, null);
        });
    });
}

/**
release connection
**/
function release(cn) {
    cn.release();
}


exports.checkUser = checkUser;
exports.existUser = existUser;
exports.addOrUpdateUser = addOrUpdateUser;
exports.getMenuList = getMenuList;
exports.getFoodList = getFoodList;
exports.getLikes = getLikes;
exports.release = release;
exports.register=register;
