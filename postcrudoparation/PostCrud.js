
const postList = []; //s4
console.log("postlist", postList);

let currentPostIndex = -1; //s16
let postValid = false; //s16

var cardbody = document.getElementById("cardbody");

//s6 //creating add fucntion 
function onAddPost(e) {

    // e.preventDefault();
    var textValue = document.getElementById('textvalue'); //step1
    var postArea = document.getElementById('postarea');


    var text = textValue.value; //s2
    var area = postArea.value;

    var object = {}; //step3
    object.title = text;
    object.post = area;
    console.log("obj", object);

    postList.map((object, e) => {
        object.id = e + 1
        return object
    })

    if (postValid == true) { //s18

        postList[currentPostIndex] = object; //condition to prevent edited card not created again.

    } else {
        postList.push(object); //s5
        console.log("pushdata", postList);

    }

    DisplayPost() //s8
    resetFeild()  //s10

}

//s7 //create function for display card
function DisplayPost() {

    var cardbody = document.getElementById("cardbody");
    cardbody.innerHTML = '';
    for (let i = 0; i < postList.length; i++) {

        cardbody.innerHTML += ` <div class="card" style="width: 18rem; background: ${(i % 2 == 0) ? 'white' : 'lightgray'} ">    
           <div class="card-body">
            <h5 class="card-title">${postList[i].title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${postList[i].id}</h6>
            <p class="card-text">${postList[i].post}</p>
            <button type="button" class="btn btn-link" onclick="editCard(${i})">Edit</button>
            <button type="button" class="btn btn-link" onclick="deleteCard(${i})">Delete</button>
        </div>
    </div> `

    }
}
//how to display dynamic data using js
//how to hold or get object in a array or global array. (i was searching wrong)
//on button click my page is not reloading in JavaScript.(the problem is my page is not reloading so data is not render properly)
//ans was -specify the button type as 'button'.

function resetFeild() {  //s9

    document.getElementById('textvalue').value = "";
    document.getElementById('postarea').value = "";
}
//how to show dynamic card side by side in javascript //s11
//Dynamic align side by side divs - Stack Overflow
//how to give space between 2 divs in a row in javascript //s12

//delete card //s13
function deleteCard(ind) { //s14

    // var cardbody = document.getElementById("cardbody");
    // cardbody.parentElement.removeChild(cardbody); //it will delete all row n cards   
    //eleteIndex.splice(0,1)
    // delete postList[ind]
    // postList.remove(postList[ind]);
    // postList[ind].remove()
    postList.splice(ind, 1) //s14
    console.log("delete", postList)  //it will delete the object.
    DisplayPost();                  //it will update the array.
}

function editCard(index) { //s15

    let indexofCard = postList[index]
    document.getElementById('textvalue').value = indexofCard.title
    document.getElementById('postarea').value = indexofCard.post
    console.log(indexofCard)
    currentPostIndex = index; //s17
    postValid = true;
}


//s16 - i have to edit exact card and ssave it
//how to give card colr one is white and another is gray dinamically
// variable rahenga jiska color white rahenga by default
// s19 - card hase to change color alternately. background: ${(i % 2 == 0) ? 'white' : 'lightgray' }. index k andar number hay to i k sath operation karenge. postList[i] object lera tha .




















