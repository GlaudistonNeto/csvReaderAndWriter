var Reader = require('./Reader');
var Writer = require('./Writer');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');

var leitor = new Reader();
var escritor = new Writer();

async function main(){
  var dados = await leitor.Read('./users.csv');
  var processeddata = Processor.Process(dados);

  var users = new Table(processeddata);
  
  var html = await HtmlParser.Parse(users);

  escritor.Write(Date.now() + '.html', html);
}

main();