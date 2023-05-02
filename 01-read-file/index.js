import { createReadStream } from 'fs';

const stream = createReadStream('./01-read-file/text.txt',{encoding: 'utf-8'});
stream.on('readable', function(){
    let data = stream.read();
    if(data!=null){console.log(data)};
});
 
stream.on('end',() =>{});