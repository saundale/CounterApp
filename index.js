const countValue = document.querySelector('#counter')

function increment(){
    // fetch value from UI
    let value = parseInt(countValue.innerText);

    // update the value
    value=value+1;

    // return the value to UI
    countValue.innerText=value;
}

const decrement = ()=>{
    // fetch value from UI
    let value = parseInt(countValue.innerText);

    // update the value
    value=value-1;

    // return the value to UI
    countValue.innerText=value;
}