
const db = require("../models");

module.exports = async function() {
  
  var answer = false;  // is tester badge_id exist?

  await                 // a search for known badge_id of valet tester, 
    db.Valet.findOne({  // if found, flag it with variable "answer"
      where: {          // *notes - at footer
        badge_id: "0101010101",
        first_name: "John",
        last_name: "Doe"
      }

    }).then(testValet => {
      if(testValet.dataValues.badge_id === "0101010101")
        answer = true;

    }).catch(error => {
      console.log(error);
    });

  if(answer) return; 

  // inserting valets tester badge_id
  db.Valet.bulkCreate([
    {
      badge_id: "0101010101",
      first_name: "John",
      last_name: "Doe"
    },
    {
      badge_id: "9876543210",
      first_name: "Josh",
      last_name: "Dahl"
    }, 
    {
      badge_id: "0123456789",
      first_name: "Jeff",
      last_name: "Del"
    }
  ], { validate: true 
  }).catch(error => {

    console.log(error);
  });
}

/*
the code block of
      db.Valet.findOne
need to have .then and .catch in that order, else the processing
goes haywire...
*/