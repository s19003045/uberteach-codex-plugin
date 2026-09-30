#!/usr/bin/env node
// Create an app and save its project key. Generated from templates/llms.txt 2026.09.70 by scripts/plugin-build.mjs;
// the contract holds the same command. Do not edit here.
'use strict';
process.argv.splice(1, 1);
const fs=require('fs'),p=require('path'),[c,slug,archetype,name,description]=process.argv.slice(1),g=p.join(require('os').homedir(),'.uberteach','git');fs.mkdirSync(g,{recursive:true});const key=JSON.parse(fs.readFileSync(c,'utf8')).api_key;fetch('https://platform.deepwaterslife.com/api/v1/apps',{method:'POST',headers:{'content-type':'application/json',authorization:'Bearer '+key,'x-uberteach-docs-version':'2026.09.70'},body:JSON.stringify({name,slug,archetype,description})}).then(async r=>{const t=await r.text();let b=null;try{b=JSON.parse(t)}catch{}if(!b||!b.project_token){console.log('沒有建立',r.status,t);process.exit(1)}const f=p.join(g,slug);fs.writeFileSync(f,'https://oauth2:'+b.project_token+'@'+new URL(b.repo_url).host+'\n',{mode:0o600});console.log('專案鑰匙已存到',f.split(p.sep).join('/'));console.log('repo：',b.repo_url,'／負責人：',b.owner&&b.owner.display_name)})
