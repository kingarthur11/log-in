const dbs = require('../util/dataBase');

exports.getLogin = (req, res, next) => {
    res.render('login/login');
};

exports.postLogin = (req, res, next) => { 
    const data = {emailPage: req.body.emailPage, password: req.body.password};
    const sql = "INSERT INTO pages SET ?";
    const query = dbs.query(sql, data, (err, results) => {
        if(err) throw err;         
        return res.redirect('/details');        
    });        
};

exports.getDetails = (req, res, next) => { 
   const sql = "SELECT * FROM pages";
    const query = dbs.query(sql, (err, results) => {
        if(err) throw err; 
        return res.render('login/details', {
            pages: results
        });        
    });        
};

exports.getDelete = (req, res, next) => { 
    const sql = "DELETE FROM pages WHERE IdPage = " +req.params.IdPage+"";
     const query = dbs.query(sql, (err, results) => {
         if(err) throw err; 
         const sql = "SELECT * FROM pages";
         const query = dbs.query(sql, (err, results) => {
            if(err) throw err; 
            return res.render('login/details', {
                pages: results
            });        
        });        
     });        
 };
 
       
             
exports.getSelect = (req, res, next) => {
    const sql = "SELECT * FROM pages WHERE IdPage ="  +req.params.IdPage+"";
        const query = dbs.query(sql, (err, results) => {
            if(err) throw err; 
                    return res.render('login/details', {
                    pages: results
                });
        });  
 };
    