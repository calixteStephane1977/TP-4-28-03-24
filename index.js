
// Contexte : Je suis toiletteur et j'aimerai m'organiser un peu.
//  Mes patients régulier sont de 1 rongeur , 2 chat et 3 chien.
//   Mes animaux ont : -type -nom -sexe -et j'aimerai pouvoir dire 
//   si ils ont un rendez vous de prévu ou non. ------------Class 
//   ,Tableaux,condition, début de boucle (foreach)-------------
//  Consignes : 1)

class Animal {
    constructor(nom,sex,rendez_vous){
        this.nom=nom,
        this.sex=sex,
        this.rendez_vous=rendez_vous
    }
    type (rongeur,chat,chien){
        this.rongeur=rongeur
        this.chat=chat
        this.chien=chien
    }

}

//   Tu dois faire un nouveau fichier juste pour cette exercice. 2)/



let arrayAnimaux=[
    // "Ratatouillette",
    // "Samba",
    // "Gribouille",
    // "Linux",
    // "Hatena",
    // "Holiwood"
]
//    Tu dois créer les différents animaux sous forme d'instance de la classe "animal". 3)/
    const Ratatouillette= new Animal("Ratatouillette","femmelle",'12 octobre');
    Ratatouillette.type("rongeur")
    console.log(Ratatouillette);
    arrayAnimaux.push(Ratatouillette) 
    
    const Samba= new Animal("Samba","femmelle",false);
    Samba.type('',"chat",'')
    console.log(Samba);
    arrayAnimaux.push(Samba) 
    
    const Gribouille= new Animal("Gribouille","femmelle",false);
    Gribouille.type('',"chat",'')
console.log(Gribouille);
    arrayAnimaux.push(Gribouille) 
    
    const Linux= new Animal("Linux","mâle",false);
    Linux.type(''," ",'chien')
console.log(Linux);
    arrayAnimaux.push(Linux) 
    
    const Hatena= new Animal("Hatena","femmelle",'20 mars');
    Hatena.type(''," ",'chien')
console.log(Hatena);
    arrayAnimaux.push(Hatena) 
    
    const Holiwood= new Animal("Holiwood","femmelle",'12 novembre');
    Holiwood.type(''," ",'chien')
console.log(Holiwood);
    arrayAnimaux.push(Holiwood) 
//    Tu dois créer un tableau avec les différents animaux dedans. 4)/
    //    Tu dois m'afficher les animaux (la liste entière). 5)/
const getLastItem = (arr) => {
        
    for (let i = 0; i < arr.length; i++) {     
        const element = arr[i];
        console.log(element);
        
    }
}
getLastItem(arrayAnimaux);
console.log(arrayAnimaux);
//    Tu dois m'afficher les informations du dernier animal. 6) /
console.log(arrayAnimaux[arrayAnimaux.length-1]);

//    Tu dois supprimer cet animal 7) 
const supp =arrayAnimaux.pop(); 
console.log(supp);
// tu dois ajouter un nouvel animal au tableau. 
// (Un rongeur mâle du nom de Hamtaro avec qui j'ai déjà un rendez vous de prévu) 8

const Hamtaro= new Animal("Hamtaro","mâle",'15 mars ');
Hamtaro.type('rongeur'," ",'')
console.log(Hamtaro);
arrayAnimaux.push(Hamtaro) 
console.log(arrayAnimaux);

    
    //   8)(Bonus) Afficher avec un foreach et une condition dedans , tous les animaux avec qui j'ai rendez vous.
    arrayAnimaux.forEach((animal)=>{
        if(animal.rendez_vous!==false){
            
            console.log("Mon rendez-vous est avec : "+" "+animal.nom+" "+"le"+" "+animal.rendez_vous);
        }
                    
    })
    
    //   9)(Bonus) Dans un forEach,
    //   afficher tous les animaux qui sont ou des chien ou des males 
    arrayAnimaux.forEach((animal)=>{
        if(animal.sex !=="femmelle"){
            
            console.log(animal.nom+" "+"est un "+" "+animal.sex);
        }
                    
    })
    //   Informations complémentaire : Les animaux sont : 
    //   -Un rongeur femelle du nom de ratatouillette avec qui j'ai un rendez vous 
    // - Un chatte du nom de Samba avec qui je n'ai pas de rendez vous 
    //   -Une chat du nom de Gribouille avec qui j'ai un rendez vous 
    // - Un chien du nom de Linux avec qui je n'ai pas de rendez vous 
    //   -Une chienne du nom de Hathena avec qui j'ai un rendez vous 
    // - Un chien du nom de Holiwood avec qui j'ai un rendez vous
    
    
    
    
    
    
    

    
    
    
    
    
    
    

    

    




























// class Rongeur extends Animal{
    //     constructor(nom,sex,rendez_vous){
    //         this.nom=nom
    //         this.sex=sex
    //         this.rendez_vous=rendez_vous=rendez_vous
    //     }
    
    // }
    // console.log(rongeur_1);
    // class chat extends Animal{
    //     constructor(nom,sex,rendez_vous){
        //     this.nom=nom,
        //     this.sex=sex,
        //     this.rendez_vous=rendez_vous
//     }

// }
// class chien extends Animal{
    //     constructor(nom,sex,rendez_vous){
        //     this.nom=nom,
//     this.sex=sex,
//     this.rendez_vous=rendez_vous
//     }

// }
