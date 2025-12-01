## All tasks must be performed using functions.

## 1. Transform list of usernames into detailed user objects **1 point**

Given:

```js
const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];
```

Use **`map`** to transform the array into:

```js
[
  { original: "alice_01", lower: "alice_01", length: 8, hasNumber: true },
  { original: "Bob99", lower: "bob99", length: 5, C: true },
  {
    original: "charlie_dev",
    lower: "charlie_dev",
    length: 11,
    hasNumber: false,
  },
  { original: "DANA", lower: "dana", length: 4, hasNumber: false },
  { original: "eve-test", lower: "eve-test", length: 8, hasNumber: false },
];
```

### **Rules**

For each username:

- **original** → the original string
- **lower** → the username converted to lowercase
- **length** → number of characters
- **hasNumber** → `true` if the string contains at least one digit (`0–9`), otherwise `false`

---

## 2. Filter and sort movie list with multiple conditions **1 point**

Given:

```js
const movies = [
  { title: "Skyfall", year: 2012, rating: 7.8, genre: "action" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "The Room", year: 2003, rating: 3.7, genre: "drama" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];
```

### **Your task**

1. **Filter** the list to keep only movies that:

   - were released **after 2010**
   - have a rating **7.5 or higher**

2. From the filtered results, **sort the movies by rating** in **descending** order.

### **Expected result:**

```js
[
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];
```

---

## 3. Normalize and modify product names **1 point**

Given:

```js
const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];
```

Transform each product name into a **clean, formatted** version:

### **Expected output structure**

```js
[
  "super phone 3000",
  "mega laptop",
  "wifi router",
  "portable charger",
  "usb cable",
];
```

### **Rules to apply to each string**

1. **Trim** leading and trailing spaces
2. **Replace** hyphens (`-`) with spaces
3. **Convert** everything to **lowercase**

---

## 4. Count character types in a text (using loops only) **1 point**

Given:

```js
const text = "Hello123! Welcome to JS 2025.";
```

### **Your task**

Write a loop (or multiple loops) that analyzes the string and produces an object like:

```js
{
  letters: 16,
  digits: 6,
  spaces: 4,
  symbols: 3
}
```

### **Rules**

- **letters** → all A–Z or a–z
- **digits** → 0–9
- **spaces** → `' '` (space character)
- **symbols** → anything that is _not_ a letter, digit, or space
- You **must use a loop** (`for`, `while`, or `for...of`) to iterate over characters.

---

## 5. Determine message type based on notification data **1 point**

Given:

```js
const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];
```

### **Your task**

Use **condition statements** (`if`, `else if`, `else`) to assign a **messageType** to each notification.

### **Rules**

1. If `priority === 3` → messageType = `"critical"`
2. If `priority === 2` → messageType = `"warning"`
3. If `priority === 1` → messageType = `"normal"`
4. BUT:
   If a notification is **read: true**, override the result and set messageType = `"read"`

### **Expected output example**

```js
[
  { text: "Low battery", priority: 3, read: false, messageType: "critical" },
  {
    text: "New message from Anna",
    priority: 1,
    read: true,
    messageType: "read",
  },
  {
    text: "System update available",
    priority: 2,
    read: false,
    messageType: "warning",
  },
  { text: "Storage almost full", priority: 3, read: true, messageType: "read" },
  { text: "Friend request", priority: 1, read: false, messageType: "normal" },
];
```

### Requirements

- Must use **if / else if / else**.
- Must process each notification (with a loop _or_ `map`).
- Must correctly apply the **"read overrides everything"** rule.

---

## 6: Flatten a list of arrays using `reduce()` **2 points**

Given:

```js
const arrOfArrs = [
  ["aaron", "ake", "anna", "aje"],
  ["becky", "ben", "bright"],
  ["cara", "chris"],
  ["david", "daniel", "danielle", "djenue"],
];
```

### **Your task**

Use **`reduce()`** to transform the list of arrays into **one single flat array** containing all the names.

### **Expected result**

```js
[
  "aaron",
  "ake",
  "anna",
  "aje",
  "becky",
  "ben",
  "bright",
  "cara",
  "chris",
  "david",
  "daniel",
  "danielle",
  "djenue",
];
```

### **Requirements**

- Must use **`reduce()`**.
- No loops allowed.
- The output must be a **single flattened array**.

---

Here is a **clean, student-friendly task** based on the _theme of the image_, perfect for beginners or intermediate JavaScript learners.

---

## 7 DOM: Build a Temperature Converter  **3 points**

Create a small temperature converter tool similar to the one shown in the image.
The user should be able to:

1. **Enter a number** (temperature value)
2. **Choose the unit** (Celsius or Fahrenheit)
3. **Click a button** to convert the temperature
4. See the **converted result** displayed on the page

---

### **Requirements**

1. Create an HTML form with:

   - An input field for the number
   - A dropdown menu with two options: `"Celsius"` and `"Fahrenheit"`
   - A button labeled **Convert**

2. Write JavaScript code that:

   - Reads the user input and selected unit
   - Uses **conditions** (`if / else`) to determine which conversion formula to apply
   - Celsius → Fahrenheit formula:

     ```
     F = (C * 9/5) + 32
     ```

   - Fahrenheit → Celsius formula:

     ```
     C = (F - 32) * 5/9
     ```

   - Displays the result below the form

3. Format the result like :

   ```
   46.4° Fahrenheit
   ```

   or

   ```
   8° Celsius
   ```
