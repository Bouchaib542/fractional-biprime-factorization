function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const sqrtN = BigInt(Math.floor(Math.sqrt(Number(n))));
  for (let i = 3n; i <= sqrtN; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function findFractionalFactor() {
  const input = document.getElementById("numberInput").value.trim();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!/^\d+$/.test(input)) {
    resultDiv.textContent = "Veuillez entrer un nombre impair valide.";
    return;
  }

  const O = BigInt(input);
  if (O % 2n === 0n) {
    resultDiv.textContent = "Ce nombre est pair. Veuillez entrer un nombre impair.";
    return;
  }

  const denominators = [];
  for (let x = 1n; x <= 100000n; x += 1n) {
    denominators.push((x * 10000n + 2500n) / 10000n); // x.25
    denominators.push((x * 10000n + 7500n) / 10000n); // x.75
  }

  for (const d of denominators) {
    const dFloat = Number(d);
    const quotient = O / BigInt(Math.round(dFloat * 10000)) * 10000n;
    if (quotient * BigInt(Math.round(dFloat * 10000)) === O * 10000n) {
      const result = quotient / 4n;
      if (isPrime(result)) {
        resultDiv.innerHTML = `✅ Facteur premier trouvé : <strong>${result}</strong>`;
        return;
      }
    }
  }

  resultDiv.textContent = "❌ Aucun facteur premier n'a été trouvé par cette méthode.";
}
