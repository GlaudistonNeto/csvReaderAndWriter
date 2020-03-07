const fs = require('fs');
const util = require('util');

// var newFunctionWithPromise = util.promisify(oldFunctionWithCallback)

class Reader{

  constructor()  {
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath){
    try{
      return await this.reader(filepath, 'utf8');
    }catch(err){
      return undefined;
    }    
  }
}

module.exports = Reader;