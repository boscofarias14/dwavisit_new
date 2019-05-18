const express = require("express");
const port = 3000;
const app = express();
var MongoClient = require("mongodb").MongoClient;


// http://localhost:3000/
app.get('/', (req, resp) => {
resp.header("Access-Control-Allow-Origin", "*");
   MongoClient.connect("mongodb://localhost:27017/dwavisit", 
   { useNewUrlParser: true },
   function(err, client){
       if(err) throw err;
       else{
           var db = client.db("dwavisit");
           var collection = db.collection("moradores").find().toArray(function(err, result){
               if(err) throw err
               resp.send(result);
               resp.end();
           })
       }
   })

});

app.get('/moradores', (req, resp) => {
    resp.header("Access-Control-Allow-Origin", "*");
   MongoClient.connect("mongodb://localhost:27017/dwavisit", 
   { useNewUrlParser: true },
   function(err, client){
       if(err) throw err;
       else{
           var db = client.db("dwavisit");
           var collection = db.collection("moradores").find().toArray(function(err, result){
               if(err) throw err
               resp.send(result);
               resp.end();
           })
       }
   })

});

app.get('/visitantes', (req, resp) => {
    // Select para TODOS os visitantes.
    var p = {nome: "Fabio", cpf: "99988877766"};
    resp.send(JSON.stringify(p));
});

app.get('/moradores/:id_morador', (req, resp) => {
    // Select para todos UM morador específico. -> Botão EDITAR (morador)
    var p = {nome: "Fabio", cpf: "99988877766"};
    resp.send(JSON.stringify(p));
});

app.get('/visitantes/:id_visitante', (req, resp) => {
    // Select para todos UM visitante específico. -> Botão EDITAR (Visitante)
    var p = {nome: "Fabio", cpf: "99988877766"};
    resp.send(JSON.stringify(p));
});

app.put('/visitantes/:id_visitante', (req, resp) => {
    //Update para um visitante específico. -> Botão ATUALIZAR (visitante)
})

app.put('/moradores/:id_morador', (req, resp) => {
    //Update para um morador específico. -> Botão ATUALIZAR (morador)
})

app.delete('/moradores/:id_morador', (req, resp) => {
    //Delete para um morador específico. -> Botão EXCLUIR (morador)
})

app.delete('/visitantes/:id_visitante', (req, resp) => {
    //Delete para um visitante específico. -> Botão EXCLUIR (visitante)
})

app.post('/cadastro-morador', (req, resp) => {
    //Criar um morador específico. -> Botão ADICIONAR (morador)
})
app.post('/cadastro-visitante', (req, resp) => {
    //Criar um visitante específico. -> Botão ADICIONAR (visitante)
})




app.get('/moradores', (req, resp) => {
    if (req.params.cpf === "99988877766") {
        resp.send(JSON.stringify({ error: "CPF Verificado e Válido" }));
    } else {
        resp.send(JSON.stringify({ error: "Miau" }));
    }
});


app.post('/pessoa', (req, resp) => {
    // Conectar no mongodb
    // pegar dados da req
    // inserir no mongodb
});

app.listen(port, () => console.log("Requisição Realizada"));