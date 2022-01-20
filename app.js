Vue.createApp({
    data() {
        return{
            tasks: [],
            enteredValue: ''
        };
    },
    methods: {
        addTask(){//Czy do tej funkcji robić try catch czy jest za prosta na takie coś i nie ma ryzyka wpisania czegoś złego?
            if (!this.enteredValue){ //czy tutaj mozna wykrzyknik czy lepiej warunek z "==" ?
                alert('You must fill task name!'); 
            }else{
                this.tasks.push(this.enteredValue);
            }
        }
    }
}).mount('#app');