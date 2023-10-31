
let lunch = [
    { item: "Kebob", price: 9.95 },
    { item: "Shwarma", price: 5.25 },
    { item: "Diet Coke", price: 2.79 },
  ];
  

  let subtotal = 0;
  for (let i = 0; i < lunch.length; i++) {
    subtotal += lunch[i].price;
  }
  
  
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  
 
  const tipRate = 0.18;
  const tip = subtotal * tipRate;
  

  const totalDue = subtotal + tax + tip;
  
 
  console.log("Your Lunch Order:");
  for (const item of lunch) {
    console.log(`${item.item}: $${item.price.toFixed(2)}`);
  }
  
  console.log("\nSubtotal: $" + subtotal.toFixed(2));
  console.log("Tax (8%): $" + tax.toFixed(2));
  console.log("Tip (18%): $" + tip.toFixed(2));
  console.log("Total Due: $" + totalDue.toFixed(2));
  