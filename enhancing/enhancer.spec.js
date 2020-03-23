const enhancer = require("./enhancer.js");

const one = {
  name: "hello",
  durability: 50,
  enhancement: 15
};

const two = {
  name: "bye",
  durability: 20,
  enhancement: 20
};

const three = {
  name: "evening",
  durability: 0,
  enhancement: 89
};

const four = {
  name: "live",
  durability: 20,
  enhancement: 16
};

const five = {
  name: "hr",
  durability: 40,
  enhancement: 17
};

const six = {
  name: "mr",
  durability: 39,
  enhancement: 10
};

const seven = {
  name: "efffr",
  durability: 40,
  enhancement: 15
};

const eight = {
  name: "refdsdr",
  durability: 30,
  enhancement: 15
};

const nine = {
  name: "h3rff",
  durability: 30,
  enhancement: 12
};

const ten = {
  name: "mdddr",
  durability: 25,
  enhancement: 12
};

const eleven = {
  name: "543re",
  durability: 100,
  enhancement: 12
};

const twelve = {
  name: "45634",
  durability: 101,
  enhancement: 12
};

test("enchancer module success testing", async () => {
  //1. Success function
  const itemOne = enhancer.succeed(one);
  const firstsuccess = four.enhancement;
  expect(itemOne.enhancement).toEqual(firstsuccess);
  const itemTwo = enhancer.succeed(two);
  expect(itemTwo.enhancement).toEqual(itemTwo.enhancement);
});

test("enchancer module fail testing", async () => {
  //2. Fail
  const itemTwo = enhancer.fail(five);
  const firstfail = six.durability;
  expect(itemTwo.durability).toEqual(firstfail);

  const itemThree = enhancer.fail(seven);
  const secondfail = eight.durability;
  expect(itemThree.durability).toEqual(secondfail);

  const itemFour = enhancer.fail(nine);
  const thirdfail = ten.durability;
  expect(itemFour.durability).toEqual(thirdfail);
});

test("enchancer module repar testing", async () => {
  //3. Repair
  const itemFive = enhancer.repair(three);
  const firstrepair = eleven.durability;
  expect(itemFive.durability).toEqual(firstrepair);

  const itemSix = enhancer.repair(twelve);
  expect(itemSix).toBe(false);
});
