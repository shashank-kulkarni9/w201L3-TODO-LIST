const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    var i;
    var l = [];
    for (i in all) {
      if (all[i].dueDate < today) {
        l.push(all[i]);
      }
    }
    return l;
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueToday = () => {
    var i;
    var l = [];
    for (i in all) {
      if (all[i].dueDate === today) {
        l.push(all[i]);
      }
    }
    return l;
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const dueLater = () => {
    var i;
    var l = [];
    for (i in all) {
      if (all[i].dueDate > today) {
        l.push(all[i]);
      }
    }
    return l;
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
  };

  const toDisplayableList = (list) => {
    var i;
    var final_list = [];
    for (i = 0; i < list.length; i++) {
      if (list[i].completed === false) {
        if (list[i].dueDate === today) {
          final_list.push(`[ ] ${list[i].title}`);
        } else {
          final_list.push(`[ ] ${list[i].title} ${list[i].dueDate}`);
        }
      } else {
        if (list[i].dueDate === today) {
          final_list.push(`[x] ${list[i].title}`);
        } else {
          final_list.push(`[x] ${list[i].title} ${list[i].dueDate}`);
        }
      }
    }

    return final_list.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
  // Format the To-Do list here, and return the output string as per the format given above.
  // FILL YOUR CODE HERE
  // ..
  // ..
  // ..
  // return OUTPUT_STRING
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
