const c = console.log
const theInsertion= document.getElementById("main");
const number_Word = document.getElementById("number_Word");
const number_Char = document.getElementById("number_Char");

theInsertion.addEventListener('input', (event) => {
     const new_word = (event.target.value);
     const number_of_chars = new_word.length
     const number_of_words = new_word.split(" ").length

     number_Word.innerHTML = String(number_of_words)
     number_Char.innerHTML = String(number_of_chars)
})

    
    