// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "catergory_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category,{
  foreignKey:"catergory_id"
})

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag,{
  foreignKey:"product_id",
})

ProductTag.belongsToMany(Product,{
  foreignKey:"product_id"
})

// Tags belongToMany Products (through ProductTag)
ProductTag.belongsTo(Tag,{
  foreignKey:"tag_id",
  onDelete:"CASCADE",
})

Tag.hasOne(ProductTag,{
  foreignKey:"tag_id",
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
