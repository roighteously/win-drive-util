const child = require('child_process');

function runUntil(command, condition) {
    return new Promise((resolve, reject) => {
        let int = setInterval(() => {
            child.exec(command, (error, stdout) => condition(error,stdout,int,resolve,reject));
        },50)
    })
}

function runOnce(command, condition) {
    return new Promise((resolve, reject) => {
        child.exec(command, (error, stdout) => condition(error,stdout,resolve,reject));
    })
}

module.exports = {
    runUntil,
    runOnce
}
