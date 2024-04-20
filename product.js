
let inf=JSON.parse(localStorage.getItem('data'))

let user = document.querySelector("#user");
let info=JSON.parse(localStorage.getItem('value')) || []

if (user) {
   
    user.innerText = inf.name;
}else{
    console.log("Some message");
}

// Output something to the console

function show(){
    let view=document.querySelector('#view')
    view.addEventListener('click',function(){
        let cardData=document.querySelector("#cardData");
        cardData.style.display='none'
    })
    function showData(data){
        data.forEach(element => {
            let div=document.createElement("div")
            let title=document.createElement("div")
                title.innerText=element.title;
            let img=document.createElement("img")
                img.src=element.src;
            let price=document.createElement("h3")
                price.innerText='Price '+element.price;
            let rating=document.createElement("h3")
                rating.innerText='Rating '+element.ratings;
            let main=document.createElement('div')
            let btnadd=document.createElement("button")
                btnadd.innerText="Add to Card"
            // let btndelete=document.createElement("button")
            //     btndelete.innerText="Delete"
                main.append(btnadd)
            div.append(img,title,price,rating,main)
            view.append(div)
            btnadd.addEventListener('click',function(){
                info.push(element);
                console.log(element)
                console.log(info)
                // cardShow()
                saveData()
            })
        });
    }

    fetch('http://localhost:3000/products')
    .then((res)=>res.json())
    .then((data)=>{
        showData(data)
    })
    .catch((er)=>{
        console.log(er)
    })
}
show()

document.querySelector("#card").addEventListener('click',function(){
    let cardData=document.querySelector("#cardData");
        cardData.style.display='block'
        cardShow()
})

function saveData(){
    localStorage.setItem('value',JSON.stringify(info))
    cardShow()
    
    
}


function cardShow(){
    let cardData=document.querySelector("#cardData");
        cardData.innerText=''
    let array=JSON.parse(localStorage.getItem('value'))
    array.forEach(function(element,i){
        let div=document.createElement('div')
        let img=document.createElement('img')
            img.src=element.src
        let title=document.createElement('div')
            title.innerText=element.title
        let price=document.createElement('div')
            price.innerText="Price "+element.price
        let btn=document.createElement('button')
            btn.innerText="Delete"
            

        div.append(img,title,price,btn)
        cardData.append(div)
        btn.addEventListener('click',function(){
            info.splice(i,1)
            saveData()
            
            
        })
    })
}
cardShow()
