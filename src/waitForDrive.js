const Runner = require('./Runner')

function waitForDrive(driveName) {
    return new Promise((res, rej) => {
        Runner.runUntil('wmic logicaldisk where "VolumeName=\'' + driveName + '\'" get DeviceID', (err, stdout, int, resolve, reject) => {
            if (encodeURIComponent(stdout) === '%0D%0D%0A%0D%0D%0A') return;
            stdout.split('\n').forEach(drive => {
                if (encodeURIComponent(drive) === '%0D%0D') return;
                if (encodeURIComponent(drive) === 'DeviceID%20%20%0D%0D') return;
                if (encodeURIComponent(drive) === '') return;
                clearInterval(int);
                resolve(drive.trim());
            })
        }).then(resa => {
            res(resa)
        })
    })
}

module.exports = {
    waitForDrive
}
