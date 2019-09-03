let fakeDataBase = [
    {id:1, task: "Gå och spela", ready:false},
    {id:1, task: "Gå och spoila", ready:false},
    {id:1, task: "Gå och slå måns", ready:false}
];

let order = true;

function changeOrder(){
    order = !order;
    renderFakeData();
}

getId("orderButton").addEventListener("click", changeOrder);

renderFakeData();

function renderFakeData(){
    // Skapa html från vår databas
    let htmlOutput = fakeDataBase.map(function(taskObject, index){
        return `
            <div>
                <h1 id = "${index}">${taskObject.task} <sub>${taskObject.ready}</sub></h1>
                <button onclick = "deleteTask(${index})">Delete</button>
                <button onclick = "completeTask(${index})">Complete</button>
            </div>`;
    }); //end map
    if(order == true){
        getId("taskList").innerHTML = htmlOutput.join("");
    }
    else{
        getId("taskList").innerHTML = htmlOutput.reverse().join("");
    }

   
}



//Lyssna efter form-submit.
getId("taskForm").addEventListener("submit", addTask);

function addTask(event){
    //hindra formuläret till servern
    event.preventDefault();
    //hämta input datan
    let input = getId("taskId").value;
    //testar om den har information
    if(input.trim() != "")
    {
        //skapa ett taskobject
        let taskObject = {id: Date.now(), task:input, ready:false}
        //spara i fakeDataBase
        fakeDataBase.push(taskObject);
        //renderar nytt
        renderFakeData();
        getId("taskId").value = "";
        getId("taskId").focus();
    }

}

function deleteTask(index)
{
    fakeDataBase.splice(index, 1);
    renderFakeData();
}

function completeTask(index)
{
    let objectTask = fakeDataBase[index];
    objectTask.ready = !objectTask.ready;
    renderFakeData();

}

function getId(id){
    return document.getElementById(id);
}
