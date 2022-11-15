#!/usr/bin/env node
const { exec } = require('child_process');
const pkj = require('./package.json');

const publish = async () => {
    console.log('Start script "publish.js"')
    await exec('npm version patch');

    console.log(`Version up to ${pkj.version}`);

    exec('git branch --show-current', async (err, stdout, stderr) => {
        if (err) {
            console.log('Error: ', err);
        }
        const branch = stdout.replace('\n', '');
        console.log(`Current branch is ${branch}`);
        await exec(`git push origin ${branch}`);
        console.log(`Branch ${branch} with v${pkj.version} pushed`);
    
        console.log('End script "publish.js"')
    });   
}

publish();