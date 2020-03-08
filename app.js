var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');

var leitor = new Reader();

async function main(){
  var dados = await leitor.Read('./users.csv');
  var processeddata = Processor.Process(dados);

  var users = new Table(processeddata);
  console.log(users.columnCount);
  console.log(users.RowCount);
}

main();