const mongoose = require("mongoose");

const customizeSchema = new mongoose.Schema(
  {
    slideImage: {
      type: String,
    },
    firstShow: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const customizeModel = mongoose.model("customizes", customizeSchema);
module.exports = customizeModel;
