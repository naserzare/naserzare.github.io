let aliw = 78;
let alih = 1.69;
let rezaw = 92;
let rezah = 1.95;
let abmi = aliw / alih ** 2;
let rbmi = rezaw / (rezah * rezah);
if (abmi > rbmi) {
    alert("Ali's BMI is Higher Than Reza");
    alert(`Ali's BMI (${abmi}) Is Higher Than Reza's BMI (${rbmi})`);
} else {
    alert("Reza's BMI is Higher Than Ali");
    alert(`Reza's BMI (${abmi}) Is Higher Than Ali's BMI (${rbmi})`);
}