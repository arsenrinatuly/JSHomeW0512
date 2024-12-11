const options = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["spock", "paper"],
    "spock": ["scissors", "rock"]
};

let play_again = true;
let player_choice = prompt("Введите ваш выбор: rock , paper, scissors , lizard , spock. или напишите 'exit' чтобы выйти с игры");

while (play_again) {
    if (player_choice === 'exit') {
        play_again = false;
        alert("Вы вышли с игры");
        break;
    }
    let computer_choice = options[Math.floor(Math.random() * options.length)];
    alert(`Компьютер выбрал ${computer_choice} `);

    if (rules[player_choice].includes(computer_choice)) {
        alert("Вы выиграли");
        break;
    }
    else if (rules[computer_choice].includes(player_choice)) {
        alert("Вы проиграли");
        break;
    }
    else {
        alert("Ничья");
        break;
    }
}