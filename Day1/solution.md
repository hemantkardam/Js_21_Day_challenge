### 1. Print Numbers from 1 to N

```js
const n = -prompt('Enter a numbr :');
const n = parseInt(prompt('Enter a numbr :'));
for (let i = 1; i <= n; i++) {
  console.log(i);
}
```

### By Dom

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = input.target.value;
});
btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
});
```

---

### 2. Print Numbers from N to 1 without changing the loop condition of above question

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = input.target.value;
});
btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    console.log(n - i + 1);
  }
});
```

---

### 3. Print All Even Numbers from 1 to N

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = input.target.value;
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
});
```

---

### 4. Sum of First N Natural Numbers

**Brute Force Solution**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;

input.addEventListener('input', (input) => {
  n = input.target.value;
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(sum);
  }
  console.log(sum);
  sum = 0;
});
```

**Optimised Force Solution**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';

  sum = (n * (n + 1)) / 2;
  if (Number.MAX_SAFE_INTEGER > sum) {
    console.log(sum);
  } else {
    console.log('Output is exceed the integer data type limit.');
  }
  sum = 0;
});
```

---

### 5. Product (Factorial) of N

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let fac = 1;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    fac = fac * i;
  }
  if (Number.MAX_SAFE_INTEGER > fac) {
    console.log(fac);
  } else {
    console.log('Output is exceed the integer data type limit.');
  }
  fac = 1;
});
```

---

### 6. Sum of All Even Numbers up to N

**Brute Force Solution**

```js
// Time Complexity O(n)
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
      console.log(sum);
    }
  }
  if (Number.MAX_SAFE_INTEGER > sum) {
    console.log(sum);
  } else {
    console.log('Output is exceed the integer data type limit.');
  }
  sum = 0;
});
```

**Optimised Force Solution**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;
let k = 0;
input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  k = Math.floor((k = n / 2));
  sum = k * (k + 1);
  if (Number.MAX_SAFE_INTEGER > sum) {
    console.log(sum);
  } else {
    console.log('Output is exceed the integer data type limit.');
  }
  sum = 0;
});
```

---

### 7. Print Squares of Numbers from 1 to N

```js
// Time Complexity O(n)
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
    console.log(i ** 2);
    console.log(Math.pow(i, 2));
  }
});
```

### 🏠 **Homework / Practice Challenge**

1. **Print all numbers divisible by 3 and 5 up to N**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
    }
  }
});
```

---

2. **Find the sum of all odd numbers up to N**

### Brute Force Approach

```js
// Brute Force
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
  sum = 0;
});
```

### Optimized Force Approach

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;
let sum = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
  sum = 0;
});
```

---

3. **Print the cubes of numbers from 1 to N**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    // console.log(i * i);
    console.log(Math.pow(i, 3));
  }
});
```

---

4. **Print only the numbers that are both even and perfect squares**

```js
const input = document.querySelector('input');
const btn = document.querySelector('button');
let n = 0;

input.addEventListener('input', (input) => {
  n = parseInt(input.target.value);
});

btn.addEventListener('click', () => {
  input.value = '';
  for (let i = 1; i <= n; i++) {
    if (Math.floor(Math.sqrt(i)) * Math.floor(Math.sqrt(i)) == i) {
      if (i % 2 == 0) {
        console.log('number is both perfect square or even', i);
      }
    }
  }
});
```

---
