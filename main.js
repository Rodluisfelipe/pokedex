const url ="https://pokeapi.co/api/v2/pokemon/";
const iamgen = document.getElementById('image');
let nombre = document.getElementById('name');
 
    
const busqueda= async () => {
    let buscador = document.getElementById("buscador").value;
    

    const response = await fetch(`${url}${buscador}`);
    const result = await response.json();
    const resulta=await (result.forms[0].url)
   let img=document.getElementById('imagenp');
   let nombre = document.getElementById('nameCard');
   let icono = document.getElementById('figuremin');
   icono.innerHTML=`<img src="${result.sprites.front_default}" alt="imagen pokemon">`;
   nombre.innerHTML=result.name;
   img.innerHTML=`<img src="${result.sprites.other.dream_world.front_default}" alt="imagen pokemon">`;
    ;
    }
    
;


let boton = document.getElementById('searchb');
boton.addEventListener('click', busqueda);
