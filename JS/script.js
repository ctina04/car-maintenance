const carModels = {
    Acura: ["ILX", "MDX", "RDX", "TLX", "NSX"],
    "Alfa Romeo": ["Giulia", "Stelvio", "Tonale", "4C Spider"],
    "Aston Martin": ["DB11", "Vantage", "DBS Superleggera", "Rapide"],
    Audi: ["A3", "A4", "A6", "Q5", "Q7", "R8", "TT", "Q8", "e-tron"],
    Bentley: ["Bentayga", "Continental", "Flying Spur", "Mulsanne"],
    BMW: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "X1", "X3", "X5", "Z4", "i8"],
    Bugatti: ["Chiron", "Veyron", "Divo"],
    Buick: ["Enclave", "Encore", "Regal", "LaCrosse", "Verano"],
    Cadillac: ["CT4", "CT5", "Escalade", "XT4", "XT5", "XT6"],
    Chevrolet: ["Camaro", "Corvette", "Silverado", "Malibu", "Tahoe", "Suburban", "Blazer"],
    Chrysler: ["300", "Pacifica", "Voyager", "Aspen"],
    Citroën: ["C3", "C4", "C5 Aircross", "Berlingo"],
    Dodge: ["Charger", "Challenger", "Durango", "Journey", "Ram Van"],
    Ferrari: ["488", "Roma", "F8 Tributo", "SF90 Stradale", "Portofino"],
    Fiat: ["500", "500X", "Panda", "Tipo", "124 Spider"],
    Ford: ["F-150", "Mustang", "Escape", "Explorer", "Bronco", "Edge", "Ranger"],
    Genesis: ["G70", "G80", "GV70", "GV80"],
    GMC: ["Sierra", "Canyon", "Yukon", "Acadia", "Terrain"],
    Honda: ["Accord", "Civic", "CR-V", "Pilot", "Fit", "Ridgeline"],
    Hyundai: ["Elantra", "Santa Fe", "Tucson", "Kona", "Sonata", "Ioniq"],
    Infiniti: ["Q50", "Q60", "QX50", "QX60", "QX80", "G37"],
    Jaguar: ["F-PACE", "E-PACE", "I-PACE", "XE", "XF"],
    Jeep: ["Cherokee", "Compass", "Wrangler", "Gladiator", "Renegade", "Grand Cherokee"],
    Kia: ["Soul", "Sportage", "Seltos", "Sorento", "Telluride", "Optima"],
    Lamborghini: ["Aventador", "Huracan", "Urus"],
    "Land Rover": ["Defender", "Discovery", "Range Rover", "Range Rover Evoque"],
    Lexus: ["RX", "ES", "NX", "GX", "LS", "UX", "RC"],
    Lincoln: ["Aviator", "Navigator", "Corsair", "Nautilus"],
    Lotus: ["Evija", "Elise", "Exige"],
    Maserati: ["Ghibli", "Levante", "Quattroporte", "MC20"],
    Mazda: ["Mazda3", "Mazda6", "CX-5", "CX-30", "MX-5 Miata"],
    McLaren: ["720S", "Artura", "Senna", "GT"],
    "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "GLA", "GLE", "S-Class", "AMG GT"],
    Mini: ["Cooper", "Countryman", "Clubman", "Convertible"],
    Mitsubishi: ["Outlander", "Pajero", "Eclipse Cross", "Mirage"],
    Nissan: ["Altima", "Sentra", "Rogue", "Pathfinder", "Versa", "GT-R"],
    Pagani: ["Huayra", "Zonda"],
    Peugeot: ["208", "308", "508", "5008"],
    Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
    Ram: ["1500", "2500", "3500", "ProMaster"],
    Renault: ["Clio", "Duster", "Megane", "Talisman"],
    "Rolls-Royce": ["Ghost", "Phantom", "Cullinan", "Wraith"],
    Saab: ["9-3", "9-5"],
    Scion: ["Frs"],
    Subaru: ["Impreza", "Outback", "Forester", "Ascent", "Legacy", "Brz"],
    Suzuki: ["Swift", "Vitara", "Jimny", "Baleno"],
    Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
    Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "Prius", "Land Cruiser", "86"],
    Volkswagen: ["Golf", "Jetta", "Passat", "Tiguan", "Atlas"],
    Volvo: ["XC40", "XC60", "XC90", "S60", "V90"]
};

