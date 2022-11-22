const fs = require('fs');

fs.copyFile('./src/assets/fonts/', './dist/fonts1', (err) => {
  if (err) throw err;
  console.log('Fonts was copied');
});