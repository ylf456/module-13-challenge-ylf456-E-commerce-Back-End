const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ Product }],
    });
    if (!categoryData) {
      res.status(404).json("No catergory is found!");
      return;
    }
    res.status.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ Product }],
    });
    if (!categoryData) {
      res.status(404).json("No catergory with this id is found!");
      return;
    }
    res.status.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res(200).json(newCategory);
  } catch (err) {
    res(400).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const newcategoryNata = await Category.update({
      category_name: req.body.category_name
    }, {
      where: {
        id: req.params.id,
      },
    });
    if (!newcategoryNata) {
      res.status(404).json("No category with that id is found");
      return;
    }
    res.status(200).json(newcategoryNata);
  } catch (err) {
    res.status(500).json(err);
  }

  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({
        message: "No category found with that id",
      });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
