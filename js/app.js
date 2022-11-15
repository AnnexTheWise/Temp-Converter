const submitBtn = document.getElementById("submitBtn");
const results = document.getElementById('results')


    let button = document.getElementById("submitBtn");
    button.addEventListener("click", (e)=> {
        e.preventDefault();
        convertTemp();
    })
    
    const convertTemp =()=> {

    // const temp = document.getElementById("temp").value;
    // const fahrenheit = document.getElementById("fahrenheit").value;
    // const kelvin = document.getElementById("kelvin").value;
    // const rankine = document.getElementById("rankine").value;
    // const newton = document.getElementById("newton").value;
    // const reaumur = document.getElementById("reaumur").value;
    // const celsius = document.getElementById("celsius").value;
        let temperature = document.getElementById('temperature').value
        let tempType =document.querySelector('input[name=tempType]').value
        console.log(temperature, tempType);
        switch(tempType){

        case "fahrenheit":
            const fah = ((temperature * (9 / 5)) + 32);
            console.log(fah);
            results.innerText += fah
        break;
                
        case "kelvin":
            const kel = (temperature + 273.15);
            console.log(kel);
            results.innerText += `${kel}`
            break;    
                    
        case "rankine":
            const ran = ((temperature * (9 / 5)) + 491.67);
            console.log(ran);
            results.innerText += `${ran}`
            break;
                        
        case "newton":
            const newt = (temperature * 0.33);
            console.log(newt);
            results.innerText += `${newt}`
            break;
                            
        case "reaumur":
            console.log(rea);
            const rea = (temperature * 0.8);
            results.innerText += `${rea}`
            break;
                                
        default:
                console.log(cel);
                const cel = (temperature);
                results.innerText += `${cel}`
                break;
            }
    
    }