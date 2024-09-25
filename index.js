

let heroi = [
    {name: 'Homem Aranha', nivel: 1500},
    {name: 'Capitão America', nivel: 8469},
    {name: 'Homen de Ferro', nivel: 1000},
    {name: 'Batman', nivel: 6598},
    {name: 'Aquamen', nivel: 9489},
    {name: 'Chapolim Colorado', nivel: 10001},
]


heroi.forEach((item, ) => {
        if (item.nivel <= 1000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Ferro`)
        }else if (item.nivel <=2000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Bronze`)
        }else if (item.nivel <=5000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Prata`)
        }else if (item.nivel <=7000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Ouro`)
        }else if (item.nivel <=8000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Platina`)
        }else if (item.nivel <=9000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Ascendente`)
        }else if (item.nivel <=10000) {
            console.log(`O heroi de nome ${item.name} está no nivel de Imortal`)
        }else {
            console.log(`O heroi de nome ${item.name} está no nivel de Radiante`)
        } 
});
