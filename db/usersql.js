/* 
* @Author: zhongwenbin
* @Date:   2017-05-06 14:34:59
* @Last Modified by:   zhongwenbin
* @Last Modified time: 2017-05-06 14:37:12
*/

var UserSQL = {  
                insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
                queryAll:'SELECT * FROM User',  
                getUserById:'SELECT * FROM User WHERE uid = ? ',
              };
 module.exports = UserSQL;