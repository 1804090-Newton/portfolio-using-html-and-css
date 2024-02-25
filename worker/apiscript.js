
document.getElementById('showUserButton').addEventListener('click', function() {

function worker_function(e) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        self.postMessage(data); 
    })
    .catch(error => {
        self.postMessage({ error: error.message });
    });
}

const worker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'})));

worker.addEventListener('message', function(e) {

    
    const users = e.data;
    if (users.error) {
        console.error(users.error);
        return;
    }
    const user = users[0]; 

    const userInfoContainer = document.getElementById('userInfoContainer');
    userInfoContainer.innerHTML = `
      <div class="info-block">
        <div class="label">Name:</div>
        <div>${user.name}</div>
      </div>
      <div class="info-block">
        <div class="label">ID:</div>
        <div>${user.id}</div>
      </div>
      <div class="info-block">
        <div class="label">Email:</div>
        <div>${user.email}</div>
      </div>
      <div class="info-block">
        <div class="label">Phone:</div>
        <div>${user.phone}</div>
      </div>
    `;
});

});







