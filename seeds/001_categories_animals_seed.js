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
      {
        name: "dolphin",
        category_id: categoryMap["underwater"],
        image_url: "/images/dolphin.webp",
      },
      {
        name: "lion",
        category_id: categoryMap["wild"],
        image_url: "/images/lion.webp",
      },
      {
        name: "eagle",
        category_id: categoryMap["birds"],
        image_url: "/images/eagle.webp",
      },
      {
        name: "bee",
        category_id: categoryMap["insects"],
        image_url: "/images/bee.webp",
      },
      {
        name: "cow",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "shark",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "walrus",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "stingray",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "sea turtle",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "narwhal",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "seal",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "whale",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "starfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "orca",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "crab",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "lobster",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "sea lion",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "jellyfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "seahorse",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "octopus",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "clownfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "sea otter",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "eel",
        category_id: categoryMap["underwater"],
        image_url: "/images/cow.webp",
      },
      {
        name: "crocodile",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "monkey",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "tiger",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "kangaroo",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "cheetah",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "wolf",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "leopard",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "meerkat",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "deer",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "koala",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "squirrel",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "hippopotamus",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "armadillo",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "fox",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "skunk",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "panther",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "tortoise",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "zebra",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "giraffe",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "rhinoceros",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "coyote",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "hedgehog",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "polar bear",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "snake",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "elephant",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "bear",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "panda",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "gorilla",
        category_id: categoryMap["wild"],
        image_url: "/images/cow.webp",
      },
      {
        name: "hummingbird",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "macaw",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "kingfisher",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "ostrich",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "pigeon",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "penguin",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "rooster",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "seagull",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "parrot",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "vulture",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "goose",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "peacock",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "dove",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "woodpecker",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "swan",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "hen",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "turkey",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "toucan",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "flamingo",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "falcon",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "owl",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "duck",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "sparrow",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "owl",
        category_id: categoryMap["birds"],
        image_url: "/images/cow.webp",
      },
      {
        name: "cockroach",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "ant",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "ladybug",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "caterpillar",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "housefly",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "firefly",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "grasshopper",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "beetle",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "praying mantis",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "wasp",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "dragonfly",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "cricket",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "mosquito",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "butterfly",
        category_id: categoryMap["insects"],
        image_url: "/images/cow.webp",
      },
      {
        name: "donkey",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "goat",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "buffalo",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "cat",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "horse",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "guinea pig",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "pig",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "rabbit",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "llama",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "sheep",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "mouse",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
      {
        name: "dog",
        category_id: categoryMap["farm"],
        image_url: "/images/cow.webp",
      },
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
