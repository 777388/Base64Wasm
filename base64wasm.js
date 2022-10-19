
var fs = require('fs'); 

function reader(a){
    readthis = fs.readFile(a, 'utf-8', function(err, data) {
            if( !err ){
                var buf = Buffer.from(data, 'utf-8').toString('base64');
                console.log("fetch('data:application/wasm;base64,"+buf+"').then((response) => {console.log(`Received response: ${response.status}`);});");
                console.log("\r\n\r\n\r\n\r\n");
                console.log('function reqListener () {console.log(this.responseText);} const req = new XMLHttpRequest(); req.addEventListener("load", reqListener); req.open("GET", "data:application/wasm;base64,'+buf+'"); req.send();');
                console.log("\r\n\r\n\r\n\r\n");
                console.log(buf);
        }})}


test=reader(process.argv[2]);
