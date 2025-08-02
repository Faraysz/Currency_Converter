import readlineSync from "readline-sync";
import { rates } from "./rates";

console.log("💱 Currency Converter CLI");
console.log("Mata uang yang tersedia:", Object.keys(rates).join(", "));
console.log("--------------------------------");

const from = readlineSync.question("Dari mata uang (ex. USD): ").toUpperCase();
const to = readlineSync.question("Ke mata uang (ex. IDR): ").toUpperCase();
const amount = parseFloat(readlineSync.question("Jumlah: "));

if (!rates[from] || !rates[to]) {
  console.log("❌ Mata uang tidak tersedia.");
} else {
  const result = (amount / rates[from]) * rates[to];
  console.log(`\n💸 Hasil: ${amount} ${from} = ${result.toFixed(2)} ${to}`);
}

// Isi dropdown currency
const fromCurrency = document.getElementById("fromCurrency") as HTMLSelectElement;
const toCurrency = document.getElementById("toCurrency") as HTMLSelectElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const button = document.getElementById("convertBtn") as HTMLButtonElement;

for (const currency in rates) {
  const option1 = new Option(currency, currency);
  const option2 = new Option(currency, currency);
  fromCurrency.add(option1);
  toCurrency.add(option2);
}

fromCurrency.value = "USD";
toCurrency.value = "IDR";

// Fungsi konversi
button.onclick = () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount || !rates[from] || !rates[to]) {
    result.innerText = "Data tidak valid.";
    return;
  }

  const converted = (amount / rates[from]) * rates[to];
  result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
};


// sebenere mau buat UI nya, tapii sek bingung konsepnya gimana
// mungkin nanti bisa pake React atau Vue.js buat frontendnya