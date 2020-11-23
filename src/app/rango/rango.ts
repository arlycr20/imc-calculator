export function rango(imc) {
    let res = '';   
    if (imc >= 15.0 && imc <= 18.4) {
        res='peso bajo';
    }else if (imc >= 18.5 && imc <= 24.9) {
        res='peso normal';
    }else if(imc >= 25.0 && imc <= 29.9 ){
        res='sobrepeso';
    }else if (imc >= 30.0 && imc <= 34.9) {
        res='obesidad 1';
    }else if (imc >= 35.0 && imc <= 39.9) {
        res='obesidad 2';
    }else if (imc >= 40.0) {
        res='obesidad 3';
    }

return res;

}