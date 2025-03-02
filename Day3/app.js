let todo = [];

let req = prompt(`please enter your request`);

while (true) {
    if(req == `quit`) {
        console.log(`Quitting the app.`);
        break;
    } if (req == 'list') {
        console.log(`----------------------------------`);
        for (let i = 0; i < todo.length; ++i) {
            console.log(`${i+1} ${todo[i]}`);
        }
        console.log(`----------------------------------`);
    } else if (req == `add`) {
        let task = prompt(`please enter the task you want to add : `);
        todo.push(task);
        console.log(`task added successfully!`);
    } else if (req == `delete`) {
        let idx = Number(prompt(`enter the index value of the task which you want to delete : `));
        todo.splice(idx, 1);
        console.log(`task deleted successfully`);
    } else {
        console.log(`wrong request`);
    }
    req = prompt(`please enter your next request.`);
}


