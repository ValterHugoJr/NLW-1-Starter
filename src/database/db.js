const sqlite = require("sqlite3").verbose()
const db = new sqlite.Database("./src/database/database.db")
module.exports = db
//db.serialize(()=>{
//db.run(`
//  CREATE TABLE IF NOT EXISTS places(
//				id INTEGER PRIMARY KEY AUTOINCREMENT,
//				name TEXT, 
//				image TEXT,				
//				address TEXT, 
//				number TEXT,
//				state TEXT,
//				city TEXT,
//				itens TEXT
//  )
//`)
	//	const query = `
	//	INSERT INTO places(
	//		name,
	//		image,
	//		address,
	//		number,
	//		state,
	//		city,
	//		itens
	//	)VALUES(?,?,?,?,?,?,?)` 
	//	const values = [
	//		"Colectoria",
	//		"http://localhost:3000/assets/reciclagem-eletronicos.png",
	//		"Rua A",
	//		"222",
	//		"SP",
	//		"São Paulo",
	//		"Residuos Eletronicos,Lampadas"
	//	]
	//	function afterInsertData(err){
	//		if(err){
	//			return console.log(err)
	//		}
	//		console.log("Cadastrado com sucesso")
	//		console.log(this)
	//	}
	//db.run(query,values,afterInsertData)
	//db.all('SELECT * FROM places',function(err,rows){
	//	if(err){
	//		return console.log(err)
	//	}
	//	console.log(rows)
	//})		
	//db.run('DELETE FROM places WHERE id = ?',[1],function(err){
	//	if(err){
	//		return console.log(err)
	//	}
	//	console.log("Deletado com sucesso")
	//})	
//})