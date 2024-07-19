const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2afd8aa0f0msh2058e149c0ecbf0p1b3cdbjsn6837c0646697',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};





// const url1 = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/';
// const options1 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2afd8aa0f0msh2058e149c0ecbf0p1b3cdbjsn6837c0646697',
// 		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
// 	}
// };





let select = document.getElementById("name")
let box2 = document.getElementById("box2")

fetch(url , options).then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);


    data.forEach(ele => {
        console.log(ele.name);
        select.innerHTML += `<option value="${ele.name}" >${ele.name}</option>`
    });


}).catch((err) => {
    console.log(err);
})


let section = () =>{

    let t = select.value
    fetch(url , options).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        data.forEach(ele => {
            if(t == ele.name){
                box2.innerHTML = ` <h1 id="names">${ele.name}</h1>
                <p id="discription-hindi">${ele.chapter_summary_hindi}</p>
                <p id="discription-englihs">${ele.chapter_summary}</p>
                <p id="name_translated">${ele.name_translated}</p>
                <p id="slug">${ele.slug}</p>
                <button onclick="adhyay(${ele.id})">click me</button>`  
            }
        });

    }).catch((err) => {
        console.log(err);
    })

}

let adhyay = (num) =>{
    

    const url1 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${num}/verses/`;
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2afd8aa0f0msh2058e149c0ecbf0p1b3cdbjsn6837c0646697',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};


let box3 = document.getElementById("box-3")
box3.innerHTML=` `

fetch(url1 , options1).then((ress) => {
    return ress.json();
}).then((data) => {
    console.log(data);
    data.forEach((ele) => {
        box3.innerHTML += `<h3>${ele.text}</h3>
                          <p>${ele.translations[5].description}</p>`
    })

}).catch((err) =>{
    console.log(err);
})


 
}