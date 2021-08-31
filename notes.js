shownotes()
const btn = document.querySelector('#addBtn')
btn.addEventListener('click',e=>{
  const text = document.querySelector('#addTxt')
  let notes = localStorage.getItem('notes')
  let mytitle = document.querySelector('#addtitle')
  if(notes===null){
      notesObj=[]
  }else{

    notesObj=JSON.parse(notes)
  }
  let myObj={
      title: mytitle.value,
      mytext: text.value
  }
  notesObj.push(myObj)
  localStorage.setItem('notes', JSON.stringify(notesObj))
  text.value="";
  mytitle.value="";
  //console.log(notesObj)
  shownotes()
})
// Function To show notes from localstorage to UI
function shownotes(){
    let notes = localStorage.getItem('notes')
    if(notes===null){
        notesObj=[]
    }else{
        notesObj= JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach((element,index) => {
        
        html +=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${index+1}) ${element.title}</h5>
            <p class="card-text">${element.mytext}</p>
            
            <button id=${index} onclick=deleteNotes(this.index) class="btn btn-danger">Delete</button>
        
        </div>
    </div>`

    });
    let noteselm = document.querySelector('#notes')
    if(notesObj.length!=0){
        noteselm.innerHTML=html;

    }else{
        noteselm.innerHTML = `Nothing to show here. Please Add a note`
    }
}

// function to delete notes

function deleteNotes(index){
//console.log("DElete")
 let notes = localStorage.getItem('notes')
 if(notes===null){
     notesObj=[]
 }else{
     notesObj=JSON.parse(notes)
 }
 notesObj.splice(index,1)
 localStorage.setItem('notes',JSON.stringify(notesObj))
 shownotes()
}

// Filtering Notes 
let search = document.querySelector('#searchTxt')
search.addEventListener('input',()=>{
 
 let txt = search.value.toLowerCase();
 //console.log('Event Fired', txt)
 let notescard = document.querySelectorAll('.noteCard');
 //console.log(notescard)
  Array.from(notescard).forEach(function(element){
   let para = element.querySelectorAll("p")[0].innerText;
   if(para.includes(txt)){
       element.style.display="block";
   }else{
       element.style.display="none";
   }


  });
})


