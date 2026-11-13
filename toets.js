//oef 1

let leeftijd = 17;

if (leeftijd < 16) {
  console.log("Geen toegang.");
} else if (leeftijd >= 16 && leeftijd <= 17) {
  console.log("Toegang onder begeleiding.");
} else {
  console.log("Volledige toegang.");
}

//oef 2

let temperaturen = [19, 22, 26, 21, 29, 18];

for (let i = 0; i < temperaturen.length; i++) {
  let temp = temperaturen[i];
  if (temp >= 25) {
    console.log(`WAARSCHUWING: Hoge temperatuur (${temp}°C)`);
  } else {
    console.log(`Temperatuur normaal (${temp}°C)`);
  }
}


//oef 3
let getallen = [12, -5, 8, -3, 0, 19, -11];
for(let i = 0; i < getallen.length; i++) {
  let getal = getallen[i];
  if (getal > 0) {
    console.log(`Positief getal: ${getal}`);
  } else if (getal < 0) {
    console.log(`Negatief getal: ${getal}`);}
} 

//oef4

let spaargeld= 250 
const maandelijks= 150
const doel = 1200

console.log();

    

