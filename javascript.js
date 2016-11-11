function myFunction(x) {
    x.classList.toggle("change");
}

function show(id) {
    var e = document.getElementById(id);
	
	if (e.style.display == 'block')
    {
        e.style.display = 'none';
    }
    else
    {
        e.style.display = 'block';
    }
}