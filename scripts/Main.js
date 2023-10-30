<!DOCTYPE html>
<html>
<head>
    <title>Concesionaria de Autos</title>
</head>
<body>
    <h1>Bienvenido a la Concesionaria de Autos</h1>
    
    <form id="autoForm">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required><br><br>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" required><br><br>

        <label for="trabajo">¿Tiene trabajo? (Sí o No):</label>
        <input type="text" id="trabajo" required><br><br>

        <label for="auto">¿Qué automóvil desea comprar? (Audi, BMW, Mercedes-Benz):</label>
        <select id="auto" required>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
        </select><br><br>

        <label for="financiacion">¿Necesita financiación? (Sí o No):</label>
        <input type="text" id="financiacion" required><br><br>

        <label for="cuotas">Seleccione una opción de financiación:</label>
        <select id="cuotas">
            <option value="24">24 cuotas con 5% de interés</option>
            <option value="48">48 cuotas con 8% de interés</option>
            <option value="70">70 cuotas con 10% de interés</option>
        </select><br><br>

        <button type="submit">Calcular</button>
    </form>
    
    <h2>Resultados</h2>
    <div id="resultado"></div>

    <button id="guardarLocal">Guardar en localStorage</button>
    <button id="guardarSession">Guardar en sessionStorage</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <script src="./scripts/Main.js"></script>

</body>
</html>
