var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');

var leitor = new Reader();

async function main(){
  var dados = await leitor.Read('./users.csv');
  var processeddata = Processor.Process(dados);

  var users = new Table(processeddata);

  console.log(users.rows);
  
  var html = await HtmlParser.Parse(users)

  console.log(html);
}

main();