/*interface usuario{
    id: string;
    email : string;
    sexo?: 'masculino' | 'feminino';
}

interface Admin extends usuario{
    cargo: 'super' | 'normal' | 'baixo-acesso';
}

function redirect(usuario: usuario | Admin){
    if('cargo' in usuario){
        //redirecionar para a area de adm
    }
    //area usuario
}

interface animalDomestico {
    readonly nome: string;
    idade: number;
    parqueFavorito?: string;
}

class Meucachorro implements animalDomestico {
    nome;  
    idade;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new Meucachorro('apolo', 1);*/

