let btn = document.querySelectorAll('button');
let inp = document.querySelector('input');
let text = '';
for (const key in btn) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];

    // }
    btn[key].addEventListener('click', function () {
        if (btn[key].innerText == 'C') {
            inp.value = '';
        }
        else if (btn[key].innerText == '=') {
            inp.value = eval(inp.value);
            text = '';
        }
        else if (btn[key].innerText == 'Del') {
            text = text.slice(0, -1);
            inp.value = text;
        }
        else {
            text += btn[key].innerText;
            inp.value = text;
        }
    })
}
