let fakeDataBase = [
    {id:1, task: "Gå och spela", ready:false},
    {id:1, task: "Gå och spoila", ready:false},
    {id:1, task: "Gå och slå måns", ready:false}
];


renderFakeData();

function renderFakeData(){
    // Skapa html från vår databas
    let htmlOutput = fakeDataBase.map(function(taskObject){
        return `
            <div>
                <h1>${taskObject.task}</h1>
                <button>Delete</button>
            </div>`;
    }); //end map

    getId("taskList").innerHTML = htmlOutput.join("");

    function getId(id){
        return document.getElementById(id);
    }
}
