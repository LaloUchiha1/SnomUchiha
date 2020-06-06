var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'SnomUchiha',
  description: 'Bot de Discord.',
  script: 'C:\\Users\\IDS Comercial\\Pictures\\GIF\\den-bot-master\\index.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();