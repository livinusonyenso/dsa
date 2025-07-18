const contacts = ['Emeka', 'Tunde', 'Zainab', 'Chioma', 'Ahmed'];

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Checking index ${i}: ${array[i]}`); 

    if (array[i] === target) {
      console.log(`✅ Found "${target}" at index ${i}`);
      return i;
    }
  }

  console.log(`"${target}" not found in the list.`);
  return -1; 
}

linearSearch(contacts, 'Zainab');
