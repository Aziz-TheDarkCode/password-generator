// import {passwordStrengthRating,copyToClipboard,generatePasswordDictionary} from './functions.js'
import PasswordGenerator from './functions.js';
const pwd = new PasswordGenerator();

$('#password-length').change(function () {
    $('.pwd-length').text(this.value)
})
$("#myform :input").change(function () {
    pwd.passwordStrengthRating()
});
let generated_password =''

pwd.passwordStrengthRating()


$('.generate-trigger').click(generatePassword)
$('.copy').click(pwd.copyToClipboard)


function generatePassword (e) {
    /*this function groups our logic to generate a password*/
    e.preventDefault();
    let passwordDictionary = pwd.generatePasswordDictionary()
    for (let index = 0; index < $('#password-length').val() ; index++) {
        if (passwordDictionary ==='') {
            alert('You must provide at least one preferency')
            break
        }
        else {
             // get an element from the dictionary arrays by generating a random index
            const randomIndex = Math.floor(passwordDictionary.length * Math.random())
            // concat the gotten letter by using his index to the password string
            generated_password += passwordDictionary[randomIndex];
        }
    }
    // display the generated password to the UI
    $('#generated-password-input').val(generated_password)


    generated_password=''

}


(function(){
    $('.pwd-length').text($('#password-length').val())
}())