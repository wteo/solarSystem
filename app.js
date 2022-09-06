const app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        passwordConfirmation: '',
        submitted: false,
    },
    computed: {
        isUsernameValid: function() {
            if (this.username.length >= 5) {
                return true;
            }
            return false;
        },
        isPasswordMatched: function() {
            if (this.password === this.passwordConfirmation) {
                return true;
            }
            return false;
        },
        passwordLength: function() {
            if (this.password.length >= 6 && this.password.length <= 12) {
                return true;
            }
            return false;
        },
        isFormValid: function() {
            if (this.isPasswordMatched && this.passwordLength && this.isUsernameValid) {
                return true;
            }
            this.submitted = false;
            return false;
        },
        feedback: function() {
            if (!this.isUsernameValid) {
                return 'Invalid username. Username must have at least 5 characters';
            } else if (!this.isPasswordMatched) {
                return 'Password not matched!';
            } else if (!this.passwordLength) {
                return 'Password characters must be between 6 to 12 characters.';
            } else {
                return 'Login Successful!';
            }
        },
        submitHandler: function() {
            if (!this.isUsernameValid) {
                this.resetUserName();
                this.submitted = true;
            } 
            if (!this.isPasswordMatched || !this.passwordLength) {
                this.resetPassword();
                this.submitted = true;
            }
        },
    },
    methods: {
        resetPassword: function() {
            this.password='';
            this.passwordConfirmation='';
        },
        resetUserName: function() {
            this.username='';
        }
    }
});