const app = new Vue (
    {
        el:'#root',
        data: {
            dafare: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Prenotare visita',
                    done: true
                },
                {
                    text: 'Pagare bolletta',
                    done: true
                },
                {
                    text: 'Comprare pellicola',
                    done: false
                },
            ],
           
            nuovoElementoLista : "",
        },

        methods: { 
            aggiungi: function() {
                nuovoOggetto = {};
                nuovoOggetto["text"] = this.nuovoElementoLista;
                nuovoOggetto["done"] = true;
                this.dafare.push(nuovoOggetto) ;
                 

            },

            rimuovi: function(index) {
                this.dafare.splice(index,1);
            },
        }

})

