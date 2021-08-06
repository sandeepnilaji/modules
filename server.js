const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const EventEmitter2 = require("events");
const eventEmitter2 = new EventEmitter2();
eventEmitter2.on("error", () => {
  console.log("You have selected an invalid entry so please press 1, 2 or 3");
});
var arr = [
  "ULYSSES",
  "THE GREAT GATSBY",
  "LOLITA",
  "BRAVE NEW WORLD",
  "CATCH-22",
];
eventEmitter.on("push", (el) => {
  if (el !== undefined) {
    arr.push(el);
  }
  console.log(arr);
});

show();

function show() {
  readline1.question(
    "pres 1 to show all books ,press 2 to add new book ,press 3 to quit",
    function (num) {
      if (num == 1) {
        eventEmitter.emit("push");
        show();
      }
      if (num == 2) {
        readline1.question("add book name", function (newbookname) {
          eventEmitter.emit("push", `${newbookname}`);
          console.log("book added successfully");
          show();
        });
      }
      if (num == 3) {
        readline1.question(
          "Are you sure you want to quit - press Y to quit",
          function (s) {
            if (s == "Y") {
              readline1.close();
            } else {
              show();
            }
          }
        );
      } else {
        eventEmitter2.emit("error");
        show();
      }
    }
  );
}

readline1.on("close", function () {
  console.log("Bye Bye");
});
