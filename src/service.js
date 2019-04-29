import axios from "axios";
//  const = './static/';

export function getData() {
    return new Promise((resolve, reject) => {
        axios
            // .get("'const' + 'menu.json'")
            .get("./static/menu.json")
            .then(response => {
                return resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function getCredentials() {
    return new Promise((resolve, reject) => {
        axios
        .get("./static/user.json")
        .then(response =>{
            return resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
    });
}