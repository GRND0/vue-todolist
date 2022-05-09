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
        },

        methods: { 
            rimuovi: function(index) {
                this.dafare.splice(index,1);
            },
        }

})

