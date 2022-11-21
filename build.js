const { exec } = require('child_process');

const build = async () => {
    console.log('Webpack build')
    await exec('npx webpack --mode production');
    console.log('Copy fonts')
    await exec('cp -R ./src/assets/fonts ./dist/fonts');
    console.log('Copy icons')
    await exec('cp -R ./src/assets/icons/emoji ./dist/icons/emoji');
    console.log('Copy postinstall')
    await exec('cp -R ./postinstall.js ./dist/postinstall.js');
};

build();
