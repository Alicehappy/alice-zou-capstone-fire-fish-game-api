export const mapAnimals = (animals) => {
  return animals.reduce((acc, ani, index) => {
    const wordKey = numberToWord(index + 1);
    acc[`animal_${wordKey}_id`] = ani;
    return acc;
  }, {});
};

export const getTableName = (categoryCount) => {
  const tableMap = {
    1: "one_category_sentences",
    2: "two_category_sentences",
    3: "three_category_sentences",
  };

  return tableMap(categoryCount);
};

export const numberToWord = (num) => {
  const wordMap = {
    1: "one",
    2: "two",
    3: "three",
  };
  return wordMap[num];
};
