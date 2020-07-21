// Code your solutions in this file
function writeCards(names,event) {
    const cards = [];
    let i = 0;
    while (i < names.length) {
        cards.push('Thank you, ' + names[i] + ', for the wonderful ' + event + ' gift!' );
        i++;
    }
    return cards;
}