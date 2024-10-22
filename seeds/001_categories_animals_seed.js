export const seed = async (knex) => {
  await knex.transaction(async (trx) => {
    await trx("scores").del();
    await trx("users").del();
    await trx("animals").del();
    await trx("categories").del();

    await trx("categories").insert([
      { name: "underwater" },
      { name: "wild" },
      { name: "birds" },
      { name: "insects" },
      { name: "farm" },
    ]);

    const categories = await trx("categories").select("id", "name");
    const categoryMap = Object.fromEntries(
      categories.map((cat) => [cat.name, cat.id])
    );

    await trx("animals").insert([
      { name: "dolphin", category_id: categoryMap["underwater"] },
      { name: "lion", category_id: categoryMap["wild"] },
      { name: "eagle", category_id: categoryMap["birds"] },
      { name: "bee", category_id: categoryMap["insects"] },
      { name: "cow", category_id: categoryMap["farm"] },
      { name: "shark", category_id: categoryMap["underwater"] },
      { name: "walrus", category_id: categoryMap["underwater"] },
      { name: "stingray", category_id: categoryMap["underwater"] },
      { name: "sea turtle", category_id: categoryMap["underwater"] },
      { name: "narwhal", category_id: categoryMap["underwater"] },
      { name: "seal", category_id: categoryMap["underwater"] },
      { name: "whale", category_id: categoryMap["underwater"] },
      { name: "starfish", category_id: categoryMap["underwater"] },
      { name: "orca", category_id: categoryMap["underwater"] },
      { name: "crab", category_id: categoryMap["underwater"] },
      { name: "lobster", category_id: categoryMap["underwater"] },
      { name: "sea lion", category_id: categoryMap["underwater"] },
      { name: "jellyfish", category_id: categoryMap["underwater"] },
      { name: "seahorse", category_id: categoryMap["underwater"] },
      { name: "octopus", category_id: categoryMap["underwater"] },
      { name: "clownfish", category_id: categoryMap["underwater"] },
      { name: "sea otter", category_id: categoryMap["underwater"] },
      { name: "eel", category_id: categoryMap["underwater"] },
      { name: "crocodile", category_id: categoryMap["wild"] },
      { name: "monkey", category_id: categoryMap["wild"] },
      { name: "tiger", category_id: categoryMap["wild"] },
      { name: "kangaroo", category_id: categoryMap["wild"] },
      { name: "cheetah", category_id: categoryMap["wild"] },
      { name: "wolf", category_id: categoryMap["wild"] },
      { name: "leapard", category_id: categoryMap["wild"] },
      { name: "meerkat", category_id: categoryMap["wild"] },
      { name: "deer", category_id: categoryMap["wild"] },
      { name: "koala", category_id: categoryMap["wild"] },
      { name: "squirrel", category_id: categoryMap["wild"] },
      { name: "hippopotamus", category_id: categoryMap["wild"] },
      { name: "armadillo", category_id: categoryMap["wild"] },
      { name: "fox", category_id: categoryMap["wild"] },
      { name: "skunk", category_id: categoryMap["wild"] },
      { name: "panther", category_id: categoryMap["wild"] },
      { name: "tortoise", category_id: categoryMap["wild"] },
      { name: "zebra", category_id: categoryMap["wild"] },
      { name: "giraffe", category_id: categoryMap["wild"] },
      { name: "rhinoceros", category_id: categoryMap["wild"] },
      { name: "coyote", category_id: categoryMap["wild"] },
      { name: "hedgehog", category_id: categoryMap["wild"] },
      { name: "polar bear", category_id: categoryMap["wild"] },
      { name: "snake", category_id: categoryMap["wild"] },
      { name: "elephant", category_id: categoryMap["wild"] },
      { name: "bear", category_id: categoryMap["wild"] },
      { name: "panda", category_id: categoryMap["wild"] },
      { name: "gorilla", category_id: categoryMap["wild"] },
      { name: "hummingbird", category_id: categoryMap["birds"] },
      { name: "macaw", category_id: categoryMap["birds"] },
      { name: "kingfisher", category_id: categoryMap["birds"] },
      { name: "ostrich", category_id: categoryMap["birds"] },
      { name: "pigeon", category_id: categoryMap["birds"] },
      { name: "penguin", category_id: categoryMap["birds"] },
      { name: "rooster", category_id: categoryMap["birds"] },
      { name: "seagull", category_id: categoryMap["birds"] },
      { name: "parrot", category_id: categoryMap["birds"] },
      { name: "vulture", category_id: categoryMap["birds"] },
      { name: "goose", category_id: categoryMap["birds"] },
      { name: "peacock", category_id: categoryMap["birds"] },
      { name: "dove", category_id: categoryMap["birds"] },
      { name: "woodpecker", category_id: categoryMap["birds"] },
      { name: "swan", category_id: categoryMap["birds"] },
      { name: "hen", category_id: categoryMap["birds"] },
      { name: "turkey", category_id: categoryMap["birds"] },
      { name: "toucan", category_id: categoryMap["birds"] },
      { name: "flamingo", category_id: categoryMap["birds"] },
      { name: "falcon", category_id: categoryMap["birds"] },
      { name: "owl", category_id: categoryMap["birds"] },
      { name: "duck", category_id: categoryMap["birds"] },
      { name: "sparrow", category_id: categoryMap["birds"] },
      { name: "owl", category_id: categoryMap["birds"] },
      { name: "cockroach", category_id: categoryMap["insects"] },
      { name: "ant", category_id: categoryMap["insects"] },
      { name: "ladybug", category_id: categoryMap["insects"] },
      { name: "caterpillar", category_id: categoryMap["insects"] },
      { name: "housefly", category_id: categoryMap["insects"] },
      { name: "firefly", category_id: categoryMap["insects"] },
      { name: "grasshopper", category_id: categoryMap["insects"] },
      { name: "beetle", category_id: categoryMap["insects"] },
      { name: "praying mantis", category_id: categoryMap["insects"] },
      { name: "wasp", category_id: categoryMap["insects"] },
      { name: "dragonfly", category_id: categoryMap["insects"] },
      { name: "cricket", category_id: categoryMap["insects"] },
      { name: "mosquito", category_id: categoryMap["insects"] },
      { name: "butterfly", category_id: categoryMap["insects"] },
      { name: "donkey", category_id: categoryMap["farm"] },
      { name: "goat", category_id: categoryMap["farm"] },
      { name: "buffalo", category_id: categoryMap["farm"] },
      { name: "cat", category_id: categoryMap["farm"] },
      { name: "horse", category_id: categoryMap["farm"] },
      { name: "guinea pig", category_id: categoryMap["farm"] },
      { name: "pig", category_id: categoryMap["farm"] },
      { name: "rabbit", category_id: categoryMap["farm"] },
      { name: "llama", category_id: categoryMap["farm"] },
      { name: "sheep", category_id: categoryMap["farm"] },
      { name: "mouse", category_id: categoryMap["farm"] },
      { name: "dog", category_id: categoryMap["farm"] },
    ]);

    await trx("users").insert([{ name: "Alice" }, { name: "Bob" }]);
    const users = await trx("users").select("id", "name");
    const userMap = Object.fromEntries(
      users.map((user) => [user.name, user.id])
    );

    await trx("scores").insert([
      { user_id: userMap["Alice"], score: 100 },
      { user_id: userMap["Bob"], score: 80 },
    ]);
  });
};
