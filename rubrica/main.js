// wrapper dei contatti
let contactsWrapper = document.querySelector('#contactsWrapper')

// Bottoni
let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactsBtn = document.querySelector('#addContactsBtn');
let removeContactsBtn = document.querySelector('#removeContactsBtn')
let modifyContactBtn = document.querySelector('#modifyContactBtn')
// inputs

let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');



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
        // Icone
        let icons = document.querySelectorAll('.icon');
        icons.forEach( (icona , i)=>{
            icona.addEventListener('click', ()=>{
                this.lista_contatti.splice(i , 1);
                this.showContacts();
            })
        } )
    },

    addContact : function(newName , newNumber) {
        if (newName && newNumber) {
            this.lista_contatti.push( {contact_name : newName , phone_number : newNumber} );
            this.showContacts();
            if(check == false){

                check = true;
                showContactsBtn.innerHTML = 'Nascondi contatti';
            }
        }else{
            alert('Devi inserire SIA il nome SIA il numero!')
        }
    },

    removeContact : function (removedName){
        let names = this.lista_contatti.map((contatto)=>contatto.contact_name);
        let index = names.indexOf(removedName);
        if (index >= 0) {
            this.lista_contatti.splice(index , 1);
            rubrica.showContacts();  
            if(check == false){
                check = true;
                showContactsBtn.innerHTML = 'Nascondi contatti';
        }

        }
        
        
    

    },

    modifyContacts : function(nome, numero) {
        this.lista_contatti.forEach(contatto =>{
            if (contatto.contact_name == nome) {
                contatto.phone_number = numero;
            }
        })
    }
            
};

    
    
    
    
    showContactsBtn.addEventListener('click', ()=>{
        if(check == false){
            rubrica.showContacts();
            check = true;
            showContactsBtn.innerHTML = 'Nascondi contatti';
        }else{
            contactsWrapper.innerHTML = '';
            check = false;
            showContactsBtn.innerHTML = 'Mostra contatti';
        }
            
    });


    addContactsBtn.addEventListener('click' , ()=>{
        rubrica.addContact( nameInput.value , numberInput.value);
        nameInput.value = '';
        numberInput.value = '';

    });

    removeContactsBtn.addEventListener('click' , ()=>{
        rubrica.removeContact(nameInput.value);
    });
    

    modifyContactBtn.addEventListener('click' , ()=>{
        if (nameInput != '') {
            rubrica.modifyContacts(nameInput.value , numberInput.value)
            nameInput.value = '';
            numberInput.value = '';
        }
    });