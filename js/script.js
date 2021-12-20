// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


var app = new Vue({
    el: '#app',
    data: {
      newElement: "",
      todos: [
        {
            text: "Farina",
            done: false,
        },

        {
            text: "Cioccolato",
            done: false,
        },

        {
            text: "Zucchero",
            done: false,
        },
      ]

      
    },

    methods: {
      addElement: function () {
        if (this.newElement.length != 0) {
          console.log(this.newElement.length);
          let object = {
            text: this.newElement,
            done: false,
          }

          this.todos.unshift(object);
          this.newElement = " ";
        }
      },

      addLine: function () {
          this.todos.done = !this.todos.done;

          console.log("clicked");
          console.log(this.todos.done);
      },
      // elementClick: function () {
      //   if (this.todos.done == false) {
      //     this.todos.done == true;
      //     //addline
      //   } else {
      //     this.todos.done == false;
      //     //remove line
      //   }

      // },

      deleteItem: function (index) {
        //al click della X deve sparire l'elemento
        this.todos.splice(index, 1)
        console.log(index);
      }

    },

    // created() {
    //   deleteItem (todos)
    // },

    //if (done == true) show line

})



