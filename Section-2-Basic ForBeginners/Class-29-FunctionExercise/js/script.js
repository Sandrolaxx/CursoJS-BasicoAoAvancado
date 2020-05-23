function myScope () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    let person = [];

    function receivesFormEvent (e) {
        e.preventDefault();
        
        const firstName = form.querySelector('.firstName');
        const lastName = form.querySelector('.lastName');
        const weight = form.querySelector('.weight');
        const heigth = form.querySelector('.heigth');
        
        person.push({
            firstName : firstName.value, 
            lastName : lastName.value, 
            weight : weight.value, 
            heigth : heigth.value
            });

        console.log(person);

        result.innerHTML = `Name: ${firstName.value} <br> LastName : ${lastName.value} <br> Weight: ${weight.value} <br> Heigth: ${heigth.value}`;
    };

    form.addEventListener('submit', receivesFormEvent);
}

myScope();