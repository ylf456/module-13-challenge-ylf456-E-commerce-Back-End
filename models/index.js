// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag
});

/*
ProductTag.hasMany(Product, {
  foreignKey: "product_id",
  onDelete:"CASCADE"
});
*/

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
},
)

/*
ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

Tag.hasOne(ProductTag, {
  foreignKey: "tag_id",
});
*/
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
