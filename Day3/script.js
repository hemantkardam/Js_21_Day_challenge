function butterflyPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j <= i; j++) {
      str += '* ';
    }
    for (let j = 0; j < 2 * n - 2 * i - 2; j++) {
      str += '  ';
    }
    for (let j = 0; j <= i; j++) {
      str += '* ';
    }

    console.log(`${str}`);
  }
  for (let i = 2; i <= n; i++) {
    let str = '';
    let spc = '';
    for (let j = 0; j <= n - i; j++) {
      str += '* ';
    }
    for (let j = 1; j < 2 * i - 1; j++) {
      str += '  ';
    }
    for (let j = 1; j <= n - i + 1; j++) {
      str += '* ';
    }
    console.log(`${str}`);
  }
}
butterflyPattern(5);
