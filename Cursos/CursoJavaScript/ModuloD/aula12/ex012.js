var hora = new Date()
hora = hora.getHours()

console.log(`Agora são ${hora} horas`)

if(hora >= 5 && hora < 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}