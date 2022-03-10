// document.addEventListener('DOMcontentloaded', function() {
//     var dk2 = document.querySelector('.dk')

//     dk2.addEventListener('click', function(){
//         document.documentElement.classList.toggle('dark')
//         dk2.classList.toggle('active')
//     });
// })

var ativo = 0
var dk2 = document.querySelector('.dk')
if(ativo == 0){
    dk2.addEventListener('click', function(){
        document.documentElement.classList.toggle('dark')
        document.querySelector('body').classList.toggle('active')
    });
    ativo = 1
} else {
    dk2.addEventListener('click', function() {
        dk2.classList.remove('active')
    })
    ativo = 0
}



   