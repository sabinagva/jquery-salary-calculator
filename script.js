$(document).ready(onReady);

function onReady() {
    console.log('our journey begins');
    let submitButton = $('#submit-btn').val();
    $('#form-input').on('submit', submitHandle);
    $('#table-input').on('click','.delete-btn',handleDelete);

}

function submitHandle(event) {
    let nameInput = $('#name-input').val();
    let lastnameInput = $('#lastname-input').val();
    let idInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input');
    event.preventDefault();
    console.log('name:',nameInput,'lastname:',lastnameInput,'id',idInput,'title:',titleInput,'Annual Salary:',salaryInput);

    $('#table-input').append(`<tr><td>${nameInput}</td><td>${lastnameInput}</td><td>${idInput}</td><td>${titleInput}</td><td><${salaryInput}/td><td><button class="delete-btn">Delete</button></td></tr>`);

}
function handleDelete() {
    $(this).parent().parent().remove();
    
    
    }