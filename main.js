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

   
}

function getId(id){
    return document.getElementById(id);
}

//Lyssna efter form-submit.
getId("taskForm").addEventListener("submit", addTask);

function addTask(event){
    //hindra formuläret till servern
    event.preventDefault();
    //hämta input datan
    let input = getId("taskId").value;
    //skapa ett taskobject
    let taskObject = {task:input, ready:false}
    //spara i fakeDataBase
    fakeDataBase.push(taskObject);
    //renderar nytt
    renderFakeData();

    getId("taskId").value = "";
    getId("taskId").focus();

}