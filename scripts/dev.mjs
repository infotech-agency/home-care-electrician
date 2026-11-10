import {spawn} from 'node:child_process';
import http from 'node:http';import fs from 'node:fs';import path from 'node:path';
const args=process.argv.slice(2);const port=args.includes('--port')?args[args.indexOf('--port')+1]:'3000';
if(args.includes('--strictPort')&&fs.existsSync('out/index.html')){
 const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain'};
 http.createServer((req,res)=>{const base=path.resolve('out');let file=path.join(base,decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(base+path.sep)&&file!==base){res.writeHead(403).end();return}if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(!fs.existsSync(file)){res.writeHead(404).end('Not found');return}res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res)}).listen(Number(port),'0.0.0.0',()=>console.log('Production export preview on '+port));
}else{const child=spawn(process.execPath,['node_modules/next/dist/bin/next','dev','--hostname','0.0.0.0','--port',port],{stdio:'inherit'});child.on('exit',c=>process.exit(c??0));}
