let dictionary = {
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    UPPERCASE : 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    NUMBERS : '0123456789',
    SYMBOLS : "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}
class PasswordGenerator {
    constructor() {}
     copyToClipboard(){
        var copyText = document.getElementById("generated-password-input")
        // copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        $('.clipboard-toast')
        .removeClass('hidden');
            setTimeout(() => {
                $('.clipboard-toast')
                .addClass('hidden');
            },1000);
        navigator.clipboard.writeText(copyText.value);
    }
     generatePasswordDictionary(){
        /* this function is used know which characters
        the password will contain and finally generate a dictionary */
        let passwordDictionary =''
        passwordDictionary = $('#include-uppercase').is(':checked') ? passwordDictionary + dictionary.UPPERCASE : passwordDictionary
        passwordDictionary = $('#include-lowercase').is(':checked') ? passwordDictionary + dictionary.LOWERCASE : passwordDictionary
        passwordDictionary = $('#include-numbers').is(':checked') ? passwordDictionary + dictionary.NUMBERS : passwordDictionary
        passwordDictionary = $('#include-symbols').is(':checked') ? passwordDictionary + dictionary.SYMBOLS : passwordDictionary

        return passwordDictionary
    }
     passwordStrengthRating() {
        let rating_message = ''
        // get the state of differents checkboxes
         let [hasUppercase,hasLowercase,hasNumber,hasSymbols] = [$('#include-uppercase').is(':checked'),$('#include-lowercase').is(':checked'),$('#include-numbers').is(':checked'),$('#include-symbols').is(':checked')]

         /* this function is used to set a rating message
        based on which checkboxes are checked */
        function rating(){
        if(hasUppercase && hasLowercase && hasNumber && hasSymbols){
            return 'good'
        }
        else{
            return hasUppercase && hasLowercase || hasNumber || hasSymbols  ? 'medium' : 'low'
        }
        }
        // set the returned value by the function to a variable
        rating_message = rating()

        // display the message to the UI
        $('#pwd-rating-message').text(rating_message)

        // remove previous added class before a new one
        $('.pwd-strengh-rating-bar')
        .removeClass('bg-good')
        .removeClass('bg-medium')
        .removeClass('bg-low')
        // add a class according the the rating message
        $(`.pwd-strengh-rating-bar:lt(${rating_message==='good' ? 4 : rating_message==='medium' ? 3 : 1})`)
        .addClass(`bg-${rating_message}`)

    }
}
export default PasswordGenerator
