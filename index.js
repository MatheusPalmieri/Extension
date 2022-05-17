'use strict'
console.log("Extensão em atividade!")

function init() {
    var container = document.querySelector(".container")

    container.insertAdjacentHTML(
        'beforebegin',
        `
            <div class="selector">
                <select name="setor" class="setor" id="setor">
                    <option value="comercial">comercial</option>
                    <option value="obras">obras</option>
                    <option value="engenharia">engenharia</option>
                </select>

                <input type="submit" id="btn" class="btn">
            </div>
        `
    )
}

init()

var input = document.querySelectorAll('input[type = "checkbox"]')

var btn = document.getElementById('btn')
    btn.addEventListener('click', function(){
        activeCheckbox()
    })


function getSetor() {
    var option = document.getElementById('setor').value
    var definedSetor

    switch(option){
        case 'comercial':
            // Define os campos que serão checados
            definedSetor = [0, 1, 4]
            break
        
        case 'obras':
            // Define os campos que serão checados
            definedSetor = [0, 3]
            break
        
        case 'engenharia':
            // Define os campos que serão checados
            definedSetor = [2, 4]
            break
        default:
            alert("error!")
            alert("Verifique se a extensão está atualizada, caso contrário, constate o adminstrador.")
    }
    return definedSetor
}  

function activeCheckbox() {
    getSetor().forEach(function(element, index, array){
        
        console.log("a[" + index + "] = " + element);
    
        for(var x = 0; x <=input.length; x++){
            document.getElementById('f['+element+']fg'+element+'').checked = true
        }
    })
    console.log("========");
}
