#!/usr/bin/env node
const { exec } = require('child_process');

const publish = async () => {
    console.log('Start script "publish.js"')
    await exec('npm version patch');

    await exec('git add .');
    const pkj = require('./package.json');
    await exec(`git commit -m "Up v${pkj.version}"`);

    console.log(`Version up to ${pkj.version}`);

    exec('git branch --show-current', async (err, stdout, stderr) => {
        if (err) {
            console.log('Error: ', err);
        }
        const branch = stdout.replace('\n', '');
        console.log(`Current branch is ${branch}`);
        await exec(`git push origin ${branch}`);
        console.log(`Branch ${branch} pushed`);
    
        console.log('End script "publish.js"')
    });   
}

publish();