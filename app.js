const app = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        prevFullName: '',
        currentFullName: '',
        count: 0,
    },
    computed: {
        fullName: {
            get: function() {
                return `${this.firstName} ${this.lastName}`;
                },
            set: function(newFullName) {
                const [firstName, lastName] = newFullName.split(' ');
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
    },
    watch: {
        fullName: function() {
            this.increment();
        }
    },
    methods: {
        increment: function() {
            this.count++;
        },
        reset: function() {
            this.firstName = '';
            this.lastName = '';
            this.count = -1;
        }
    }
});



