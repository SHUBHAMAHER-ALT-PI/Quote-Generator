const quo = document.querySelector(".res");
const author= document.querySelector(".author");

let data="";
function fetchs(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15843f33a2msh71b513ccc0f7016p1478eejsn27720734b889',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            data=response;
            quo.innerHTML=response.content;
            author.innerHTML=response.originator.name;
        })
        .catch(err => console.error(err));
}
function tweet(){
    // const data= document.querySelector(".res");
    const url= `https://twitter.com/intent/tweet?text=${data.content} - ${data.originator.name}`;
    window.open(url,"_blank");
    
}