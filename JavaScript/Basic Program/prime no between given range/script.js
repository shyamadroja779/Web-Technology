function primes() {
  let a = parseInt(document.getElementById("start").value);
  let b = parseInt(document.getElementById("end").value);
  let res = "";

  for (let i = a; i <= b; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      res += i + " ";
    }
  }

  document.getElementById("result").innerHTML = res || "No prime numbers found.";
}
