// Requirements
const qr = require('qrcode');
const fs = require('node:fs');
const path = require('node:path');

// Variables
var amount = 10;
var startId = 0;
const destination = path.join(__dirname, '/output');
const filename = 'qr_';
const extension = '.png';
const url = 'https://the-conference-qr.p7p4ktlva2q.eu-de.codeengine.appdomain.cloud/api/qr-redirect/';
const config = {
  type: 'png'
};

// Generator function 
// -Rrecursive, runs until an error happens or it finishes
//  writing all images
function generate (id) {
  const filePath = `${destination}/${filename}${id}${extension}`;
  const targetUrl = `${url}${id}`;

  qr.toFile(filePath, targetUrl, config, (error) => {
    if (error) {
      console.log('Error: ', error);
      console.log('Failed to finish generating QR codes.');
    } else if (id < amount - 1) {
      generate(id + 1);
    } else {
      console.log(`Finished creating ${amount} QR codes.`);
    }
  });
}

// Generate output folder if it does not exist
const outputDirectory = './output';
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Start generating QR codes to the output folder
console.log(`Starting generation of ${amount} QR codes.`);
generate(startId);
