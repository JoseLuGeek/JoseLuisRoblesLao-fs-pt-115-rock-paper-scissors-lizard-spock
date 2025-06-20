const weapon = ["rock", "paper", "scissors", "lizard", "spock"]

  const getRandomWeapon = () => {
  const index = Math.floor(Math.random() * weapon.length)
  return weapon[index]
}

const checkWeaponGuess = (userGuest) => {
  const computerWeapon = getRandomWeapon()

  console.log(`Tu eleccion: ${userGuest}`);
  console.log(`Computer weapon: ${computerWeapon}`);

  if (userGuest === computerWeapon) {
    console.log("Esto es un empate");
  } else if (
    (userGuest === "rock" && (computerWeapon === "scissors" || computerWeapon === "lizard")) ||
    (userGuest === "paper" && (computerWeapon === "rock" || computerWeapon === "spock")) ||
    (userGuest === "scissors" && (computerWeapon === "paper" || computerWeapon === "lizard")) ||
    (userGuest === "lizard" && (computerWeapon === "paper" || computerWeapon === "spock")) ||
    (userGuest === "spock" && (computerWeapon === "scissors" || computerWeapon === "rock"))
  ) {
    console.log("Tu Ganas!");
  } else {
    console.log("Tu Pierdes!");
  }
}

const guess = prompt("Es hora de elegir: rock, paper, scissors, lizard, spock").toLowerCase();

checkWeaponGuess(guess)