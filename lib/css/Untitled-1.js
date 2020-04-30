sheep = (warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);

function warnTheSheep(queue) {
  testArray = queue;
  let i = testArray.length - 1;
  //while the test array still has items...
    while (testArray.length > 0) {
        //check if its the wolf
        if (testArray[i] === "sheep") {
        console.log("Pls go away and stop eating my sheep");
        break; //break the while loop
        //if its not the wolf, then its a sheep, so...
        } else if (testArray[i]==="wolf") {
        console.log("Oi! Sheep number " + i + "! You are about to be eaten by a wolf!");
        //pop the last sheep from the line and check again for the wolf.
        testArray.pop();
        }
    }
}

warnTheSheep(sheep);
