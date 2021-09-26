/** Command-line tool to generate Markov text. */

const markov = require('./markov');
const axios = require('axios');
const fs = require('fs');
const process = require('process');

function catFile(file){
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            console.log(`File ${file} cannot be found!`)
            process.exit(1);
        }else{
            console.log(new markov.MarkovMachine(data));
        }
    })
}

async function catUrl(url){
        await axios.get(url)
        .then(res => {console.log(new markov.MarkovMachine(res.data))})
        .catch(err => {console.log(`The URL ${url} could not be found!`)})
}

if (process.argv[2] == 'file'){
    file = process.argv[3];
    catFile(file);
}else{
    url = process.argv[3];
    catUrl(url);
}