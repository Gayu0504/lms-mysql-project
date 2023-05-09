var Database = require("./Database");
class Admin {
    
    constructor(){
    this.id = 0;
    this.name = "";
    this.email = "";
    this.password = "";
    this.db = new Database();
    this.query = "";
    }


    save = () => {
        this.query = "INSERT INTO admins(name,email,password)";
        this.query += "VALUES ('" + this.name + "','" + this.email + "','" + this.password + "')";
        return new Promise((resolve,reject)=>{
            this.db.query(this.query,(err,result)=>{
                if(err)
                reject(err);
            resolve(result);
            });
        });
        
    }

    update = () => {
        this.query = "UPDATE admins SET name = '"+ this.name +"'";
        this.query += ",email = '"+ this.email +"',";
        this.query += "password = '"+ this.password +"'";
        this.query += "WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.query,(err,result)=>{
                if(err)
                reject(err);
            resolve(result);
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM admins ORDER BY name ";
        return new Promise((resolve,reject)=>{
            this.db.query(this.query,(err,result)=>{
                if(err)
                reject(err);
            resolve(result);
            });
        });
    }

    get = () => {
        this.query = "SELECT * FROM admins WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.query,(err,result)=>{
                if(err)
                reject(err);
            resolve(result);
            });
        });
    }

    delete = () => {
        this.query = "DELETE FROM admins WHERE id = " + this.id;
        return new Promise((resolve,reject)=>{
            this.db.query(this.query,(err,result)=>{
                if(err)
                reject(err);
            resolve(result);
            });
        });
    }

}
module.exports = {
    Admin: Admin
}