### 🧠 **Questions List**

1. **Find the Maximum of Three Numbers**

```js
function maxOfThree(a, b, c) {
  console.log('A', a);
  console.log('b', b);
  console.log('c', c);
  if (a > b) {
    if (a > c) {
      console.log('Largest number is a: ', a);
    } else {
      console.log('Largest number is c: ', c);
    }
  } else {
    if (b > c) {
      console.log('Largest number is b: ', b);
    } else {
      console.log('Largest number is c: ', c);
    }
  }
}
```

---

2. **Check if a Number is Positive, Negative, or Zero**

```js
function checkPositiveOrNegative(num) {
  if (num < 0) {
    return 'Negative';
  } else if (num > 0) {
    return 'Positive';
  } else if (num == 0) {
    return 'zero';
  } else {
    return 'Wrong input';
  }
}
```

---

3. **Calculate Electricity Bill**

```js
function toElectricityBill(units) {
  let totalBill = 0;
  if (units >= 0 && units <= 100) {
    totalBill = units * 5;
  } else if (units > 100 && units <= 200) {
    totalBill = 100 * 5 + (units - 100) * 7;
  } else if (units > 200 && units <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else if (units > 300) {
    totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }
  return totalBill;
}
```

---

4. **Check if a Character is a Vowel or Consonant**

```js
function checkVowelOrConsonant(char = '') {
  if (typeof char == 'string') {
    char = char.toLowerCase();
  }
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    return 'Vowels';
  } else if (/[a-z]/.test(char)) {
    return 'Consonants';
  }
  return 'Invalid Input';
}
```

---

5. **Check if a Year is a Leap Year**

```js
function isLeapYear(year) {
  if (typeof year)
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return 'Leap Year';
    } else {
      return 'Non Leap Year';
    }
}
```

---

### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

```js
function checkKeyIs(key) {
  code = key.charCodeAt();
  if (
    (code > 32 && code < 48) ||
    (code > 57 && code < 65) ||
    (code > 90 && code < 97) ||
    (code > 122 && code < 128)
  ) {
    return `It is a special character ${key}`;
  } else if (code > 47 && code < 58) {
    return `It is a Digits ${key}`;
  } else if (code > 64 && code < 91) {
    return `It is a Uppercase ${key}`;
  } else if (code > 96 && code < 123) {
    return `It is a LowerCase ${key}`;
  }
  return `invalid input`;
}
```

---

2. **Check Triangle Type Using Sides and Angles**

```js
function checkTriangle(sideA, sideB, sideC) {
  if (sideA ** 2 + sideB ** 2 == sideC ** 2) {
    return ` Right-angled Triangle`;
  } else if ((sideA == sideB) == sideC) {
    return ` Equilateral Triangle`;
  } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
    return ` Isosceles Triangle`;
  }
  return 'Scalene';
}
```

---

3. **Calculate Income Tax Based on Slabs**

```js
function calculateIncomeTax(income) {
  if (income <= 250000) {
    return `No tax`;
  } else if (income <= 500000) {
    return `Tax: ${((income - 250000) / 100) * 5}`;
  } else if (income <= 1000000) {
    return `Tax: ${12500 + ((income - 500000) / 100) * 20}`;
  } else if (income > 1000000) {
    return `Tax: ${12500 + 100000 + ((income - 1000000) / 100) * 30}`;
  }
}
```

---
