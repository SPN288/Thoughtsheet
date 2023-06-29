console.log("hello satya js is working");

const taskcontainer = document.querySelector(".task-container");
console.log(taskcontainer);

const globalstore = [];

const gnewcard = (taskData) => `
        <div class="card" id=${taskData.id} >
        <div class="thought">${taskData.ythought}</div>
        <div class="author">By-> ${taskData.yname}</div>
      </div>`;

const loadinitialdata=()=>{
const getcarddata = localStorage.getItem("mythoughtcards");
const {cards}= JSON.parse(getcarddata);
cards.map((cardObject)=>{
  taskcontainer.insertAdjacentHTML("beforeend", gnewcard(cardObject));
  globalstore.push(cardObject);
})
};

const saveChanges = () => {
  console.log("save button clicked");

  const taskData = {
    id: `${Date.now()}`,
    ythought: document.getElementById("thought").value,
    yname: document.getElementById("name").value,
  };
  console.log(taskData);


  taskcontainer.insertAdjacentHTML("beforeend", gnewcard(taskData));

  globalstore.push(taskData);
  localStorage.setItem("mythoughtcards",JSON.stringify({cards:globalstore}));


};