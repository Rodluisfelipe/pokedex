const url ="https://pokeapi.co/api/v2/pokemon/";
 
    
const busqueda= async () => {
    let buscador = "pikachu";
    

    const response = await fetch(`${url}${buscador}`);
    const result = await response.json();
    const resulta=await (result.forms[0].url)
    const responses = await fetch(`${resulta}`);
        const resultado = await responses.json();
        
    console.log(resultado.sprites["other"]);
    ;
    }
busqueda() 
;

