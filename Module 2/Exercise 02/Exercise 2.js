function printNames() {
    let num = parseInt(prompt('Enter the number of participants: '));
    let NameOfParticipants = [];

    for (let i = 0; i < num; i++) {
        let name = prompt(`Now, enter the name of participants ${i + 1}:`);
        NameOfParticipants.push(name);
    }
    NameOfParticipants.sort();

    let OrderedList = '<ol>';
    NameOfParticipants.forEach(name => {
        OrderedList += `<li>${name}</li>`;
    });
    OrderedList += '</ol>';

    document.body.innerHTML += OrderedList;
}
printNames();