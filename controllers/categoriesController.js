import knex from "../config/knex.js";

export const getCategoriesWithAnimals = async (req, res) => {
  try {
    const categories = await knex("categories").select("*");

    const categoriesWithAnimals = await Promise.all(
      categories.map(async (category) => {
        const animals = await knex("animals")
          .where("category_id", category.id)
          .select("id", "name");

        return {
          id: category.id,
          name: category.name,
          animals,
        };
      })
    );

    res.status(200).json(categoriesWithAnimals);
  } catch (error) {
    console.error("Error fetching categories with animals: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
