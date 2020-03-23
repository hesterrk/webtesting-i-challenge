module.exports = {
  succeed,
  fail,
  repair,
  get
};

// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success.

function succeed(item) {
  const enhancement = item.enhancement;

  if (enhancement !== 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return item;
  }
}

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  const enhancement = item.enhancement;

  if (enhancement >= 15) {
    if (enhancement > 16) {
      return { ...item, durability: item.durability - 1 }; //can say also -=1 shortcut
    }
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, durability: item.durability - 5 };
  }
}

// - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.

function repair(item) {
  const dur = item.durability;

  if(dur < 100) {
  return { ...item, durability: item.durability + 100 }
  }

  else {
    return false
  }
}

//   - if the enhancement level is 0, the the name is not modified.
//   - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
function get(item) {
  const enhancement = item.enhancement;

  if (enhancement !== 0) {
    return { ...item, name: `[+ ${enhancement}] ${enhancement.name}` };
  } else {
    return item;
  }
}
