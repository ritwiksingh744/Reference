var form = document.getElementById('form');

form.addEventListener("submit", function(e){
    //auto submission of the form
    e.preventDefault();

    const name = document.getElementById('name').value;
    const body = document.getElementById('body').value;
    const id = document.getElementById('id').value;

    //fetch post request
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: body,
            id:id
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
})