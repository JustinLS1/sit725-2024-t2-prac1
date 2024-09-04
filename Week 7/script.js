document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});
 
let socket = io();
socket.on('number', (msg) => {
console.log('Random number: ' + msg);
})

const getCards = () => {
    $.get('/api/cards',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    getCards();
    $('.modal').modal();
});