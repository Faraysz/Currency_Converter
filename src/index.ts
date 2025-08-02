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

// sebenere mau buat UI nya, tapii sek bingung konsepnya gimana
// mungkin nanti bisa pake React atau Vue.js buat frontendnya