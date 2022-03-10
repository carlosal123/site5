// document.addEventListener('DOMcontentloaded', function() {
//     var dk2 = document.querySelector('.dk')

//     dk2.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         dk2.classList.toggle('active')
//     });
// })

var ativo = 0
var dk = document.querySelector('.mode-switch')
if(ativo == 0){
    dk.addEventListener('click', function(){
        dk.classList.add('active')
    });
    ativo = 1
} else {
    dk.addEventListener('click', function() {
        dk.classList.remove('active')
    })
    ativo = 0
}



   