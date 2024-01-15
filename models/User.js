const db = require("../db/db");

class User{
    async get(){
        const users = await db("users").whereNull('deleted_at');
        return users;
    }

    async create(data){
        const user = await db("users").insert(data);
        return user;
    }

    async update(data, id){
        const user = await db("users").where('id', id).update(data);
        return user;
    }

    async delete(id){
        const user = await db("users").where('id', id).update({
            deleted_at: new Date()
        });
        return user;
    }
}

module.exports = new User();