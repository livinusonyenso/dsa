Press Ctrl/Cmd + Shift + P to display the editor's command palette, and then type Quokka

# JavaScript & Git Developer Cheat Sheet

A comprehensive reference guide covering the most useful and tricky JavaScript methods and Git commands that every developer should know.

---

## 🔥 Table of Contents
- [Array Methods](#-array-methods)
- [String Methods](#-string-methods)
- [Object Utilities](#-object-utilities)
- [Array ↔ String Conversions](#-array--string-conversions)
- [DOM & Event Handling](#-dom--event-handling)
- [Git Commands](#-git-commands)
- [Advanced Tips & Gotchas](#-advanced-tips--gotchas)

---

## 📚 Array Methods

### Array.map()
**Syntax:** `array.map(callback(element, index, array))`

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
```
**Output:** `[2, 4, 6, 8]`

**Explanation:** Creates a new array by calling the callback function on each element. Original array remains unchanged.

**🚨 Pitfall:** `map()` always returns an array of the same length - don't use it if you want to filter items.

---

### Array.filter()
**Syntax:** `array.filter(callback(element, index, array))`

```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);
```
**Output:** `[2, 4]`

**Explanation:** Creates a new array with all elements that pass the test implemented by the provided function.

---

### Array.reduce()
**Syntax:** `array.reduce(callback(accumulator, current, index, array), initialValue)`

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
```
**Output:** `10`

**Explanation:** Executes a reducer function on each element, resulting in a single output value.

**💡 Advanced:** Can be used to create objects, flatten arrays, or implement other array methods.

---

### Array.find() vs Array.findIndex()
**Syntax:** `array.find(callback)` | `array.findIndex(callback)`

```js
const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
const user = users.find(u => u.id === 2);
const index = users.findIndex(u => u.id === 2);
console.log(user, index);
```
**Output:** `{id: 2, name: 'Jane'} 1`

**Explanation:** `find()` returns the first matching element, `findIndex()` returns its index (-1 if not found).

---

### Array.some() vs Array.every()
**Syntax:** `array.some(callback)` | `array.every(callback)`

```js
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);
console.log(hasEven, allPositive);
```
**Output:** `true true`

**Explanation:** `some()` returns true if at least one element passes the test. `every()` returns true if all elements pass.

---

## 🎯 String Methods

### String.split() vs String.join()
**Syntax:** `string.split(separator)` | `array.join(separator)`

```js
const text = "apple,banana,orange";
const fruits = text.split(",");
const rejoined = fruits.join(" | ");
console.log(fruits);
console.log(rejoined);
```
**Output:** 
```
['apple', 'banana', 'orange']
apple | banana | orange
```

**Explanation:** `split()` converts string to array, `join()` converts array to string.

---

### String.slice() vs String.substring() vs String.substr()
**Syntax:** `string.slice(start, end)` | `string.substring(start, end)` | `string.substr(start, length)`

```js
const text = "JavaScript";
console.log(text.slice(0, 4));      // "Java"
console.log(text.substring(0, 4));  // "Java"
console.log(text.substr(0, 4));     // "Java" (deprecated)
```
**Output:** All return `"Java"`

**🚨 Pitfall:** `substr()` is deprecated. Use `slice()` for negative indices, `substring()` swaps arguments if start > end.

---

### String.includes() vs String.indexOf()
**Syntax:** `string.includes(searchString)` | `string.indexOf(searchString)`

```js
const text = "Hello World";
console.log(text.includes("World"));  // true
console.log(text.indexOf("World"));   // 6
console.log(text.indexOf("xyz"));     // -1
```

**Explanation:** `includes()` returns boolean, `indexOf()` returns position (-1 if not found).

---

### String Template Literals (Advanced)
**Syntax:** Tagged template literals

```js
function highlight(strings, ...values) {
  return strings.map((str, i) => 
    str + (values[i] ? `<mark>${values[i]}</mark>` : '')
  ).join('');
}

const name = "John";
const age = 30;
const result = highlight`Hello ${name}, you are ${age} years old`;
console.log(result);
```
**Output:** `Hello <mark>John</mark>, you are <mark>30</mark> years old`

---

## 🔧 Object Utilities

### Object.keys() vs Object.values() vs Object.entries()
**Syntax:** `Object.keys(obj)` | `Object.values(obj)` | `Object.entries(obj)`

```js
const person = { name: "John", age: 30, city: "NYC" };
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
```
**Output:**
```
['name', 'age', 'city']
['John', 30, 'NYC']
[['name', 'John'], ['age', 30], ['city', 'NYC']]
```

---

### Object Destructuring (Advanced)
**Syntax:** `const {prop1, prop2: newName = defaultValue} = object`

```js
const user = { id: 1, name: "John", email: "john@example.com" };
const { name, email: userEmail, phone = "N/A" } = user;
console.log(name, userEmail, phone);
```
**Output:** `John john@example.com N/A`

**💡 Advanced:** Can rename properties and set default values in one line.

---

### Object.assign() vs Spread Operator
**Syntax:** `Object.assign(target, ...sources)` | `{...obj1, ...obj2}`

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged1 = Object.assign({}, obj1, obj2);
const merged2 = { ...obj1, ...obj2 };
console.log(merged1, merged2);
```
**Output:** Both return `{ a: 1, b: 3, c: 4 }`

**🚨 Pitfall:** Both create shallow copies only. For deep cloning, use `JSON.parse(JSON.stringify(obj))` or a library.

---

## 🔄 Array ↔ String Conversions

### Array to String
```js
const arr = ['apple', 'banana', 'orange'];

// Method 1: join()
console.log(arr.join(', '));        // "apple, banana, orange"

// Method 2: toString()
console.log(arr.toString());        // "apple,banana,orange"

// Method 3: JSON.stringify()
console.log(JSON.stringify(arr));   // '["apple","banana","orange"]'
```

### String to Array
```js
const str = "apple,banana,orange";

// Method 1: split()
console.log(str.split(','));        // ['apple', 'banana', 'orange']

// Method 2: Array.from()
console.log(Array.from(str));       // ['a','p','p','l','e',',','b'...]

// Method 3: Spread operator
console.log([...str]);              // ['a','p','p','l','e',',','b'...]
```

---

## 🎪 DOM & Event Handling

### DOM Selection Methods
```js
// Single elements
const el1 = document.getElementById('myId');
const el2 = document.querySelector('.myClass');
const el3 = document.querySelector('#myId');

// Multiple elements
const els1 = document.getElementsByClassName('myClass');
const els2 = document.querySelectorAll('.myClass');
```

**🚨 Pitfall:** `getElementsByClassName()` returns a live HTMLCollection, `querySelectorAll()` returns a static NodeList.

---

### Event Listeners
**Syntax:** `element.addEventListener(event, callback, options)`

```js
const button = document.querySelector('#myButton');

// Basic event listener
button.addEventListener('click', function(e) {
  console.log('Button clicked!');
});

// Arrow function with event object
button.addEventListener('click', (e) => {
  e.preventDefault(); // Prevents default behavior
  console.log('Event type:', e.type);
});

// Event delegation (advanced)
document.addEventListener('click', (e) => {
  if (e.target.matches('.dynamic-button')) {
    console.log('Dynamic button clicked!');
  }
});
```

### DOM Ready Events
```js
// Method 1: DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready!');
});

// Method 2: Window load (waits for images)
window.addEventListener('load', function() {
  console.log('Page fully loaded!');
});
```

---

## 🌿 Git Commands

### Repository Setup
```bash
# Initialize new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git

# Add remote origin
git remote add origin https://github.com/user/repo.git
```

### Basic Workflow
```bash
# Check status
git status

# Add files to staging
git add .              # Add all files
git add file.txt       # Add specific file
git add *.js           # Add all JS files

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push origin main
```

### Branching
```bash
# Create and switch to new branch
git checkout -b feature-branch

# Switch between branches
git checkout main
git checkout feature-branch

# List all branches
git branch -a

# Delete branch
git branch -d feature-branch    # Local
git push origin -d feature-branch  # Remote
```

### Advanced Git Commands
```bash
# Stash changes
git stash                    # Save current changes
git stash pop               # Apply and remove from stash
git stash list              # List all stashes
git stash apply stash@{0}   # Apply specific stash

# Reset commits
git reset --soft HEAD~1     # Undo last commit, keep changes
git reset --hard HEAD~1     # Undo last commit, discard changes

# Rebase (advanced)
git rebase main            # Rebase current branch onto main
git rebase -i HEAD~3       # Interactive rebase last 3 commits
```

### Git Log & History
```bash
# View commit history
git log --oneline          # Compact view
git log --graph --oneline  # Visual branch graph
git log -p                 # Show changes in each commit

# Show changes
git diff                   # Working directory vs staging
git diff --staged          # Staging vs last commit
git diff HEAD~1            # Current vs previous commit
```

---

## 💡 Advanced Tips & Gotchas

### JavaScript Gotchas
```js
// 1. Falsy values
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// 2. Array comparison
console.log([] == []);           // false (different objects)
console.log([1,2,3] == '1,2,3'); // true (type coercion)

// 3. Hoisting
console.log(x); // undefined (not ReferenceError)
var x = 5;

// 4. This binding
const obj = {
  name: 'John',
  sayName: function() { return this.name; },
  sayNameArrow: () => this.name // 'this' is undefined in strict mode
};
```

### Performance Tips
```js
// Use const/let instead of var
const items = [1, 2, 3, 4, 5];

// Avoid creating functions in loops
// ❌ Bad
for (let i = 0; i < items.length; i++) {
  items[i] = items[i] * 2;
}

// ✅ Good
const double = x => x * 2;
const doubled = items.map(double);
```

### Git Best Practices
```bash
# Write meaningful commit messages
git commit -m "Fix: Resolve login validation bug"
git commit -m "feat: Add user profile dashboard"

# Use conventional commits
# Types: feat, fix, docs, style, refactor, test, chore

# Squash commits before merging
git rebase -i HEAD~3  # Combine last 3 commits

# Always pull before pushing
git pull origin main
git push origin feature-branch
```

---

## 🎯 Quick Reference

### Most Used Array Methods
- `map()` - Transform elements
- `filter()` - Remove unwanted elements  
- `reduce()` - Combine elements into single value
- `find()` - Get first matching element
- `includes()` - Check if element exists

### Most Used String Methods
- `split()` - String to array
- `join()` - Array to string
- `slice()` - Extract substring
- `includes()` - Check if substring exists
- `replace()` - Replace text

### Essential Git Commands
- `git status` - Check current state
- `git add .` - Stage all changes
- `git commit -m "message"` - Save changes
- `git push` - Upload to remote
- `git pull` - Download from remote

---

*Remember: Practice these methods regularly, and always check the documentation for the latest features and browser support!*