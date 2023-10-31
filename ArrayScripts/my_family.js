const names = ["Sayed", "Cesar", "Sebastian", "Martin"];

function printNames() {
  for (let i = 0; true; i = (i + 1) % names.length) {
    console.log(names[i]);
  }
}

printNames();
