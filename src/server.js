const express = require("express")
const app = express()
const db = require("./database/db")
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
	express:app,
	noCache:true
})
//ROTAS 
app.get('/',(request,response)=>{
	return response.render("index.html")
})
app.get('/points',(request,response)=>{
	return response.render("point.html")
})
app.post('/points',(request,response)=>{
		const query = `
		INSERT INTO places(
			name,
			image,
			address,
			number,
			state,
			city,
			itens
		)VALUES(?,?,?,?,?,?,?)` 
		const values = [
			request.body.name,
			request.body.image,
			request.body.address,
			request.body.number,
			request.body.state,
			request.body.city,
			request.body.itens
		]
		function afterInsertData(err){
			if(err){
				return response.render("Erro no cadastro")
			}
		return response.render("point.html",{saved:true})
		}
	db.run(query,values,afterInsertData)
})
app.get('/search',(request,response)=>{
	const search = request.query.search
	if(search ==""){
		return response.render("search.html",{total_rows:0})
	}
	db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,function(err,rows){
		if(err){
			return console.log(err)
		}
		const total_rows = rows.length
	})		
})
app.listen(3000)
//<footer><p>©<span>2020</span>COPYRIGHT ©. TODOS OS DIREITOS RESERVADOS.</p></footer>
