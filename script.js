$(document).ready(onReady);

function onReady() {
    console.log('our journey begins');
    //let submitButton = $('#submit-btn').val();
    //$('#submit-btn').on('click',submitHandle);
    $('#form-input').on('submit', submitHandle);
    $('#table-input').on('click','.delete-btn',handleDelete);
    

}
let MonthlySalary = 0;
function submitHandle(event) {
console.log('insubmit');
    let nameInput = $('#name-input').val();
    let lastnameInput = $('#lastname-input').val();
    let idInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input').val();
    
    event.preventDefault();
    console.log('name:',nameInput,'lastname:',lastnameInput,'id',idInput,'title:',titleInput,'Annual Salary:',salaryInput);

    $('#table-input').append(`<tr><td>${nameInput}</td><td>${lastnameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${salaryInput}</td><td><button class="delete-btn">Delete</button></td></tr>`);
  //let MonthlySalary = (salaryInput/12);
    MonthlySalary+=Math.round(salaryInput/12)
    $('#total-monthly').text(MonthlySalary);
    if(MonthlySalary>20000){
        $('#month-css').css('background-color', 'red');
    }
}


function handleDelete() {
    $(this).parent().parent().remove();
    
    
    }

