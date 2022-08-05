const nombreUsuario = prompt("Ingrese su nombre");
const pesoUsuario = prompt("Ingrese su peso en kg");
const estaturaUsuario = prompt("Ingrese su estatura en metros, ejemplo: 1.75 (no utilice comas)");

alert("Señor " + nombreUsuario + ", su peso es: " + pesoUsuario + ", su estatura es: " + estaturaUsuario);

const miImc = calcularIMC(pesoUsuario,estaturaUsuario);

alert("Su Indice de Masa Corporal es: " + miImc.toString());

diagnosticar(miImc);

function calcularIMC(peso, estatura){
    const calculo = parseFloat(pesoUsuario) / (parseFloat(estaturaUsuario)*parseFloat(estaturaUsuario))
    return calculo;
}

function diagnosticar(IMC){
    if(IMC<18.5){
        alert("Su diagnóstico es bajo peso");
    }else if((IMC>=18.5)&&(IMC<=24.9)){
        alert("Su diagnóstico es normal");
    
    }else if((IMC>=25.0)&&(IMC<=29.9)){
        alert("Su diagnóstico es sobrepeso");
    }else{
        alert("Su diagnóstico es obesidad");
    }
}