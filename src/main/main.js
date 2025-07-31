import { v4 as myuuid } from "https://jspm.dev/uuid";
import { displayCountingNumber, displayId, displayData } from "../components/htmlElements/element.js";
import { generateButton, submitButton, checkDataButton } from "../components/htmlElements/button.js";

const data = [];

const storeData = (id) => {

    const newObject = {id: id}
    data.push(newObject)

    return data;
}

const generateButtonSetup = () => {

    let countNumber = 4;

    const countDownNumber = setInterval(() =>{
        
        --countNumber;

        displayCountingNumber.textContent = countNumber;

        if (countNumber <= 0) {
            clearInterval(countDownNumber);
            displayCountingNumber.textContent = "";
            displayId.textContent = myuuid();
        }
    }, 1000)
};

generateButton.addEventListener("click", generateButtonSetup)

const submitButtonSetup = () => {
    
    if (displayId.textContent === "") {
        alert("Please click the button ID Generator!");
    } else {
        storeData(displayId.textContent);
        displayId.textContent = "";
    }
}

submitButton.addEventListener("click", submitButtonSetup)

const checkDataButtonSetup = () => {

    if (data.length <= 0) {
        alert("Akimkim ko, submit mo po muna")
    } else {
        displayData.textContent = data[0].id;
    }
}

checkDataButton.addEventListener("click", checkDataButtonSetup)