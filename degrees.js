function degrees() {
    let a = parseInt(document.getElementById('numberInput').value);

    document.getElementById('output').innerHTML = (5 / 9) * (a - 32) + '°C';
    setTimeout(() => {
        document.getElementById('output').innerHTML = '';
        document.getElementById('numberInput').value = '';
    }, 5000);


}


// setTimeout(hello, 2000, 'John')

let names = ['Chantell', 'Ray', 'Julie'];
names.forEach(hello);



function doThings(other) {

    let name = 'Taylor';
    other(name);
};

function hello(nm, idx, arr) {
    console.log('Hi', nm);
}
doThings(hello);

