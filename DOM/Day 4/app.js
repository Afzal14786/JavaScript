
async function greet() {
    throw "Week Connection";
    return "Hellow World !";
}

greet().then((result) => {
    console.log("Promise Was Successfully Resolved", result);
})
.catch((error) => {
    console.log("Promise Was Rejected With Some Error : ", error);
});

let demo = async () => {
    console.log("This is the async demo function");
}

// demo
// .then((result)=> {
//     console.log("async arrow function resolved successfully : ", result);
// }).catch((error)=> {
//     console.log("Catch the error in async demo function : ", error);
// });

// function getNum() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             let num = Math.floor(Math.random() * 10) + 1;  // number b/t 1 & 10
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo2() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            /* Handling Rejections */
            let randNum = Math.floor(Math.random() * 5) + 1;
            if (randNum > 3) {
                reject("Promise Rejected");
            }
            h1.style.color = color;
            console.log(`Color Change To ${color}`);
            resolve("Color Changed");
        }, delay);
    })
}

async function changeColor2() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("brown", 1000);
        await changeColor("orange", 1000);
    } catch (error) {
        console.log("Error Caught");
        console.log(error);
    }

    let a = 5;
    console.log(a);
}

// changeColor2();

let jsonResponse = '{"fact":"Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an \u201cM\u201d for Mohammed on top of their heads because Mohammad would often rest his hand on the cat\u2019s head.","length":210}';

let validResponse = JSON.parse(jsonResponse);
console.log(validResponse);

let student = {
    name : "Md Afzal",
    age : 20,
    address : "Mumbai",
    Subject : ["Maths", "CS", "Physics"]
}

let convertToJSONObject =  JSON.stringify(student);
/**
 *  output : 
 * {"name":"Md Afzal","age":20,"address":"Mumbai","Subject":["Maths","CS","Physics"]}
 */
console.log(convertToJSONObject);

let url = "https://catfact.ninja/fact";

// fetch(url).then((response)=> {
//     console.log("Response : ", response);
//     return response.json();
// }) .then((data) => {
//     console.log(data);
//     console.log("Printing Only The Fact : ",data.fact, " And Length : ", data.length);
//     return fetch(url);
// })
// .then((res)=> {
//     return res.json();
// })
// .then((data)=> {
//     console.log("Response 2 : ", data);
//     console.log("Response 2 Fact : ", data.fact, " And Length : ", data.length);
// })
// .catch((error)=> {
//     console.log("Error caught : ", error);
// });

// console.log("I am happy with apna collage");

/**
 * we can use async function for fetch url 
 */

// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }

let btn = document.querySelector("#catFact");

btn.addEventListener("click", async ()=> {
    let randFact = await getFacts2();
    let p = document.querySelector("#result");
    // p.innerText = randFact;
    p.innerText = randFact;

});

async function getFacts2() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("Error -> ", err);
        return "No Fact Found";
    }
}


/**
 * Required to implement this code properly, still issue is not resolved 
 */

let dogRandomImage = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector("#dog");

dogBtn.addEventListener("click", async()=> {
    let imgPath = await RandomDogImage();
    let img = document.querySelector("#imagesDog");
    img.setAttribute("src", imgPath);
})

async function RandomDogImage() {
    try {
        let res = await axios.get(dogRandomImage);
        return res.data.message;
    } catch (err) {
        console.log("Error -> ", e);
        return "No Fact Found";
    }
}

/**
 * Sending Header using 'axios'
 */

let newUrl = "https://icanhazdadjoke.com/";

async function getFacts3() {
    try {
        // --------------------- //
        let config = {
            headers : {Accept : "application/json"}
        }
        // --------------------- //
        let result = await axios.get(newUrl, config);
        console.log(result.data);
    } catch(err) {
        console.log("Error : ", err);
    }
}

/**
 * Updating Query String Using 'axios'
 */

let universityLink = "http://universities.hipolabs.com/search?name=";
let uni_btn = document.querySelector("#clgList");

uni_btn.addEventListener("click", async ()=> {
    let countryName = document.querySelector("#countryInput").value;
    // let stateName = document.querySelector("#stateInput").value;

    console.log(countryName);
    let clg = await getCollages(countryName);
    console.log(clg);

    show(clg);
}) 

function show(clgArr) {
    let list = document.querySelector("#orderedList");
    list.innerText = "";
    for (colg of clgArr) {
        console.log(colg.name);
        let li = document.createElement("li");
        li.innerText = colg.name;
        list.appendChild(li);
    }
}

async function getCollages(countryName) {
    try {
        let res = await axios.get(universityLink+countryName);
        return res.data;
    } catch (err) {
        console.log("Error => ", err);
        return [];
    }
}
