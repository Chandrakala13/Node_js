const fs = require('fs');
const readableStream = fs.
createReadStream("docs/blog.txt","utf-8");
       
console.log(readableStream);
const writeableStream = fs.createWriteStream("docs/blog_copy.txt");

readableStream.on('data', (buffer) => {
    writeableStream.write(buffer);  
});
readableStream.on('end', () => {
writeableStream.end();
});

readableStream.on('error', (err) => {
    console.log(err.message);
});

writeableStream.on('error', (err) => {
    console.log(err.message);
});