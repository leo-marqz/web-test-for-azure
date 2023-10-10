// En este caso, el JS es simple y solo es para mostrar cómo se podría incluir. 
// Aquí, por ejemplo, cambiamos el alias en función de cierta condición. 
// La condición es arbitraria para fines de demostración.

window.onload = function() {
    const aliasElement = document.getElementById('alias');
    const currentAlias = aliasElement.textContent;
    if (currentAlias !== 'leomarqz') {
        aliasElement.textContent = 'leomarqz';
        aliasElement.style.color = '#FF4136'; // Cambia el color a rojo si el alias fue cambiado
    }

    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // alert('La IP pública de tu servidor es: ' + data.ip);
        console.log('La IP pública de tu servidor es: ' + data.ip);
        document.getElementById('my-ip-address')
            .textContent = data.ip;
    })
    .catch(error => {
        console.error('Hubo un error al obtener la IP: ', error);
    });

}

