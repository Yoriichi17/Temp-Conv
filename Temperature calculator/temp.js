let button = document.getElementById("btn");



button.addEventListener("click", () => {
    let fn = document.querySelector("#fn").value;
   

    
   
    let ress = ((fn*(9/5))+ 32) + " °F" ;
    let elem = document.getElementById("title");
    let  ele = document.getElementById("para");
    elem.innerHTML = ress;

    if (isNaN(fn)) {
        return alert("Please enter a valid number");
    }
    ele.textContent = "Converted Fahrenheit Value : " ;
    

    })

    let button1 = document.getElementById("btn1");



    button1.addEventListener("click", () => {
        let sn = document.querySelector("#sn").value;
       
    
        
       
        let ress1 = ((sn-32)*(5/9)) + " °C" ;
        let elem1 = document.getElementById("title1");
        let  ele1 = document.getElementById("para1");
        elem1.innerHTML = ress1;
    
        if (isNaN(sn)) {
            return alert("Please enter a valid number");
        }
        ele1.textContent = "Converted Celcius Value : " ;
        
    
        })

    