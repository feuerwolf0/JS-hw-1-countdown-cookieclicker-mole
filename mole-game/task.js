const killedMoles = document.getElementById('dead')
const missClick = document.getElementById('lost')

getHole = i => document.getElementById(`hole${i}`)

for (let i = 1; i<10; i++) {
    
    getHole(i).onclick = function () {
        // если попал
        if (this.className.includes('hole_has-mole')) {
            // попадание + 1
            this.className += 'hole hole_has-mole hole_has-killed'
            killedMoles.textContent = parseInt(killedMoles.textContent) + 1;
            // если попаданий 10 - победа
            if (parseInt(killedMoles.textContent) === 10) {
                alert('Поздравляем! Вы победили!');
                killedMoles.textContent = 0;
                missClick.textContent = 0;
            };
        } else {
            // промах + 1
            missClick.textContent = parseInt(missClick.textContent) + 1;
            // если промахов 5 - поражение
            if (parseInt(missClick.textContent) === 5) {
                alert('Вы проиграли');
                killedMoles.textContent = 0;
                missClick.textContent = 0;
            }; 
        };
    };
}
