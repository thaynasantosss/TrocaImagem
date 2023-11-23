let imagem1 = "churras_imagem/c.jpg";
let  imagem2 = "lasanha_imagem/l.jpg";
let imagem3 = "sorvete_imagem/s.jpg";

function Mudar(){
    document.getElementById("figura").src = imagem1;
    let início= imagem1;
    imagem1 = imagem2;
    imagem2 = imagem3;
    imagem3 = início;
}