document.getElementById('showUserButton').addEventListener('click', function() {
    const user = {
      "id": 1,
      "name": "Newton",
      "username": "newton1804090",
      "email": "u1804090@student.cuet.ac.bd",
      "address": {
        "street": "CUET, Sheikh russel hall, Chittagong",
        "suite": "Apt. 556",
        "city": "chittagong",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "01770585590",
      "website": "hildegard.org",
      "company": {
        "name": "spring rain",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };

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