/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import request from 'superagent';

export function authenticatedGet(url, token) {
    return request.get(url).set('Authorization', 'Bearer ' + token);
}

export function authenticatedPut(url, token) {
    return request.put(url).set('Authorization', 'Bearer ' + token);
}

export function authenticatedPost(url, token) {
    return request.post(url).set('Authorization', 'Bearer ' + token);
}
