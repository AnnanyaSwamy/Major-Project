document.getElementById('stressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {
        sr: parseFloat(document.getElementById('sr').value),
        rr: parseFloat(document.getElementById('rr').value),
        t: parseFloat(document.getElementById('t').value),
        lm: parseFloat(document.getElementById('lm').value),
        bo: parseFloat(document.getElementById('bo').value),
        rem: parseFloat(document.getElementById('rem').value),
        sh: parseFloat(document.getElementById('sh').value),
        hr: parseFloat(document.getElementById('hr').value)
    };

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        let categoryText = '';
        if (data.stress_category == 0) {
            categoryText = 'Not Stressed';
        } else if (data.stress_category == 1) {
            categoryText = 'Stressed';
        } else {
            categoryText = 'Overly Stressed';
        }

        document.getElementById('result').innerHTML = `
            <h2 style="color:white">Results:</h2>
            <p style="color:white"><strong>Predicted Stress Level:</strong> ${data.predicted_stress_level.toFixed(2)}</p>
            <p style="color:white"><strong>Stress Category:</strong> ${categoryText}</p>
        `;
    })
    .catch(error => console.error('Error:', error));
});


// #2A9DF4