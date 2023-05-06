$(document).ready(onReady);

function onReady() {
    console.log('our journey begins');
    let submitButton = $('#submit-btn').val();
    $('#submit-btn').on('click', submitHandle)

}

function submitHandle(event) {
    let nameInput = $('#name-input').val();
    let lastnameInput = $('#lastname-input').val();
    let idInput = $('#id-input').val();
    let titleInput = $('#title-input').val();
    let salaryInput = $('#salary-input');
    event.preventDefault();

    $('#table-input').append(`<tr><td>${nameInput}</td><td>${lastnameInput}</td><td>${idInput}</td><td>${titleInput}</td><td><${salaryInput}/td><td><button>Delete</button></td></tr>`);

}