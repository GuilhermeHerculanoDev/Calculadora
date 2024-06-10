let parentese = true;

function limpar(){
  document.getElementById('resultado').value = ''
}

function apagar(){
  const numero = document.getElementById('resultado').value 
  
  document.getElementById('resultado').value = numero.substring(0, numero.length -1)
}

function colocar(num){
  document.getElementById('resultado').value += num
}

function parenteses(){
  const numero = document.getElementById('resultado').value;
  
  if(parentese){
    document.getElementById('resultado').value += '('
  }else{
    document.getElementById('resultado').value += ')'
  }
  
  parentese = !parentese;
}

function calcular(){
  const numero = document.getElementById('resultado').value
  
  document.getElementById('resultado').value = eval(numero)
}