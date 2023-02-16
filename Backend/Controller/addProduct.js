const ProductModel = require("../Model/products.model");

const AddProduct = async (req, res) => {
  const { title, category, price, quantity, status, image } = req.body;
  try {
    const newProduct = new ProductModel({
      title,
      category,
      price,
      quantity,
      status,
      image,
    });
    const savedModel = await newProduct.save();
    console.log(savedModel);
    if (savedModel) {
      return res.status(200).send({
        status: true,
        message: "Product Added successfully",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.send({
      status: false,
      message: `Oops an error Occured -${error}`,
    });
  }
};

module.exports = AddProduct;
