var Database = require("./Database");

class Trainer {
    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.password = "";
        this.website = "";
        this.query = "";
        this.db = new Database();
    }


    save = () => {
        this.query = "INSERT INTO trainers(name,email,mobileno,password,website)";
        this.query += "VALUES('" + this.name + "','" + this.email + "','" + this.mobileno + "','" + this.password + "','" + this.website + "')";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    list = () => {
        this.query = "SELECT * FROM trainers ORDER BY name";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }


    get = () => {
        this.query = "SELECT * FROM trainers WHERE id =" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }


    update = () => {
        this.query = " UPDATE trainers ";
        this.query += "SET name = '"+ this.name +"',";
        this.query += " email = '"+ this.email +"',";
        this.query += " mobileno = '"+ this.mobileno +"',";
        this.query += " password = '"+ this.password +"',";
        this.query += " website = '"+ this.website +"' ";
        this.query += " WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    delete = () => {
        this.query = "DELETE FROM trainers WHERE id =" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

}
module.exports = Trainer;