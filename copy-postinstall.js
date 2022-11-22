const fs = require('fs');

fs.copyFile('./postinstall.js', './dist/postinstall.js', (err) => {
  if (err) throw err;
  console.log('postinstall.js was copied to ./dist/postinstall.js');
});