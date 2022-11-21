const { exec } = require('child_process');
const path = require('path');


const postinstall = async () => {
    console.log('++++++ Postinstall');
    console.log('++++++ ', __dirname);
};

postinstall();
