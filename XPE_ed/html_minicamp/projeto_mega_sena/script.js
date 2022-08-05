console.log("testando script");

var board = [];
var current_game = [1, 5, 11, 13, 15, 17];
var saved_games = [];

//objeto criado para guardar o estado da aplica��o
var state = {
    board: [],
    current_game: [],
    saved_games: [],
}

function start() {
    // console.log("start")
    create_game();
    new_game();
}

start();

function new_game() {
    reset();
    render();
}
//render - cria��o dos elementos visuais da p�gina - react usa muito
function render() {
    render_board();
}

function render_board() {
    var div_board = document.querySelector('#Mega-numbers')

    div_board.innerHTML = "";

    var ul_numbers = document.createElement('ul');

    for (var i = 0; i < state.board.length; i++) {
        var current_number = state.board[i];


        var li_num = document.createElement('li');
        li_num.textContent = current_number;
        li_num.addEventListener('click', handleNumberClick);

        ul_numbers.appendChild(li_num);
    }
    div_board.appendChild(ul_numbers);

}

function handleNumberClick(event) {
    //a variavel passada aqui vem de "presente" atrav�s do ckick.
    var value = Number(event.currentTarget.textContent);
    if (test_repetition(value)) {
        removenumber(value);
    } else {
        addnumber(value)
    }
    console.log(state.current_game)
}

function addnumber(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("N�mero inv�lido", numberToAdd)
        return;
    }
    if (state.current_game.length >= 6) {
        console.error("O jogo est� completo");
        return;
    }
    if (test_repetition(numberToAdd)){
        console.error("este n�mero j� est� no jogo", numberToAdd)
        return;
    }

    //so aceita n�mero de 1 at� 60 e se tiver 6 n�meros 
    state.current_game.push(numberToAdd)
}

function test_repetition(check_number) {
    if (state.current_game.includes(check_number)){
        return true;
    }
    return false;
}

function removenumber(numberToRemove) {
    var newGame = [];
    for (var i = 0; i < state.current_game.length; i++) {
        var currentNumber = state.current_game[i];
        if (currentNumber === numberToRemove) {
            continue; //continua e n faz nada
        }
        newGame.push(currentNumber);
    }
    state.current_game = newGame;

}

function save_game() {
    if (!game_completo) {
        console.error("o jogo n�o est� completo");
        return;
    }
    state.saved_games.push(state.newGame)
}

function game_completo() {
    return stat.current_game.length === 6;
}

function reset() {
    state.current_game = [];
}

function create_game() {
    for (var i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}