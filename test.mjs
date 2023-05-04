import {execSync} from 'node:child_process';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// env
console.log('---start-env---');
for(const [key, value] of Object.entries(process.env)){
  console.log(`${key}=${value}`);
}
console.log('---end-env---');
await timeout(5000);

// dpkg
console.log('---start-dpkg---');
try{
  console.log(execSync(`dpkg-query -W -f='\${binary:Package}#;SPLIT;#\${Version}#;SPLIT;#\${binary:Summary}#;SPLIT;#\${Maintainer}\n'`).toString());
}catch(err){
  console.error(err);
}
await timeout(5000);
console.log('---end-dpkg---');