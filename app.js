const app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        isSubmitted: false,
        style: {
            form: 'form'
        },
        errors: {
            invalidUsername: 'Username too short.',
            invalidPassword: 'Password must be between 6 to 12 characters.'
        }
    },
    computed: {
        isUsernameValid: function() {
            if (this.username.length >= 5) {
                this.setIsSubmitted(false);
                return true;
            }
            return false;
        },
        isPasswordValid: function() {
            if (this.password.length >= 6 && this.password.length <= 12) {
                this.setIsSubmitted(false);
                return true;
            }
            return false;
        },
        isFormValid: function() {
            return this.isPasswordValid && this.isUsernameValid;
        },
        feedback: function() {
            if (!this.isUsernameValid) {
                return this.errors.invalidUsername;
            }
            if (!this.isPasswordValid) {
                return this.errors.invalidPassword;
            }
            return '';
        },
        submitHandler: function() {
            this.setIsSubmitted(true);
            if (this.feedback === this.errors.invalidUsername) {
                this.resetUserName();
                this.resetPassword();
            }
            if (this.feedback === this.errors.invalidPassword) {
                this.resetPassword();
            }
        }
    },
    methods: {
        resetPassword: function() {
            this.password = '';
        },
        resetUserName: function() {
            this.username = '';
        },
        setIsSubmitted: function(boolean) {
            this.isSubmitted = boolean;
        }
    }
});