'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      // alter table
      table.increments()
      table.string("username")
      table.integer("email")
      table.integer("password")
      table.timestamps()
    })
  }

  down () {
    this.create('profiles', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProfileSchema
