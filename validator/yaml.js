#!/usr/bin/env node

const fs = require('fs');
const yaml = require('js-yaml');
const SwaggerParser = require('@apidevtools/swagger-parser');

const args = process.argv.slice(2);
const folder = '../' + (args?.[0] || 'references/1.0.0');

const failValidation = (message) => {
  console.log('------------------------- VALIDATOR FAILED --------------------------')
  console.log(message)
  process.exit(1);
};

try {

  fs.readdir(folder, (err, files) => {
    files.forEach(async file => {
      const content = fs.readFileSync(`${folder}/${file}`, 'utf8');
      
      try {
        const apiJson = yaml.load(content);
        if (!apiJson.paths || !Object.keys(apiJson.paths).length) {
          failValidation('No path provided!');
        }
        const parsedData = await SwaggerParser.validate(apiJson, );
        console.log(`${file} - PASSED`);
      
      } catch (e) {
        failValidation(e.message);
      }
    });
  });
} catch (e) {
  failValidation(e.message);
}
