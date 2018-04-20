var mongoose = require("mongoose");

var techSchema = new mongoose.Schema({
   name: String,
   price: String,
   quantity: Number,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ],
   belong: String
});

module.exports = mongoose.model("Wishlist", techSchema);