const medicineData = [
    {
        id: 1,
        name: "MedA", // Replace with actual medicine name
        manufacturer: "Company A", // Replace with manufacturer name
        therapeuticClass: "Class A", // Replace with therapeutic class
        dosage: "10mg", // Replace with dosage information
        route: "Oral", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedA", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 2,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 3,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 4,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 5,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },

    {
        id: 6,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 7,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 8,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 9,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },

    {
        id: 10,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 11,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 12,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 13,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 14,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 15,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 16,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 17,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 18,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 19,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },

    {
        id: 20,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 21,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 22,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 23,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 24,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 25,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 26,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 27,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 28,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 29,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 30,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 31,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 32,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 33,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 34,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 35,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 36,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },

    {
        id: 37,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 38,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 39,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },
    {
        id: 40,
        name: "MedB", // Replace with actual medicine name
        manufacturer: "Company B", // Replace with manufacturer name
        therapeuticClass: "Class B", // Replace with therapeutic class
        dosage: "20mg", // Replace with dosage information
        route: "Intravenous", // Replace with route of administration (e.g., Oral, Intravenous)
        description: "A brief description of MedB", // Replace with actual description
        // ... other relevant properties (e.g., price, sideEffects, warnings)
    },

];
