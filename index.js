const names= [ "Guadalupe","Ollie" ,"Aki"];
const message= [ "surprise"];
function writeCards(name, message) {
  return name.map(name => `Thank you, ${name}, for the wonderful ${message} gift!`)
}
console.log(writeCards(names, "gift"));

function countDown(startingNumber) {
    let count = startingNumber;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown();
  