const form = document.querySelector('form');

   form.addEventListener('submit',
(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const range = document.querySelector('#range');
   if(height === '' || height < 1 || isNaN(height)){
    results.innerHTML = `please give a valid height`
   }
   else if(weight === '' || weight < 1 || isNaN(weight)){
    results.innerHTML = `please give a valid weight`
   }
   else{
    const bmi = (weight / ((height * height)/ 10000));
    results.innerHTML = `your bmi is ${bmi.toFixed(2)}`
    if(parseInt(results.value ) < 18.6){
        range.innerHTML = `you are underweight`
    }
    else if(parseInt(results.value)>=18.6 && parseInt(results.value) <=249 ){
    range.innerHTML = `you are normal`
   }
   else{
    range.innerHTML = `overweight`
   }
    }
}
)
