const menu = require("./FoodSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

const addmenu = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        status: 500,
        message: "File upload failed",
        error: err,
      });
    }

    const newmenu = new menu({
      foodname: req.body.foodname,
      image: req.file ? req.file.filename : "", 
      price: req.body.price,
      category: req.body.category,
      amount: req.body.amount,
      descripition:req.body.descripition
    });

    newmenu
      .save()
      .then((data) => {
        console.log("ok");
        res.json({
          status: 200,
          message: "Menu added successfully",
          result: data,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          status: 500,
          message: "Database error",
          error: error,
        });
      });
  });
};

const viewmenu = (req, res) => {
  menu
    .find()
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        message: "Viewed Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Not Viewed",
        error: err,
      });
    }); 
};


const viewmenuById = (req, res) => {
  menu
    .findById({_id:req.params.id})
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        message: "Viewed Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Not Viewed",
        error: err,
      });
    }); 
};
const editfood = (req,res) => {
  menu.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      foodname: req.body.foodname,
      image: req.file,
      price: req.body.price,
      category: req.body.category,
    }
  )
  .exec()
  .then((data) => {
    res.status(200).json({
      status: 200,
      data: data,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: err,
    });
  });
}

const deletefood = (req, res) => {
  menu.findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Data Deleted",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};

module.exports = { addmenu, viewmenu,editfood,deletefood,viewmenuById};
