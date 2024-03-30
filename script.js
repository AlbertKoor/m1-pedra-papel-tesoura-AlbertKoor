/* Desenvolva seu código abaixo */
/*O objetivo do projeto é implementar uma função chamada playRockPaperScissor que recebe dois parâmetros: player1 e player2., ambos são strings entre as possibilidades "Pedra", "Papel" e "Tesoura" (atenção para a letra maiúscula). Essa função deverá simular o jogo clássico "Pedra, Papel, Tesoura" entre dois jogadores.

Dentro da função, verifique as escolhas feitas pelos jogadores e determine o vencedor ou se houve um empate, seguindo as regras do jogo: a pedra vence a tesoura, a tesoura vence o papel e o papel vence a pedra.

Ao final da simulação, a função deve retornar uma string indicando qual jogador venceu, como "Jogador 1 venceu!", "Jogador 2 venceu!" ou "Empate!".*/

function playRockPaperScissor(player1, player2){
    if(player1 == 'Pedra' && player2 == 'Pedra'){
        return 'Empate!'
    }

    else if (player1 == 'Pedra' && player2 == 'Tesoura'){
        return 'Jogador 1 venceu!'
    }

    else if (player1 == 'Pedra' && player2 == 'Papel'){
        return 'Jogador 2 venceu!'
    }

    else if (player1 == 'Papel' && player2 == 'Papel'){
        return 'Empate!'
    }

    else if (player1 == 'Papel' && player2 == 'Pedra'){
        return 'Jogador 1 venceu!'
    }
    
    else if (player1 == 'Papel' && player2 == 'Tesoura'){
        return 'Jogador 2 venceu!'
    }

    else if (player1 == 'Tesoura' && player2 == 'Tesoura'){
        return 'Empate!'
    }

    else if (player1 == 'Tesoura' && player2 == 'Papel'){
        return 'Jogador 1 venceu!'
    }

    else if (player1 == 'Tesoura' && player2 == 'Pedra'){
        return 'Jogador 2 venceu!'
    }

}
const resultado = playRockPaperScissor('Papel', 'Papel');
console.log(resultado); 