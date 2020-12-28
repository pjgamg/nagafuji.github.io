(function () {
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            // name: 'nagafuji'
            newItem: "",
            // todos: [{
            //     title: 'task 1',
            //     isDone: false
            // }, {
            //     title: 'task 2',
            //     isDone: false
            // }, {
            //     title: 'task 3',
            //     isDone: true
            // }]
            todos: []
        },
        watch: {
            // todos: function () {
            //     localStorage.setItem('todos', JSON.stringify(this.todos));
            //     alert('Data saved!');
            // }
            todos: {
                handler: function () {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    // alert('Data saved!');
                },
                deep: true
            }
        },
        mounted: function () {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        // methods: {
        //     addItem: function (e) {
        //         e.preventDefault();
        //         this.todos.push(this.newItem)
        //     }
        methods: {
            addItem: function () {
                var item = {
                    title: this.newItem,
                    isDone: false
                }
                this.todos.push(item);
                this.newItem = '';
            },
            deleteItem: function (index) {
                if (confirm('are you sure?')) {
                    this.todos.splice(index, 1);
                }
            },
            purge: function () {
                if (!confirm('delete finished?')) {
                    return;
                }
                // this.todos = this.todos.filter(function (todo) {
                //     return !todo.isDone;
                // });
                this.todos = this.remaining;
            },
        },
        computed: {
            remaining: function () {
                // var items = this.todos.filter(function (todo) {
                //     return !todo.isDone;
                // });
                // return items.length;
                return this.todos.filter(function (todo) {
                    return !todo.isDone;
                });
            }
        }
    });

    var likeComponent = Vue.extend({
        // props: ['message'],
        props: {
            message: {
                type: String,
                default: 'Like'
            }
        },
        // data: function () {
        data() {
            return {
                count: 0
            }
        },
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
        methods: {
            // countUp: function () {
            countUp() {
                this.count++;
                this.$emit('increment');
            }
        }
        // template: '<div><button>Like</button><button>Like</button></div>'
    });

    var likeButton = new Vue({
        el: '#likeButton',
        components: {
            'like-component': likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            // incrementTotal: function () {
            incrementTotal() {
                this.total++;
            }
        }
    });

})();