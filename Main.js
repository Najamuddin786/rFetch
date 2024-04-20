
let user=document.querySelector("#user")


function getData(email,password){
    async function tr(){
        let data=await fetch('http://localhost:3000/users')

        let res=await data.json()
        if(email>0){
            
        }else{
            function final(){
                res.forEach(element=> {
                    if(email==element.email && password==element.password){
                        alert("Sec ok...")
                        localStorage.setItem('data',JSON.stringify(element))
                        window.location.href ='./productPage.html'
                       
                        
                    }
                });
            }
            final()
        }
        try {
            
        } catch (error) {
            console.log('error')
            
        }
    }
    tr()
}

function login(event){
    event.preventDefault()
    let email=document.querySelector("#loginEmail").value
    let password=document.querySelector("#loginPass").value
    getData(email,password)
    // console.log(email,password)

    
}

function sing(event){
    event.preventDefault()
    let form=document.querySelector("form")
    let name=form[0].value
    let email=form[1].value
    let password=form[2].value
    let id=Math.random()
    let obj={
        id,
        name,
        email,
        password
    }
    console.log(obj)
    

    async function setUser(){
        let data=await fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(obj),
            
            

            
        }).then((res)=>{
            window.location.href ='./Login.html'
        })

    }
    setUser()

}