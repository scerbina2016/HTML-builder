let fs = require("fs");
let path = require("path");


let dataPath = path.resolve(__dirname, "text.txt");
let stream = fs.createReadStream(dataPath, "utf-8");
let data = "";
stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log(data));
