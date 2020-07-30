// Criando com o comando  knex seed:make usuarios

const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  const senhaFraca = '123456'
  const hash = bcrypt.hashSync(senhaFraca, 10);
  console.log(hash)
  // Primeiro remove todos os registros, depois adiciona 3 entradas
  return knex('usuarios').del()
    .then(function () { 
      return knex('usuarios').insert([
        { id: 1, nome: 'user1', senha: hash, email: 'user1@gmail.com' },
        { id: 2, nome: 'user2', senha: hash, email: 'user2@gmail.com' },
        { id: 3, nome: 'user3', senha: hash, email: 'user3@gmail.com' }
      ]);
    });
};
