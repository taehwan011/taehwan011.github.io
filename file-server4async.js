<<<<<<< HEAD
const http = require("http"); 
const fsProm = require("fs").promises; 

const server = http.createServer( async (req, resp) => {
    // get the filename from the URL
    let urlFile = url.parse(req.url).pathname; 
    // if no file provided in request, default to index.html 
    if (urlFile.length == 1) urlFile = "/index.html"; 
    console.log("Filename in URL=" + urlFile); 
    // turn it into the actual file system filename 
    const localPath = __dirname + "/public"; 
    let localFile = path.join(localPath, urlFile); 
    console.log("Filename on device=" + localFile); 
    // try reading the file
    
    try { 
        const contents = await fsProm.readFile(localFile);
        // based on the URL path, extract the file extension
        const ext = path.parse(localFile).ext;
        // lookup mime type for this extension
        const mime = mimeTypes.find( m => m[0] == ext); 
        // specify the mime type of file via header
        const header = { "Content-type": mime[1] || "text/plain" };
        resp.writeHead(200, header);
        // output the content of file
        resp.write(contents);
        resp.end();
        } 
        catch { 
        output500Error(resp);
        } 
    });
   
   let port = 8080; 
   server.listen(port); 
   console.log("Server running at port= " + port);

=======
const http = require("http"); 
const fsProm = require("fs").promises; 

const server = http.createServer( async (req, resp) => {
    // get the filename from the URL
    let urlFile = url.parse(req.url).pathname; 
    // if no file provided in request, default to index.html 
    if (urlFile.length == 1) urlFile = "/index.html"; 
    console.log("Filename in URL=" + urlFile); 
    // turn it into the actual file system filename 
    const localPath = __dirname + "/public"; 
    let localFile = path.join(localPath, urlFile); 
    console.log("Filename on device=" + localFile); 
    // try reading the file
    
    try { 
        const contents = await fsProm.readFile(localFile);
        // based on the URL path, extract the file extension
        const ext = path.parse(localFile).ext;
        // lookup mime type for this extension
        const mime = mimeTypes.find( m => m[0] == ext); 
        // specify the mime type of file via header
        const header = { "Content-type": mime[1] || "text/plain" };
        resp.writeHead(200, header);
        // output the content of file
        resp.write(contents);
        resp.end();
        } 
        catch { 
        output500Error(resp);
        } 
    });
   
   let port = 8080; 
   server.listen(port); 
   console.log("Server running at port= " + port);

>>>>>>> 623406ce05a49376956a99de7e8b1afd6b6a50d4
