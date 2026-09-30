#!/usr/bin/env node
// Connect with a setup code. Generated from templates/llms.txt 2026.09.69 by scripts/plugin-build.mjs;
// the contract holds the same command. Do not edit here.
'use strict';
process.argv.splice(1, 1);
const fs=require('fs'),p=require('path'),d=p.join(require('os').homedir(),'.uberteach');fetch('https://platform.deepwaterslife.com/api/v1/agent/bootstrap',{method:'POST',headers:{'content-type':'application/json','x-uberteach-docs-version':'2026.09.69'},body:JSON.stringify({setup_code:process.argv[1]})}).then(async r=>{const t=await r.text();let b=null;try{b=JSON.parse(t)}catch{}if(!b||!b.api_key){console.log('沒有拿到金鑰',r.status,t);process.exit(1)}const u=b.user||{},f=p.join(d,'credentials-'+(u.user_id?u.user_id.slice(0,8):'pending')+'.json');fs.writeFileSync(f,JSON.stringify({api_key:b.api_key,user_id:u.user_id||null})+'\n',{mode:0o600});console.log('金鑰已存到',f);console.log('帳號名稱：',u.display_name,'／email：',u.email,'／單位：',u.unit)})
