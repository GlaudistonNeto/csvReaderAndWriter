class Processor{
  static Process(data){
    var arr = data.split('\r\n');
    var rows = [];

    arr.forEach(row => {
      var array = row.split(',');
      rows.push(array);
    });

    return rows;
  }
}

module.exports = Processor;