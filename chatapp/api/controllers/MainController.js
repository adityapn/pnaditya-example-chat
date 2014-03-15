
module.exports = {

   index: function (req, res) {
	// send the main home page template for user sign up or login    
    return res.view();
  },

   signup: function (req, res) {
      var username = req.param("username");
	    var password = req.param("password");
      Users.findByUsername(username).done(function(err, user){
          if(!err){
            // check 
            if(user.length > 0){              
              res.send(400,{error:"user already exists"});
            }else{
              Users.create({username: username, password: password}).done(function(error, user) {
                  req.session.user = user;
                  res.send(200,user);
              });
            }
          }else{
            // if there is any issue with database 
            res.send(500,{error:"somethng wrong with database"})
          }
      });
    },

   login: function (req, res) {

	    var username = req.param("username");
	    var password = req.param("password");
	    
      Users.findByUsername(username).done(function(err, user) {
        if(!err){
          // if the user exists
          if(user.length > 0){
            // check for the passwords are same or not
            if (password == user[0].password) {
              req.session.user = user[0];
              // send back the user object back 
              res.send(200, user );   
            }else{
              // actually password is wrong so send message msg 
              res.send(400,{error:"username/password did not match"})
            }  
          }else{            
             // if the username does not exist
             res.send(400,{error:"user does not exist"})
          }
                      
        }else{
            // if we can not query the database
            res.send(500, { error:"something wrong with database" });   
        }
        
      });

    },


    chat: function (req, res) {
      if (req.session.user) {          
          res.view({username: req.session.user.username,title:"My chat application"});
      } else {
          res.redirect('/');
      }
    },

  _config: {}

  
};
