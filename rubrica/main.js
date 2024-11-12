//passaggio 1 : creare l'oggetto "rubrica";
// passaggio 2 : catturare la colonna dove andremo a creare tante cards quanti sono i nostri contatti;
//  passaggio 3 : creare un metodo che mi mostri tutti i contatti
//  passaggio 4 : il metodo funziona ma crea la duplicazione degli stessi contatti, devo fare in modo che questo non avvenga.
// passaggio 5 : abbiamo risolto ma vogliamo che il bottone "Mostra Rubrica" al secondo click nasconda la rubrica 

// wrapper dei contatti
let contactsWrapper = document.querySelector('#contactsWrapper')

// Bottoni
let showContactsBtn = document.querySelector('#showContactsBtn') 

// variabile d'appoggio
let check = false;




const rubrica = {

    lista_contatti : [
        {contact_name : 'Yoda' , phone_number : 333333333},
        {contact_name : 'Anakin' , phone_number : 444444444},
        {contact_name : 'Obi-Wan' , phone_number : 555555555},
    ],

    showContacts : function(){
        contactsWrapper.innerHTML = '';

        this.lista_contatti.forEach( (contatto)=> {
            let div = document.createElement('div');
            div.classList.add('card-custom');
            div.innerHTML = `
                            <p class="lead">${contatto.contact_name}</p>
                    <p>${contatto.phone_number}</p>
                    <i class="fa-solid fa-trash-can icon"></i>
                    
            `;
            contactsWrapper.appendChild(div);
    
        });  
    }
    
    
    };
    
    showContactsBtn.addEventListener('click', ()=>{
        if(check == false){
            rubrica.showContacts();
            check = true;
        }else{
            contactsWrapper.innerHTML = '';
            check = false;
        }
            
    });
    