const modelYears = {
    "ILX": [2013, 2023],
    "MDX": [2001, 2023],
    "RDX": [2007, 2023],
    "TLX": [2015, 2023],
    "NSX": [1990, 2022],
    "Giulia": [2016, 2023],
    "Stelvio": [2017, 2023],
    "Tonale": [2023, 2023],
    "DB11": [2016, 2023],
    "Vantage": [2005, 2023],
    "DBS Superleggera": [2018, 2023],
    "A3": [2003, 2023],
    "A4": [1994, 2023],
    "Q5": [2008, 2023],
    "Q7": [2006, 2023],
    "Q8": [2018, 2023],
    "R8": [2006, 2023],
    "A6": [1994, 2023],
    "A8": [1994, 2023],
    "C-Class": [1994, 2023],
    "E-Class": [1994, 2023],
    "S-Class": [1991, 2023],
    "CLA": [2014, 2023],
    "GLE": [2015, 2023],
    "GLS": [2006, 2023],
    "G-Class": [1979, 2023],
    "Cayenne": [2003, 2023],
    "Macan": [2014, 2023],
    "911": [1964, 2023],
    "Panamera": [2009, 2023],
    "Taycan": [2020, 2023],
    "F-150": [1948, 2023],
    "Mustang": [1964, 2023],
    "Explorer": [1991, 2023],
    "Escape": [2000, 2023],
    "Fusion": [2006, 2020],
    "Focus": [1998, 2018],
    "Ranger": [1983, 2023],
    "Bronco": [1966, 2023],
    "Expedition": [1997, 2023],
    "Expedition Max": [2018, 2023],
    "Edge": [2007, 2023],
    "Edge ST": [2019, 2023],
    "Taurus": [1986, 2019],
    "Charger": [2006, 2023],
    "Challenger": [1970, 2023],
    "Durango": [1998, 2023],
    "Grand Cherokee": [1993, 2023],
    "Cherokee": [1974, 2023],
    "Wrangler": [1987, 2023],
    "Renegade": [2015, 2023],
    "Compass": [2007, 2023],
    "Gladiator": [2020, 2023],
    "Cherokee Trailhawk": [2012, 2023],
    "Civic": [1973, 2023],
    "Accord": [1976, 2023],
    "CR-V": [1995, 2023],
    "Pilot": [2002, 2023],
    "Odyssey": [1994, 2023],
    "Ridgeline": [2005, 2023],
    "Passport": [1993, 2023],
    "Fit": [2001, 2020],
    "Insight": [1999, 2023],
    "HR-V": [2015, 2023],
    "G37": [2008, 2013],
    "Frs" : [2013, 2016],
    "86" : [2016, 2020]
};

const makeSelect = document.getElementById("make");
const modelSelect = document.getElementById("model");
const yearSelect = document.getElementById("year");
const submitButton = document.getElementById("submit");
const vehicleList = document.getElementById("vehicle-list");


