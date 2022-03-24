// Create FindAVetDatabase
let database = new class {
  constructor(name, tables=[]){
    this.name = name;
    this.tables = tables;
  }

  addTable(table){
    this.tables.push(table);
  }

  getDatabase(){
    return {name: this.name, tables: this.tables};
  }

}('FindAVetDatabase');

// Create vetTable
let vetTable = new class {
  constructor(name, data=[]){
    this.name = name;
    this.data = data; 
  }

  addData(info){
    this.data.push(info);
  }
}('Veterinarian');

// Create userTable
let userTable = new class {
  constructor(name, data=[]){
    this.name = name;
    this.data = data; 
  }

  addData(info){
    this.data.push(info);
  }
}('User');


// Add tables to database
database.addTable(vetTable);
database.addTable(userTable);

export{database, userTable, vetTable};
