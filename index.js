var reader = require("read-console");

const Reverso = require('reverso-api');
const reverso = new Reverso();

reader.read("Слово/Текст/Предложение: ", (result) => {
    reverso.getContext(result, 'English', 'Russian', (response) => {
        console.log(`Перевод: ${response.translation[0]}\nАльтернативный вариант: ${response.translation[1]}`);
    
    }).catch((err) => {
        console.error(err);
    });
});