// Populate models when a make is selected
makeSelect.addEventListener("change", () => {
    const selectedMake = makeSelect.value;

    // Clear existing models
    modelSelect.innerHTML = '<option value="" disabled selected>Select a model</option>';

    // Add models for the selected make
    if (selectedMake && carModels[selectedMake]) {
        carModels[selectedMake].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
});

// Populate models when a make is selected
makeSelect.addEventListener("change", () => {
    const selectedMake = makeSelect.value;

    // Clear existing models
    modelSelect.innerHTML = '<option value="" disabled selected>Select a model</option>';
    modelSelect.disabled = true; // Disable by default

    // Enable and add models for the selected make
    if (selectedMake && carModels[selectedMake]) {
        carModels[selectedMake].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
        modelSelect.disabled = false; // Enable model dropdown
    }
});

// Populate years when a model is selected
modelSelect.addEventListener("change", () => {
    const selectedModel = modelSelect.value;

    // Clear existing years
    yearSelect.innerHTML = '<option value="" disabled selected>Select a year</option>';
    yearSelect.disabled = true; // Disable by default

    // Enable and add years for the selected model
    if (selectedModel && modelYears[selectedModel]) {
        const [startYear, endYear] = modelYears[selectedModel];
        for (let year = startYear; year <= endYear; year++) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
        yearSelect.disabled = false; // Enable year dropdown
    }
});

// Handle form submission
submitButton.addEventListener("click", function () {
    const selectedMake = makeSelect.value;
    const selectedModel = modelSelect.value;
    const selectedYear = yearSelect.value;

    // Check if all selections are made
    if (!selectedMake || !selectedModel || !selectedYear) {
        alert("Please select a make, model, and year.");
        return; // Stop further execution
    }

    const vehicle = {
        make: selectedMake,
        model: selectedModel,
        year: selectedYear
    };

    // Save vehicle to local storage
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles.push(vehicle);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    // Clear the form
    makeSelect.value = '';
    modelSelect.innerHTML = '<option value="" disabled selected>Select a model</option>';
    modelSelect.disabled = true;
    yearSelect.innerHTML = '<option value="" disabled selected>Select a year</option>';
    yearSelect.disabled = true;

    // Update the vehicle list
    displaySavedVehicles();

    // Update the dropdown dynamically
    populateVehicleDropdown();
});

// Display saved vehicles
function displaySavedVehicles() {
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicleList.innerHTML = '';

    vehicles.forEach(function (vehicle) {
        const li = document.createElement("li");
        li.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
        li.classList.add("vehicle-item");

        // Add remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton"); // Add a CSS class to style
        removeButton.addEventListener("click", () => {
            removeVehicle(vehicle);
        });

        li.appendChild(removeButton);
        vehicleList.appendChild(li);
    });
}

// Remove a specific vehicle
function removeVehicle(vehicleToRemove) {
    let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicles = vehicles.filter(vehicle =>
        vehicle.make !== vehicleToRemove.make ||
        vehicle.model !== vehicleToRemove.model ||
        vehicle.year !== vehicleToRemove.year
    );
    localStorage.setItem("vehicles", JSON.stringify(vehicles));

    // Update the vehicle display
    displaySavedVehicles();

    // Update the Add Maintenance list
    populateVehicleDropdown();
}

// Clear all vehicles
clearAll.addEventListener("click", () => {
    localStorage.removeItem("vehicles");
    vehicleList.innerHTML = "";
    alert("All saved vehicles have been deleted.");

    // Update the Add Maintenance list
    populateVehicleDropdown();

    displayMaintenanceRecords();
});

function populateVehicleDropdown() {
    const vehicleSelect = document.getElementById("vehicle-select");
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    vehicleSelect.innerHTML = '<option value="" disabled selected>Select a saved vehicle</option>';
    
    vehicles.forEach((vehicle, index) => {
        const option = document.createElement("option");
        option.value = index; // Use index as a unique identifier
        option.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
        vehicleSelect.appendChild(option);
    });
}

const saveMaintenanceButton = document.getElementById("save-maintenance");

saveMaintenanceButton.addEventListener("click", () => {
    const vehicleIndex = document.getElementById("vehicle-select").value;
    const tasks = document.getElementById("maintenance-tasks").value.trim().split("\n");

    if (!vehicleIndex) {
        alert("Please select a vehicle.");
        return;
    }

    if (tasks.length === 0 || tasks[0] === "") {
        alert("Please enter at least one maintenance task.");
        return;
    }

    let maintenanceRecords = JSON.parse(localStorage.getItem("maintenanceRecords")) || {};

    // Check if tasks already exist for the selected vehicle and append them
    maintenanceRecords[vehicleIndex] = (maintenanceRecords[vehicleIndex] || []).concat(tasks);

    localStorage.setItem("maintenanceRecords", JSON.stringify(maintenanceRecords));

    alert("Maintenance tasks saved!");
    document.getElementById("maintenance-tasks").value = ""; // Clear textarea
    displayMaintenanceRecords();
    displaySavedVehicles();
});

function displayMaintenanceRecords() {
    const maintenanceRecords = JSON.parse(localStorage.getItem("maintenanceRecords")) || {};
    const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    const recordsList = document.getElementById("maintenance-records");
    recordsList.innerHTML = '';

    Object.keys(maintenanceRecords).forEach(index => {
        const vehicle = vehicles[index];
        const tasks = maintenanceRecords[index];

        const li = document.createElement("li");
        li.innerHTML = `<strong>${vehicle.year} ${vehicle.make} ${vehicle.model}</strong>: <br> 
                        <ul>${tasks.map((task, taskIndex) => `
                            <li>
                                ${task} 
                                <button class="removeButton" onclick="deleteMaintenanceTask(${index}, ${taskIndex})">Remove</button>
                            </li>`).join('')}</ul>`;
        recordsList.appendChild(li);
    });

    
}

function deleteMaintenanceTask(vehicleIndex, taskIndex) {
    // Retrieve maintenance records from localStorage
    const maintenanceRecords = JSON.parse(localStorage.getItem("maintenanceRecords")) || {};

    // Check if the vehicle has maintenance tasks
    if (maintenanceRecords[vehicleIndex]) {
        // Remove the specified task
        maintenanceRecords[vehicleIndex].splice(taskIndex, 1);

        // If no tasks remain, delete the vehicle's maintenance entry
        if (maintenanceRecords[vehicleIndex].length === 0) {
            delete maintenanceRecords[vehicleIndex];
        }

        // Update localStorage
        localStorage.setItem("maintenanceRecords", JSON.stringify(maintenanceRecords));

        // Refresh the displayed records
        displayMaintenanceRecords();

        
    }
}



// Load saved vehicles on page load
window.onload = function() {
    populateVehicleDropdown();
    displaySavedVehicles();
    displayMaintenanceRecords()
};
