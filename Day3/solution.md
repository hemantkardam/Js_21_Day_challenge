### 🧠 **Questions List**

1. **Print Right-Angled Star Triangle**

```js
function rightAngledTriangle(n) {
  for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
```

---

2. **Print Inverted Right-Angled Triangle**

```js
function invertedRightAngledTriangle(n) {
  for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n - i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
```

---

3. **Print Pyramid Pattern**

```js
function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < n - i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += '* ';
    }
    console.log(spc, str);
  }
}
```

---

4. **Print Inverted Pyramid Pattern**

```js
function invertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      str += '* ';
    }
    console.log(spc, str);
  }
}
```

---

5. **Print Hollow Square Pattern**

```js
function hollowSquare(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(str);
  }
}
```

---

6. **Print Hollow Pyramid Pattern**

```js
function hollowPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < n - i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      if (j == 0 || j == i * 2 || i == n - 1) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(spc, str);
  }
}
```

---

7. **Print Alternating Binary Triangle**

```js
function alternatingBinary(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += i % 2 == 0 ? (j + 1) % 2 : j % 2;
    }
    console.log(str);
  }
}
```

---

### 🏠 **Homework / Practice Challenge**

1. **Print Hollow Inverted Pyramid**

```js
function hollowInvertedPyramid(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      if (i == 0 || j == 0 || j == 2 * n - 2 * i - 2) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(spc, str);
  }
}
```

---

2. **Print Butterfly Pattern**

```js

```

3. **Print Diamond Pattern**

```js
function diamondPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < n - i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += '* ';
    }
    console.log(spc, str);
  }
  for (let i = 1; i < n; i++) {
    let str = '';
    let spc = '  ';
    for (let j = 0; j < i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      str += '* ';
    }
    console.log(spc, str);
  }
}
```

---

4. **Print Hourglass Pattern**

```js
function hourglassPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = ' ';
    for (let j = 0; j < i; j++) {
      spc += ' ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      str += '*';
    }
    console.log(spc, str);
  }
  for (let i = 1; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < n - i; j++) {
      spc += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += '*';
    }
    console.log(spc, str);
  }
}
```

---

5. **Print Hollow Diamond Pattern**

```js
function hollowDiamondPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j < n - i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j == 0 || j == 2 * i) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(spc, str);
  }
  for (let i = 1; i < n; i++) {
    let str = '';
    let spc = '  ';
    for (let j = 0; j < i; j++) {
      spc += '  ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      if (j == 0 || j == 2 * n - 2 * i - 2) {
        str += '* ';
      } else {
        str += '  ';
      }
    }
    console.log(spc, str);
  }
}
```

---

6. **Print Rhombus Pattern**

```js
function rhombusPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 1; j < n - i; j++) {
      spc += ' ';
    }
    for (let j = 0; j < n; j++) {
      str += '*';
    }

    console.log(spc, str);
  }
}
```

---

7. **Print Multiplication Table (Single and Upto N)**

```js
function multiplicationTableSingleAndUptoN(single, upto) {
  for (let i = 1; i <= 10; i++) {
    console.log(single, '*', i, '=', single * i);
  }
  for (let i = 1; i <= upto; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i, '*', j, '=', j * i);
    }
  }
}
```

---
