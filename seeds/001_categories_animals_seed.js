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
        image_url: "/images/shark.webp",
      },
      {
        name: "walrus",
        category_id: categoryMap["underwater"],
        image_url: "/images/walrus.webp",
      },
      {
        name: "stingray",
        category_id: categoryMap["underwater"],
        image_url: "/images/stingray.webp",
      },
      {
        name: "sea turtle",
        category_id: categoryMap["underwater"],
        image_url: "/images/sea_turtle.webp",
      },
      {
        name: "narwhal",
        category_id: categoryMap["underwater"],
        image_url: "/images/narwhal.webp",
      },
      {
        name: "seal",
        category_id: categoryMap["underwater"],
        image_url: "/images/seal.webp",
      },
      {
        name: "whale",
        category_id: categoryMap["underwater"],
        image_url: "/images/whale.webp",
      },
      {
        name: "starfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/starfish.webp",
      },
      {
        name: "orca",
        category_id: categoryMap["underwater"],
        image_url: "/images/orca.webp",
      },
      {
        name: "crab",
        category_id: categoryMap["underwater"],
        image_url: "/images/crab.webp",
      },
      {
        name: "lobster",
        category_id: categoryMap["underwater"],
        image_url: "/images/lobster.webp",
      },
      {
        name: "sea lion",
        category_id: categoryMap["underwater"],
        image_url: "/images/sea_lion.webp",
      },
      {
        name: "jellyfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/jellyfish.webp",
      },
      {
        name: "seahorse",
        category_id: categoryMap["underwater"],
        image_url: "/images/seahorse.webp",
      },
      {
        name: "octopus",
        category_id: categoryMap["underwater"],
        image_url: "/images/octopus.webp",
      },
      {
        name: "clownfish",
        category_id: categoryMap["underwater"],
        image_url: "/images/clownfish.webp",
      },
      {
        name: "sea otter",
        category_id: categoryMap["underwater"],
        image_url: "/images/sea_otter.webp",
      },
      {
        name: "eel",
        category_id: categoryMap["underwater"],
        image_url: "/images/eel.webp",
      },
      {
        name: "crocodile",
        category_id: categoryMap["wild"],
        image_url: "/images/crocodile.webp",
      },
      {
        name: "monkey",
        category_id: categoryMap["wild"],
        image_url: "/images/monkey.webp",
      },
      {
        name: "tiger",
        category_id: categoryMap["wild"],
        image_url: "/images/tiger.webp",
      },
      {
        name: "kangaroo",
        category_id: categoryMap["wild"],
        image_url: "/images/kangaroo.webp",
      },
      {
        name: "cheetah",
        category_id: categoryMap["wild"],
        image_url: "/images/cheetah.webp",
      },
      {
        name: "wolf",
        category_id: categoryMap["wild"],
        image_url: "/images/wolf.webp",
      },
      {
        name: "leopard",
        category_id: categoryMap["wild"],
        image_url: "/images/leopard.webp",
      },
      {
        name: "meerkat",
        category_id: categoryMap["wild"],
        image_url: "/images/meerkat.webp",
      },
      {
        name: "deer",
        category_id: categoryMap["wild"],
        image_url: "/images/deer.webp",
      },
      {
        name: "koala",
        category_id: categoryMap["wild"],
        image_url: "/images/koala.webp",
      },
      {
        name: "squirrel",
        category_id: categoryMap["wild"],
        image_url: "/images/squirrel.webp",
      },
      {
        name: "hippopotamus",
        category_id: categoryMap["wild"],
        image_url: "/images/hippopotamus.webp",
      },
      {
        name: "armadillo",
        category_id: categoryMap["wild"],
        image_url: "/images/armadillo.webp",
      },
      {
        name: "fox",
        category_id: categoryMap["wild"],
        image_url: "/images/fox.webp",
      },
      {
        name: "skunk",
        category_id: categoryMap["wild"],
        image_url: "/images/skunk.webp",
      },
      {
        name: "panther",
        category_id: categoryMap["wild"],
        image_url: "/images/panther.webp",
      },
      {
        name: "tortoise",
        category_id: categoryMap["wild"],
        image_url: "/images/tortoise.webp",
      },
      {
        name: "zebra",
        category_id: categoryMap["wild"],
        image_url: "/images/zebra.webp",
      },
      {
        name: "giraffe",
        category_id: categoryMap["wild"],
        image_url: "/images/giraffe.webp",
      },
      {
        name: "rhinoceros",
        category_id: categoryMap["wild"],
        image_url: "/images/rhinoceros.webp",
      },
      {
        name: "coyote",
        category_id: categoryMap["wild"],
        image_url: "/images/coyote.webp",
      },
      {
        name: "hedgehog",
        category_id: categoryMap["wild"],
        image_url: "/images/hedgehog.webp",
      },
      {
        name: "polar bear",
        category_id: categoryMap["wild"],
        image_url: "/images/polar_bear.webp",
      },
      {
        name: "snake",
        category_id: categoryMap["wild"],
        image_url: "/images/snake.webp",
      },
      {
        name: "elephant",
        category_id: categoryMap["wild"],
        image_url: "/images/elephant.webp",
      },
      {
        name: "bear",
        category_id: categoryMap["wild"],
        image_url: "/images/bear.webp",
      },
      {
        name: "panda",
        category_id: categoryMap["wild"],
        image_url: "/images/panda.webp",
      },
      {
        name: "gorilla",
        category_id: categoryMap["wild"],
        image_url: "/images/gorilla.webp",
      },
      {
        name: "hummingbird",
        category_id: categoryMap["birds"],
        image_url: "/images/hummingbird.webp",
      },
      {
        name: "macaw",
        category_id: categoryMap["birds"],
        image_url: "/images/macaw.webp",
      },
      {
        name: "kingfisher",
        category_id: categoryMap["birds"],
        image_url: "/images/kingfisher.webp",
      },
      {
        name: "ostrich",
        category_id: categoryMap["birds"],
        image_url: "/images/ostrich.webp",
      },
      {
        name: "pigeon",
        category_id: categoryMap["birds"],
        image_url: "/images/pigeon.webp",
      },
      {
        name: "penguin",
        category_id: categoryMap["birds"],
        image_url: "/images/penguin.webp",
      },
      {
        name: "rooster",
        category_id: categoryMap["birds"],
        image_url: "/images/rooster.webp",
      },
      {
        name: "seagull",
        category_id: categoryMap["birds"],
        image_url: "/images/seagull.webp",
      },
      {
        name: "parrot",
        category_id: categoryMap["birds"],
        image_url: "/images/parrot.webp",
      },
      {
        name: "vulture",
        category_id: categoryMap["birds"],
        image_url: "/images/vulture.webp",
      },
      {
        name: "goose",
        category_id: categoryMap["birds"],
        image_url: "/images/goose.webp",
      },
      {
        name: "peacock",
        category_id: categoryMap["birds"],
        image_url: "/images/peacock.webp",
      },
      {
        name: "dove",
        category_id: categoryMap["birds"],
        image_url: "/images/dove.webp",
      },
      {
        name: "woodpecker",
        category_id: categoryMap["birds"],
        image_url: "/images/woodpecker.webp",
      },
      {
        name: "swan",
        category_id: categoryMap["birds"],
        image_url: "/images/swan.webp",
      },
      {
        name: "hen",
        category_id: categoryMap["birds"],
        image_url: "/images/hen.webp",
      },
      {
        name: "turkey",
        category_id: categoryMap["birds"],
        image_url: "/images/turkey.webp",
      },
      {
        name: "toucan",
        category_id: categoryMap["birds"],
        image_url: "/images/toucan.webp",
      },
      {
        name: "flamingo",
        category_id: categoryMap["birds"],
        image_url: "/images/flamingo.webp",
      },
      {
        name: "falcon",
        category_id: categoryMap["birds"],
        image_url: "/images/falcon.webp",
      },
      {
        name: "owl",
        category_id: categoryMap["birds"],
        image_url: "/images/owl.webp",
      },
      {
        name: "duck",
        category_id: categoryMap["birds"],
        image_url: "/images/duck.webp",
      },
      {
        name: "sparrow",
        category_id: categoryMap["birds"],
        image_url: "/images/sparrow.webp",
      },
      {
        name: "owl",
        category_id: categoryMap["birds"],
        image_url: "/images/owl.webp",
      },
      {
        name: "cockroach",
        category_id: categoryMap["insects"],
        image_url: "/images/cockroach.webp",
      },
      {
        name: "ant",
        category_id: categoryMap["insects"],
        image_url: "/images/ant.webp",
      },
      {
        name: "ladybug",
        category_id: categoryMap["insects"],
        image_url: "/images/ladybug.webp",
      },
      {
        name: "caterpillar",
        category_id: categoryMap["insects"],
        image_url: "/images/caterpillar.webp",
      },
      {
        name: "housefly",
        category_id: categoryMap["insects"],
        image_url: "/images/housefly.webp",
      },
      {
        name: "firefly",
        category_id: categoryMap["insects"],
        image_url: "/images/firefly.webp",
      },
      {
        name: "grasshopper",
        category_id: categoryMap["insects"],
        image_url: "/images/grasshopper.webp",
      },
      {
        name: "beetle",
        category_id: categoryMap["insects"],
        image_url: "/images/beetle.webp",
      },
      {
        name: "praying mantis",
        category_id: categoryMap["insects"],
        image_url: "/images/praying_mantis.webp",
      },
      {
        name: "wasp",
        category_id: categoryMap["insects"],
        image_url: "/images/wasp.webp",
      },
      {
        name: "dragonfly",
        category_id: categoryMap["insects"],
        image_url: "/images/dragonfly.webp",
      },
      {
        name: "cricket",
        category_id: categoryMap["insects"],
        image_url: "/images/cricket.webp",
      },
      {
        name: "mosquito",
        category_id: categoryMap["insects"],
        image_url: "/images/mosquito.webp",
      },
      {
        name: "butterfly",
        category_id: categoryMap["insects"],
        image_url: "/images/butterfly.webp",
      },
      {
        name: "donkey",
        category_id: categoryMap["farm"],
        image_url: "/images/donkey.webp",
      },
      {
        name: "goat",
        category_id: categoryMap["farm"],
        image_url: "/images/goat.webp",
      },
      {
        name: "buffalo",
        category_id: categoryMap["farm"],
        image_url: "/images/buffalo.webp",
      },
      {
        name: "cat",
        category_id: categoryMap["farm"],
        image_url: "/images/cat.webp",
      },
      {
        name: "horse",
        category_id: categoryMap["farm"],
        image_url: "/images/horse.webp",
      },
      {
        name: "guinea pig",
        category_id: categoryMap["farm"],
        image_url: "/images/guinea_pig.webp",
      },
      {
        name: "pig",
        category_id: categoryMap["farm"],
        image_url: "/images/pig.webp",
      },
      {
        name: "rabbit",
        category_id: categoryMap["farm"],
        image_url: "/images/rabbit.webp",
      },
      {
        name: "llama",
        category_id: categoryMap["farm"],
        image_url: "/images/llama.webp",
      },
      {
        name: "sheep",
        category_id: categoryMap["farm"],
        image_url: "/images/sheep.webp",
      },
      {
        name: "mouse",
        category_id: categoryMap["farm"],
        image_url: "/images/mouse.webp",
      },
      {
        name: "dog",
        category_id: categoryMap["farm"],
        image_url: "/images/dog.webp",
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
