const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);



const start = async() => {
    try {
        const first = await readFilePromise('./Node-Tutorial/content/first.txt', 'utf8');
        const second = await readFilePromise('./Node-Tutorial/content/second.txt', 'utf8');
        await writeFilePromise('./Node-Tutorial/content/result-mind-grenade.txt', `This is awesome !!! : ${first} ${second}`, {flag: 'a'});
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
}

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// getText('./Node-Tutorial/content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err));