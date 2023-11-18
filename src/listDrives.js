const Runner = require('./Runner')

function listDrives() {
    return new Promise((res, rej) => {
        Runner.runOnce('wmic logicaldisk get DeviceID', (err, stdout, resolve, reject) => {
            let real = [];
            stdout.split('\n').forEach(drive => {
                if (encodeURIComponent(drive) === '%0D%0D') return;
                if (encodeURIComponent(drive) === 'DeviceID%20%20%0D%0D') return;
                if (encodeURIComponent(drive) === '') return;
                if (drive === 'DeviceID') return;
                real.push(drive.trim());
            })
            resolve(real)
        }).then(resa => {
            res(resa)
        })
    })
}

function listDrivesSync() {
    let stdout = require('child_process').execSync('wmic logicaldisk get DeviceID').toString();
    let real = [];
    stdout.split('\n').forEach(drive => {
        if (encodeURIComponent(drive) === '%0D%0D') return;
        if (encodeURIComponent(drive) === 'DeviceID%20%20%0D%0D') return;
        if (encodeURIComponent(drive) === '') return;
        if (drive === 'DeviceID') return;
        real.push(drive.trim());
    })
    return real;
}

module.exports = {
    listDrives,
    listDrivesSync
}
