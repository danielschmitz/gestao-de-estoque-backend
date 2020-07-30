// criado com o comando: knex migrate:make criar_tabela_usuarios

exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('nome', 80).notNullable()
        table.string('senha', 80).notNullable()
        table.string('email', 80).notNullable()
        table.string('resetSenha', 80)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
};
