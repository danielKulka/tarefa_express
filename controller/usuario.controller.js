const usuarios = [
   {
    id: 1,
    nome: "daniel",
    idade: 25
   },
   {
    id: 2,
    nome: "victoria",
    idade: 19
   },
   {
    id: 3,
    nome: "melissa",
    idade: 18
   },
   {
    id: 4,
    nome: "carlos",
    idade: 23
   }
]

const find = (req,res) => {
  const id = req.params.id;
  let found = false;

  usuarios.map( function(valor){
    if(valor.id == id){
      found = true;
      return res.send(valor);
    }
  });
  
  if(!found){
    res.status(404).send({message: "usuario não encontrado"})
  }
}

const findAllUsuarios = (req,res) => {
  res.send(usuarios);
}

const createUsuario = (req,res) => {
  const usuario = req.body;
  if(Object.keys(usuario).length === 0){
    return res.status(400).send({message:"o corpo da mensagem está vazio"});
  }

  if(!usuario.id){
    return res.status(400).send({message:"campo 'id' não encontrado!"})
  }

  if(!usuario.nome){
    return res.status(400).send({message:"campo 'nome' não encontrado!"})
  }

  if(!usuario.idade){
    return res.status(400).send({message:"campo 'idade' não encontrado!"})
  }

  usuarios.push(usuario);
  res.status(201).send(usuarios);
}

const updateUsuario = (req,res) => {
  const id = req.params.id;
  const usuario = req.body;
  let found = false;

  if(Object.keys(usuario).length === 0){
    return res.status(400).send({message:"o corpo da mensagem está vazio"});
  }

  if(!usuario.id){
    return res.status(400).send({message:"campo 'id' não encontrado!"})
  }

  if(!usuario.nome){
    return res.status(400).send({message:"campo 'nome' não encontrado!"})
  }

  if(!usuario.idade){
    return res.status(400).send({message:"campo 'idade' não encontrado!"})
  }

  usuarios.map( function(valor,index){
    if(valor.id == id){
      found = true;
      usuarios[index] = usuario;
      return res.send(usuarios[index]);
    }
  });
  
  if(!found){
    res.status(404).send({message: "usuario não encontrada"})
  }
}

const deleteUsuario = (req,res) => {
  const id = req.params.id;
  let found = false;

  usuarios.map( function(valor, index){
    if(valor.id == id){
      found = true;
      usuarios.splice(index,1);
      return res.send(valor);
    }
  });
  
  if(!found){
    res.status(404).send({message: "usuario não encontrada"})
  }
}

module.exports = {
  find,
  findAllUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario
}