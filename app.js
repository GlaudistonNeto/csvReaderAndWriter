var Reader = require('./Reader');
var Processor = require('./Processor');

var leitor = new Reader();

async function main(){
  var dados = await leitor.Read('./users.csv');
  var processeddata = Processor.Process(dados);
}

main();