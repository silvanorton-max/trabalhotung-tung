* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    color: #333;
}

header {
    background: #1e88e5;
    color: white;
    text-align: center;
    padding: 40px 20px;
}

header h1 {
    margin-bottom: 10px;
}

main {
    max-width: 1000px;
    margin: auto;
    padding: 20px;
}

.intro,
.calculadora {
    background: white;
    padding: 20px;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.dias {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border-left: 5px solid #1e88e5;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card h3 {
    color: #1e88e5;
    margin-bottom: 10px;
}

.calculadora input {
    padding: 10px;
    width: 200px;
    margin-right: 10px;
}

.calculadora button {
    padding: 10px 15px;
    background: #1e88e5;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.calculadora button:hover {
    background: #1565c0;
}

#resultado {
    margin-top: 15px;
    font-weight: bold;
}

footer {
    text-align: center;
    padding: 20px;
    background: #222;
    color: white;
}
