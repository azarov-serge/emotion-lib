#!/usr/bin/env node
const { exec } = require('child_process');
var pkj = require('./package.json');

const publish = async () => {
    console.log('Start script "publish.js"')
    await exec('npm version patch');
    console.log(`Version up to ${pkj.version}`);

    await exec('git add .');
    await exec(`git commit -m "Up v${pkj.version}"`);

    exec('git branch --show-current', async (err, branch, stderr) => {
        if (err) {
            console.log('Error: ', err);
        }
    
        console.log(`Current branch is ${branch}`);
        await exec(`git push origin ${branch}`);
        console.log(`Branch ${branch} pushed`);
    
        console.log('End script "publish.js"')
    });   
}

publish();