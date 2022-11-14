#!/usr/bin/env node
const { exec } = require('child_process');

const publish = async () => {
    console.log('Start script "publish.js"')
    await exec('npm version patch');

    exec('git branch --show-current', (err, branch, stderr) => {
        if (err) {
            console.log('Error: ', err);
        }
    
        console.log(`Current branch is ${branch}`);
        exec(`git push origin ${branch}`);
        console.log(`Branch ${branch} pushed`);
    
        console.log('End script "publish.js"')
    });   
}

publish();