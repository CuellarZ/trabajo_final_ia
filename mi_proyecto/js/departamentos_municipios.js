// Este script maneja la actualización del campo "Municipio" dependiendo del departamento seleccionado.

document.addEventListener("DOMContentLoaded", function() {
    const departamentoSelect = document.getElementById('departamento');
    const municipioSelect = document.getElementById('municipio');

    // Función para actualizar los municipios según el departamento seleccionado
    departamentoSelect.addEventListener('change', function () {
        const departamento = this.value;

        // Limpiar las opciones previas de municipios
        municipioSelect.innerHTML = '<option value="">Seleccione un municipio</option>';

        // Lista de departamentos y municipios
        const municipios = {
        "Amazonas": ["Leticia"],
        "Antioquia": ["Medellín", "Envigado", "Rionegro", "Bello", "Itagüí", "La Ceja", "Apartadó", "Sabaneta", "Copacabana", "Caucasia", "Turbo", "Puerto Berrío", "Chigorodó", "Yondó"],
        "Arauca": ["Arauca", "Tame", "Arauquita", "Saravena", "Fortul", "Cravo Norte", "Puerto Rondón", "Cubará"],
        "Atlántico": ["Barranquilla", "Soledad", "Puerto Colombia", "Malambo", "Sabanalarga", "Galapa", "Baranoa", "Juan de Acosta", "Piohacha", "Campo de la Cruz", "Santo Tomás"],
        "Bolívar": ["Cartagena", "Magangué", "Turbaná", "Mompox", "Arjona", "Santa Catalina", "María La Baja", "Córdoba", "San Juan Nepomuceno", "Turbana", "Villanueva"],
        "Boyacá": ["Tunja", "Sogamoso", "Chiquinquirá", "Duitama", "Puerto Boyacá", "Moniquirá", "Tibasosa", "Pajaro", "Villa de Leyva", "Cuitiva", "Tuta", "Santa Rosa de Viterbo"],
        "Caldas": ["Manizales", "Villamaría", "Chinchiná", "La Dorada", "Palestina", "Riosucio", "Supía", "Viterbo", "Neira"],
        "Caquetá": ["Florencia", "El Doncello", "La Montañita", "Solano", "Curillo", "Valparaíso", "Bojayá", "Morelia", "San Vicente del Caguán", "Puerto Rico", "La Uribe"],
        "Casanare": ["Yopal", "Aguazul", "Maní", "Támara", "Hato Corozal", "Nunchía", "Pore", "Chámeza", "La Salina"],
        "Cauca": ["Popayán", "Santander de Quilichao", "Caldono", "Timbío", "El Tambo", "Almaguer", "Paez", "Guapi", "Suárez", "Morales", "Piamonte"],
        "Cesar": ["Valledupar", "Aguachica", "La Paz", "Chiriguaná", "San Diego", "Bosconia", "Pueblo Bello", "Gamarra", "Distracción"],
        "Chocó": ["Quibdó", "Istmina", "Medio Atrato", "Riosucio", "San Juan de Urabá", "Acandí", "Bagadó", "Lloró"],
        "Córdoba": ["Montería", "Lorica", "Ciénaga de Oro", "Sahagún", "Planeta Rica", "Montelíbano", "Puerto Escondido", "Chinú", "San Pelayo"],
        "Cundinamarca": ["Bogotá", "Soacha", "Fusagasugá", "Chía", "Madrid", "Zipaquirá", "Girardot", "Tenjo", "La Vega", "La Calera"],
        "Guaviare": ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores"],
        "Guainía": ["Inírida", "Mitú"],
        "Huila": ["Neiva", "Pitalito", "La Plata", "Garzón", "Campoalegre", "Algeciras", "Elías", "Suaza", "Aipe", "Yaguará", "Baraya"],
        "La Guajira": ["Riohacha", "Maicao", "Fonseca", "Uribia", "Hatonuevo", "Barrancas", "Villanueva", "Manaure"],
        "Magdalena": ["Santa Marta", "Ciénaga", "Fundación", "Aracataca", "El Banco", "Salamina", "Sitionuevo", "Pivijay", "San Sebastián de Buenavista", "Pueblo Viejo"],
        "Meta": ["Villavicencio", "Acacías", "Granada", "San Martín", "Cumaral", "Restrepo", "Puerto López", "Guamal"],
        "Nariño": ["Pasto", "Tumaco", "Ipiales", "La Unión", "Barbacoas", "Sandoná", "Chachagüí", "Yacuanquer", "Cumbal", "El Tablón de Gómez"],
        "Norte de Santander": ["Cúcuta", "Pamplona", "Villa del Rosario", "Chinácota", "El Zulia", "Los Patios", "Ragonvalia", "Sardinata", "Tibú", "La Playa"],
        "Putumayo": ["Mocoa", "Puerto Asís", "Villagarzón", "Orito"],
        "Quindío": ["Armenia", "Montenegro", "Calarcá", "Circasia", "La Tebaida", "Quimbaya", "Filandia", "Pijao", "Buenavista"],
        "Risaralda": ["Pereira", "Dosquebradas", "La Virginia", "Santa Rosa de Cabal", "Mistrató", "Apía", "Belén de Umbría"],
        "San Andrés y Providencia": ["San Andrés", "Providencia"],
        "Santander": ["Bucaramanga", "Barrancabermeja", "Girón", "Floridablanca", "Piedecuesta", "Zapatoca", "San Gil", "Vélez", "Páramo"],
        "Sucre": ["Sincelejo", "Corozal", "Sampués", "Coveñas", "Morroa", "Chalán", "San Onofre", "El Roble", "Los Palmitos"],
        "Tolima": ["Ibagué", "Espinal", "Honda", "Melgar", "Lérida", "Falan", "Carmen de Apicalá", "Saldaña", "San Luis"],
        "Valle del Cauca": ["Cali", "Buenaventura", "Tuluá", "Palmira", "Yumbo", "Buga", "Cartago", "El Cerrito", "Dagua"],
        "Vaupés": ["Mitú", "Carurú", "Taraira"],
        "Vichada": ["Puerto Carreño", "La Primavera", "Cumaribo"]
            // Aquí puedes añadir más departamentos y sus respectivos municipios
        };

        // Verificar si el departamento tiene municipios definidos
        if (municipios[departamento]) {
            // Crear las opciones de municipio
            municipios[departamento].forEach(function(municipio) {
                const option = document.createElement('option');
                option.value = municipio;
                option.textContent = municipio;
                municipioSelect.appendChild(option);
            });
        }
    });
});

// Función para actualizar las opciones de agrupación según la edad
function actualizarAgrupacion() {
    const edad = parseInt(document.getElementById("edad").value, 10);
    const agrupacionSelect = document.getElementById("agrupacion");
    agrupacionSelect.innerHTML = '<option value="">Seleccione...</option>';

    if (edad < 18) {
        agrupacionSelect.innerHTML += '<option value="Juvenil">Juvenil</option>';
    } else if (edad >= 18 && edad <= 60) {
        agrupacionSelect.innerHTML += `
            <option value="Socorrista">Socorrista</option>
            <option value="Voluntario de Apoyo">Voluntario de Apoyo</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Invitado">Invitado</option>`;
    } else if (edad > 60) {
        agrupacionSelect.innerHTML += `
            <option value="Dama Gris">Dama Gris</option>
            <option value="Edad Dorada">Edad Dorada</option>`;
    }
}
