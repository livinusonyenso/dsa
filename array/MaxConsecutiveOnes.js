const signalStatus = [1, 1, 0, 1, 1, 1, 0, 1, 1];

let currentCount = 0;
let maxCount = 0;

for (let i = 0; i < signalStatus.length; i++) {
  console.log(`Checking hour ${i + 1}:`, signalStatus[i] === 1 ? "Connected" : "Disconnected");

  if (signalStatus[i] === 1) {
    currentCount++;
    console.log(`   Signal is ON. Current streak: ${currentCount}`);
     
    
    if (currentCount > maxCount) {
      maxCount = currentCount;
      console.log(`   New Max Streak Found: ${maxCount}`);
    }
  } else {
    console.log(`   Signal is OFF. Resetting current streak.`);
    currentCount = 0;
  }
}

console.log(` Longest MTN Signal Streak: ${maxCount} hour(s)`);
