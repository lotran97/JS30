const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
'Anywhere But Here', 'An Old Dog'];


function append() {
for(var i = 0; i < bands.length; i ++) {
	var ul = document.getElementById("bands");
    var li = document.createElement("li");
    li.append(document.createTextNode(bands[i]));
    ul.appendChild(li);

	}
}

function sort(){

function strip (word) {
    let regex = new RegExp('^(A |The |An )');
    console.log('')
    return word.replace(regex, '').trim()
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)

document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('')
}