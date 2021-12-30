/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var environment = process.env.NODE_ENV;
var port = -1;
switch (environment) {
case "production":
    port = 3000;
    break;
default:
    port = 30000;
    break;
}

export const DATA_URL_ROOT = 'http://localhost:' + port;

