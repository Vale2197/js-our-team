/* Descizione
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image
Per le immagini potete mettere il percorso di un immagine presa da internet, provate con lorem pixum (https://picsum.photos/images)
Todo:
Stampare in console tutti gli elementi del team e le loro proprieta.
Esempio
nome: Ben Green
role: CEO
image: https://picsum.photos/id/1025/300/300
 */

let teamMembers = [
    {
        nome: "Michael",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Pam",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Jim",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Dweight",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Kelly",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Oscar",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
    {
        nome: "Angela",
        ruolo: "Amministratore",
        immagine: "https://picsum.photos/id/1025/300/300"
    },
]


for (let i = 0; i < teamMembers.length; i++) {
    const element = teamMembers[i];

    console.log(element);

            for (const key in element) {
                console.log(key, element[key]);
            };
    
};
