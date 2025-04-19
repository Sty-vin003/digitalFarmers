const plantDatabase = {
    "leafy-greens": [
        {
            name: "Lettuce",
            diseases: [
                {
                    name: "Downy Mildew",
                    symptoms: ["brown spots on leaves", "yellowing leaves", "white fuzzy growth"],
                    treatment: [
                        "Increase air circulation by spacing plants properly",
                        "Apply copper fungicide at early signs of disease",
                        "Water at the base to avoid wetting leaves",
                        "Remove infected leaves immediately"
                    ]
                },
                {
                    name: "Powdery Mildew",
                    symptoms: ["white powdery coating", "distorted leaves", "stunted growth"],
                    treatment: [
                        "Apply sulfur or potassium bicarbonate sprays",
                        "Improve air circulation around plants",
                        "Avoid overhead watering"
                    ]
                }
            ]
        },
        {
            name: "Spinach",
            diseases: [
                {
                    name: "Leaf Spot",
                    symptoms: ["brown spots on leaves", "yellow halos around spots", "leaf drop"],
                    treatment: [
                        "Use resistant varieties like 'Tyee' spinach",
                        "Apply neem oil weekly to prevent fungal growth",
                        "Avoid overhead watering, irrigate in the morning"
                    ]
                },
                {
                    name: "Downy Mildew",
                    symptoms: ["yellow spots on leaves", "purple-gray mold underneath", "leaf curling"],
                    treatment: [
                        "Plant resistant varieties",
                        "Apply copper-based fungicides",
                        "Water early in the day to allow leaves to dry"
                    ]
                }
            ]
        },
        {
            name: "Kale",
            diseases: [
                {
                    name: "Black Rot",
                    symptoms: ["yellow V-shaped lesions", "blackened veins", "wilting"],
                    treatment: [
                        "Rotate crops every 3 years",
                        "Use disease-free seeds",
                        "Remove plant debris after harvest"
                    ]
                }
            ]
        },
        {
            name: "Swiss Chard",
            diseases: [
                {
                    name: "Cercospora Leaf Spot",
                    symptoms: ["Small grayish-brown spots with purple borders"],
                    treatment: [
                        "Avoid overhead watering",
                        "Apply neem oil",
                        "Remove affected leaves"
                    ]
                }
            ]
        },
        {
            name: "Collard Greens",
            diseases: [
                {
                    name: "Bacterial Soft Rot",
                    symptoms: ["Wet, mushy, foul-smelling decay on leaves and stems"],
                    treatment: [
                        "Avoid excessive moisture",
                        "Improve air circulation",
                        "Apply copper sprays"
                    ]
                }
            ]
        },
        {
            name: "Turnip Greens",
            diseases: [
                {
                    name: "Alternaria Leaf Spot",
                    symptoms: ["Small dark brown spots with yellow halos on leaves"],
                    treatment: [
                        "Use disease-free seeds",
                        "Apply copper fungicides",
                        "Avoid overhead watering"
                    ]
                }
            ]
        },
        {
            name: "Romaine Lettuce",
            diseases: [
                {
                    name: "Fusarium Wilt",
                    symptoms: ["Yellowing lower leaves", "wilting", "brown vascular tissue inside stems"],
                    treatment: [
                        "Use resistant varieties and rotate crops regularly"
                    ]
                }
            ]
        },
        {
            name: "Malabar Spinach",
            diseases: [
                {
                    name: "Leaf Spot",
                    symptoms: ["Small brown or black spots on leaves", "sometimes with a yellow halo"],
                    treatment: [
                        "Remove infected leaves",
                        "Apply copper-based fungicides",
                        "Avoid wet foliage"
                    ]
                }
            ]
        },
        {
            name: "Amaranth (Terere)",
            diseases: [
                {
                    name: "Root Rot",
                    symptoms: ["Wilting", "yellowing", "blackened roots", "stunted growth"],
                    treatment: [
                        "Ensure well-drained soil",
                        "Avoid overwatering",
                        "Use organic compost"
                    ]
                }
            ]
        },
        {
            name: "Cabbage",
            diseases: [
                {
                    name: "Clubroot",
                    symptoms: ["Wilting", "yellowing", "swollen, distorted roots"],
                    treatment: [
                        "Lime soil to raise pH",
                        "Practice crop rotation",
                        "Use resistant varieties"
                    ]
                }
            ]
        }
    ],
    "herbs": [
        {
            name: "Basil",
            diseases: [
                {
                    name: "Fusarium Wilt",
                    symptoms: ["sudden wilting", "brown streaks on stems", "stunted growth"],
                    treatment: [
                        "Avoid overhead watering",
                        "Water at soil level",
                        "Apply cinnamon powder on soil"
                    ]
                },
                {
                    name: "Downy Mildew",
                    symptoms: ["Yellowing leaves", "grayish-purple fuzzy growth underneath"],
                    treatment: [
                        "Improve air circulation",
                        "Avoid wetting leaves",
                        "Use resistant varieties"
                    ]
                }
            ]
        },
        {
            name: "Mint",
            diseases: [
                {
                    name: "Rust",
                    symptoms: ["orange-brown pustules on leaves", "leaf yellowing"],
                    treatment: [
                        "Prune infected stems immediately",
                        "Improve air circulation",
                        "Apply sulfur fungicide"
                    ]
                },
                {
                    name: "Powdery Mildew",
                    symptoms: ["White powdery coating on leaves", "leaf distortion"],
                    treatment: [
                        "Apply baking soda solution",
                        "Thin plants for better airflow",
                        "Remove infected leaves"
                    ]
                }
            ]
        },
        {
            name: "Parsley",
            diseases: [
                {
                    name: "Leaf Spot",
                    symptoms: ["Brown spots with yellow halos", "leaf drop"],
                    treatment: [
                        "Avoid overhead watering",
                        "Apply copper fungicide",
                        "Space plants properly"
                    ]
                }
            ]
        },
        {
            name: "Cilantro",
            diseases: [
                {
                    name: "Bacterial Leaf Spot",
                    symptoms: ["Small water-soaked spots turning brown", "yellow halos"],
                    treatment: [
                        "Use disease-free seeds",
                        "Rotate crops",
                        "Avoid working with wet plants"
                    ]
                }
            ]
        },
        {
            name: "Rosemary",
            diseases: [
                {
                    name: "Root Rot",
                    symptoms: ["Wilting", "yellowing", "blackened roots"],
                    treatment: [
                        "Improve drainage",
                        "Reduce watering",
                        "Remove affected plants"
                    ]
                }
            ]
        },
        {
            name: "Thyme",
            diseases: [
                {
                    name: "Botrytis Blight",
                    symptoms: ["Gray mold on leaves", "wilting", "stem rot"],
                    treatment: [
                        "Improve air circulation",
                        "Avoid overhead watering",
                        "Apply fungicide if severe"
                    ]
                }
            ]
        },
        {
            name: "Oregano",
            diseases: [
                {
                    name: "Alternaria Leaf Spot",
                    symptoms: ["Dark brown spots with concentric rings"],
                    treatment: [
                        "Remove infected leaves",
                        "Avoid wetting foliage",
                        "Apply neem oil"
                    ]
                }
            ]
        },
        {
            name: "Sage",
            diseases: [
                {
                    name: "Powdery Mildew",
                    symptoms: ["White powdery coating", "leaf distortion"],
                    treatment: [
                        "Apply milk spray (1:9 ratio with water)",
                        "Improve air circulation",
                        "Avoid nitrogen-heavy fertilizers"
                    ]
                }
            ]
        },
        {
            name: "Dill",
            diseases: [
                {
                    name: "Damping Off",
                    symptoms: ["Seedlings collapse", "water-soaked stems at soil line"],
                    treatment: [
                        "Use sterile potting mix",
                        "Avoid overwatering",
                        "Thin seedlings"
                    ]
                }
            ]
        },
        {
            name: "Chives",
            diseases: [
                {
                    name: "Purple Blotch",
                    symptoms: ["Purple spots with yellow halos", "leaf dieback"],
                    treatment: [
                        "Remove infected leaves",
                        "Space plants properly",
                        "Avoid overhead irrigation"
                    ]
                }
            ]
        }
    ],
    "root-vegetables": [
        {
            name: "Carrot",
            diseases: [
                {
                    name: "Alternaria Leaf Blight",
                    symptoms: ["brown spots on leaves", "yellow halos"],
                    treatment: [
                        "Use neem cake fertilizer",
                        "Rotate crops",
                        "Avoid planting in infected soil"
                    ]
                },
                {
                    name: "Carrot Rust Fly",
                    symptoms: ["Tunnels in roots", "rust-colored excrement", "wilting"],
                    treatment: [
                        "Use floating row covers",
                        "Practice crop rotation",
                        "Harvest early to avoid damage"
                    ]
                }
            ]
        },
        {
            name: "Potato",
            diseases: [
                {
                    name: "Late Blight",
                    symptoms: ["Dark water-soaked spots on leaves", "white mold in humid conditions"],
                    treatment: [
                        "Remove and destroy infected plants",
                        "Apply copper fungicides",
                        "Plant resistant varieties"
                    ]
                },
                {
                    name: "Scab",
                    symptoms: ["Rough, corky spots on tubers"],
                    treatment: [
                        "Maintain soil pH around 5.2",
                        "Keep soil moist during tuber formation",
                        "Use resistant varieties"
                    ]
                }
            ]
        },
        {
            name: "Beet",
            diseases: [
                {
                    name: "Cercospora Leaf Spot",
                    symptoms: ["Small circular spots with red borders"],
                    treatment: [
                        "Rotate crops",
                        "Remove infected leaves",
                        "Apply fungicides if severe"
                    ]
                }
            ]
        },
        {
            name: "Radish",
            diseases: [
                {
                    name: "Black Root",
                    symptoms: ["Black discoloration of roots", "stunted growth"],
                    treatment: [
                        "Improve soil drainage",
                        "Rotate crops",
                        "Avoid overwatering"
                    ]
                }
            ]
        },
        {
            name: "Turnip",
            diseases: [
                {
                    name: "Clubroot",
                    symptoms: ["Swollen, distorted roots", "wilting"],
                    treatment: [
                        "Lime soil to raise pH",
                        "Practice long crop rotation",
                        "Use resistant varieties"
                    ]
                }
            ]
        },
        {
            name: "Sweet Potato",
            diseases: [
                {
                    name: "Fusarium Wilt",
                    symptoms: ["Yellowing leaves", "stunted growth", "vascular discoloration"],
                    treatment: [
                        "Use disease-free slips",
                        "Practice crop rotation",
                        "Solarize soil"
                    ]
                }
            ]
        },
        {
            name: "Onion",
            diseases: [
                {
                    name: "Downy Mildew",
                    symptoms: ["Pale green or yellow elongated spots", "grayish-purple mold"],
                    treatment: [
                        "Space plants for good air circulation",
                        "Avoid overhead watering",
                        "Apply fungicides early"
                    ]
                }
            ]
        },
        {
            name: "Garlic",
            diseases: [
                {
                    name: "White Rot",
                    symptoms: ["Yellowing leaves", "white fluffy growth at base", "rotting bulbs"],
                    treatment: [
                        "Solarize soil before planting",
                        "Use clean seed garlic",
                        "Practice long crop rotation"
                    ]
                }
            ]
        },
        {
            name: "Parsnip",
            diseases: [
                {
                    name: "Canker",
                    symptoms: ["Dark sunken lesions on roots", "black spots"],
                    treatment: [
                        "Practice crop rotation",
                        "Improve soil drainage",
                        "Avoid wounding roots"
                    ]
                }
            ]
        },
        {
            name: "Rutabaga",
            diseases: [
                {
                    name: "Boron Deficiency",
                    symptoms: ["Hollow, brown spots in roots", "cracked roots"],
                    treatment: [
                        "Apply borax (follow package directions)",
                        "Maintain proper soil pH",
                        "Use balanced fertilizer"
                    ]
                }
            ]
        }
    ],
    "cereals-legumes": [
        {
            name: "Corn (Maize)",
            diseases: [
                {
                    name: "Common Rust",
                    symptoms: ["Reddish-brown pustules on leaves", "yellow halos"],
                    treatment: [
                        "Plant resistant hybrids",
                        "Apply fungicides if severe",
                        "Rotate crops"
                    ]
                },
                {
                    name: "Gray Leaf Spot",
                    symptoms: ["Rectangular tan lesions with yellow borders"],
                    treatment: [
                        "Use resistant varieties",
                        "Practice crop rotation",
                        "Till crop residue"
                    ]
                }
            ]
        },
        {
            name: "Wheat",
            diseases: [
                {
                    name: "Fusarium Head Blight",
                    symptoms: ["Bleached spikelets", "pink-orange mold"],
                    treatment: [
                        "Plant resistant varieties",
                        "Apply fungicides at flowering",
                        "Rotate with non-host crops"
                    ]
                }
            ]
        },
        {
            name: "Rice",
            diseases: [
                {
                    name: "Rice Blast",
                    symptoms: ["Diamond-shaped lesions with gray centers"],
                    treatment: [
                        "Use resistant varieties",
                        "Avoid excessive nitrogen",
                        "Apply silica to strengthen plants"
                    ]
                }
            ]
        },
        {
            name: "Beans",
            diseases: [
                {
                    name: "Anthracnose",
                    symptoms: ["Dark sunken lesions on pods", "black veins on leaves"],
                    treatment: [
                        "Use disease-free seeds",
                        "Avoid working with wet plants",
                        "Apply copper fungicides"
                    ]
                }
            ]
        },
        {
            name: "Peas",
            diseases: [
                {
                    name: "Powdery Mildew",
                    symptoms: ["White powdery coating", "leaf yellowing"],
                    treatment: [
                        "Plant resistant varieties",
                        "Apply sulfur sprays",
                        "Improve air circulation"
                    ]
                }
            ]
        },
        {
            name: "Soybeans",
            diseases: [
                {
                    name: "Soybean Rust",
                    symptoms: ["Small pustules on undersides of leaves"],
                    treatment: [
                        "Apply fungicides at first sign",
                        "Plant early-maturing varieties",
                        "Monitor fields regularly"
                    ]
                }
            ]
        },
        {
            name: "Lentils",
            diseases: [
                {
                    name: "Ascochyta Blight",
                    symptoms: ["Tan lesions with dark borders", "stem cankers"],
                    treatment: [
                        "Use certified disease-free seed",
                        "Practice crop rotation",
                        "Apply fungicides if needed"
                    ]
                }
            ]
        },
        {
            name: "Barley",
            diseases: [
                {
                    name: "Net Blotch",
                    symptoms: ["Dark brown streaks forming net-like pattern"],
                    treatment: [
                        "Use resistant varieties",
                        "Rotate with broadleaf crops",
                        "Apply foliar fungicides"
                    ]
                }
            ]
        },
        {
            name: "Oats",
            diseases: [
                {
                    name: "Crown Rust",
                    symptoms: ["Orange-yellow pustules on leaves"],
                    treatment: [
                        "Plant resistant varieties",
                        "Apply fungicides if severe",
                        "Destroy volunteer oats"
                    ]
                }
            ]
        },
        {
            name: "Chickpeas",
            diseases: [
                {
                    name: "Fusarium Wilt",
                    symptoms: ["Yellowing leaves", "wilting", "brown vascular tissue"],
                    treatment: [
                        "Use resistant varieties",
                        "Practice long crop rotation",
                        "Solarize soil"
                    ]
                }
            ]
        }
    ],
    "nightshades": [
        {
            name: "Tomato",
            diseases: [
                {
                    name: "Early Blight",
                    symptoms: ["Concentric rings on leaves", "yellow halos", "stem lesions"],
                    treatment: [
                        "Remove infected leaves",
                        "Apply copper fungicide",
                        "Mulch to prevent soil splash"
                    ]
                },
                {
                    name: "Blossom End Rot",
                    symptoms: ["Dark sunken spots on fruit bottoms"],
                    treatment: [
                        "Maintain consistent moisture",
                        "Add calcium to soil",
                        "Avoid excessive nitrogen"
                    ]
                }
            ]
        },
        {
            name: "Eggplant",
            diseases: [
                {
                    name: "Verticillium Wilt",
                    symptoms: ["Yellowing leaves", "wilting", "brown vascular tissue"],
                    treatment: [
                        "Plant resistant varieties",
                        "Solarize soil",
                        "Practice crop rotation"
                    ]
                }
            ]
        },
        {
            name: "Pepper",
            diseases: [
                {
                    name: "Bacterial Spot",
                    symptoms: ["Small water-soaked spots", "yellow halos", "leaf drop"],
                    treatment: [
                        "Use disease-free seeds",
                        "Apply copper sprays",
                        "Avoid overhead watering"
                    ]
                }
            ]
        },
        {
            name: "Goji Berry",
            diseases: [
                {
                    name: "Powdery Mildew",
                    symptoms: ["White powdery coating", "leaf distortion"],
                    treatment: [
                        "Apply potassium bicarbonate",
                        "Prune for better airflow",
                        "Use resistant varieties"
                    ]
                }
            ]
        },
        {
            name: "Potato (also in root vegetables)",
            diseases: [
                {
                    name: "Late Blight",
                    symptoms: ["Dark water-soaked spots", "white mold in humidity"],
                    treatment: [
                        "Remove infected plants",
                        "Apply copper fungicides",
                        "Plant resistant varieties"
                    ]
                }
            ]
        },
        {
            name: "Tomatillo",
            diseases: [
                {
                    name: "Phytophthora Blight",
                    symptoms: ["Water-soaked lesions", "rapid plant collapse"],
                    treatment: [
                        "Improve drainage",
                        "Avoid overhead watering",
                        "Remove infected plants"
                    ]
                }
            ]
        },
        {
            name: "Ground Cherry",
            diseases: [
                {
                    name: "Septoria Leaf Spot",
                    symptoms: ["Small circular spots with gray centers"],
                    treatment: [
                        "Remove infected leaves",
                        "Apply copper fungicides",
                        "Avoid overhead watering"
                    ]
                }
            ]
        },
        {
            name: "Pepper (Hot varieties)",
            diseases: [
                {
                    name: "Anthracnose",
                    symptoms: ["Sunken circular spots on fruit", "black spores"],
                    treatment: [
                        "Remove infected fruit",
                        "Apply fungicides",
                        "Practice crop rotation"
                    ]
                }
            ]
        },
        {
            name: "Tree Tomato (Tamarillo)",
            diseases: [
                {
                    name: "Root Rot",
                    symptoms: ["Wilting", "yellowing", "blackened roots"],
                    treatment: [
                        "Improve drainage",
                        "Reduce watering",
                        "Apply beneficial fungi"
                    ]
                }
            ]
        }
    ],
    "fruits": [
        {
            name: "Apple",
            diseases: [
                {
                    name: "Apple Scab",
                    symptoms: ["Olive-green spots on leaves", "corky lesions on fruit"],
                    treatment: [
                        "Apply fungicides in spring",
                        "Prune for better air circulation",
                        "Remove fallen leaves"
                    ]
                }
            ]
        },
        {
            name: "Banana",
            diseases: [
                {
                    name: "Panama Disease",
                    symptoms: ["Yellowing leaves", "wilting", "vascular discoloration"],
                    treatment: [
                        "Plant resistant varieties",
                        "Use tissue-culture plants",
                        "Disinfect tools"
                    ]
                }
            ]
        },
        {
            name: "Strawberry",
            diseases: [
                {
                    name: "Gray Mold",
                    symptoms: ["Brown lesions on fruit", "gray fuzzy mold"],
                    treatment: [
                        "Improve air circulation",
                        "Remove infected fruit",
                        "Apply fungicides"
                    ]
                }
            ]
        },
        {
            name: "Grape",
            diseases: [
                {
                    name: "Downy Mildew",
                    symptoms: ["Yellow 'oil spots' on leaves", "white fluffy growth underneath"],
                    treatment: [
                        "Apply copper sprays",
                        "Prune for better airflow",
                        "Remove infected leaves"
                    ]
                }
            ]
        },
        {
            name: "Citrus",
            diseases: [
                {
                    name: "Citrus Canker",
                    symptoms: ["Raised corky lesions", "yellow halos"],
                    treatment: [
                        "Copper sprays",
                        "Remove infected plants",
                        "Control leaf miners"
                    ]
                }
            ]
        },
        {
            name: "Mango",
            diseases: [
                {
                    name: "Anthracnose",
                    symptoms: ["Black sunken lesions", "twig dieback"],
                    treatment: [
                        "Apply copper fungicides",
                        "Prune affected branches",
                        "Improve air circulation"
                    ]
                }
            ]
        },
        {
            name: "Avocado",
            diseases: [
                {
                    name: "Root Rot",
                    symptoms: ["Wilting", "yellowing leaves", "black roots"],
                    treatment: [
                        "Improve drainage",
                        "Apply phosphonate fungicides",
                        "Mulch properly"
                    ]
                }
            ]
        },
        {
            name: "Blueberry",
            diseases: [
                {
                    name: "Mummy Berry",
                    symptoms: ["Wilting young shoots", "gray moldy berries"],
                    treatment: [
                        "Remove mummified berries",
                        "Apply fungicides at green tip",
                        "Mulch to bury infected material"
                    ]
                }
            ]
        },
        {
            name: "Pineapple",
            diseases: [
                {
                    name: "Heart Rot",
                    symptoms: ["Yellowing center leaves", "soft rot"],
                    treatment: [
                        "Improve drainage",
                        "Apply fungicides",
                        "Remove infected plants"
                    ]
                }
            ]
        },
        {
            name: "Papaya",
            diseases: [
                {
                    name: "Ring Spot Virus",
                    symptoms: ["Yellow mosaic patterns", "distorted leaves"],
                    treatment: [
                        "Plant resistant varieties",
                        "Control aphids",
                        "Remove infected plants"
                    ]
                }
            ]
        }
    ]
};

// Common symptoms
const commonSymptoms = [
    "brown spots on leaves",
    "yellowing leaves",
    "white powdery coating",
    "wilting",
    "stunted growth",
    "leaf drop",
    "distorted leaves",
    "water-soaked spots",
    "black spots",
    "white fuzzy growth",
    "yellow spots",
    "orange-brown pustules",
    "Wet, mushy, foul-smelling decay on leaves and stems",
    "Small grayish-brown spots with purple borders",
    "yellow V-shaped lesions",
    "blackened veins",
    "Small dark brown spots with yellow halos on leaves",
    "Yellowing lower leaves",
    "brown vascular tissue inside stems",
    "Small brown or black spots on leaves",
    "blackened roots",
    "swollen, distorted roots",
    "sudden wilting",
    "brown streaks on stems",
    "grayish-purple fuzzy growth underneath",
    "leaf yellowing",
    "Dark brown spots with concentric rings",
    "Purple spots with yellow halos",
    "leaf dieback",
    "Tunnels in roots",
    "rust-colored excrement",
    "Dark water-soaked spots on leaves",
    "Rough, corky spots on tubers",
    "Small circular spots with red borders",
    "Black discoloration of roots",
    "Pale green or yellow elongated spots",
    "Yellowing leaves",
    "white fluffy growth at base",
    "rotting bulbs",
    "Dark sunken lesions on roots",
    "Hollow, brown spots in roots",
    "cracked roots",
    "Reddish-brown pustules on leaves",
    "Rectangular tan lesions with yellow borders",
    "Bleached spikelets",
    "pink-orange mold",
    "Diamond-shaped lesions with gray centers",
    "Dark sunken lesions on pods",
    "black veins on leaves",
    "Small pustules on undersides of leaves",
    "Tan lesions with dark borders",
    "stem cankers",
    "Dark brown streaks forming net-like pattern",
    "Orange-yellow pustules on leaves",
    "Concentric rings on leaves",
    "yellow halos",
    "stem lesions",
    "Dark sunken spots on fruit bottoms",
    "Small water-soaked spots",
    "yellow halos",
    "Blue-gray mold underneath leaves",
    "Water-soaked lesions",
    "rapid plant collapse",
    "Small circular spots with gray centers",
    "Sunken circular spots on fruit",
    "black spores",
    "Olive-green spots on leaves",
    "corky lesions on fruit",
    "vascular discoloration",
    "Brown lesions on fruit",
    "gray fuzzy mold",
    "Yellow 'oil spots' on leaves",
    "Raised corky lesions",
    "Black sunken lesions",
    "twig dieback",
    "gray moldy berries",
    "Yellowing center leaves",
    "soft rot",
    "Yellow mosaic patterns"
];




// DOM Elements 
const plantCategorySelect = document.getElementById('plant-category');
const plantTypeSelect = document.getElementById('plant-type');
const symptomSearch = document.getElementById('symptom-search');
const symptomsContainer = document.getElementById('symptoms-container');
const diagnoseBtn = document.getElementById('diagnose-btn');
const resultsArea = document.getElementById('results');

// State
let selectedSymptoms = [];

// Debounce function for search optimization
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// Initialize the app
function initApp() {
    setupEventListeners();
}



// Set up event listeners 
function setupEventListeners() {
    // Original plant selection listeners
    plantCategorySelect.addEventListener('change', function() {
        const category = this.value;
        plantTypeSelect.innerHTML = '<option value="">Select a plant</option>';
        plantTypeSelect.disabled = !category;
        
        if (category && plantDatabase[category]) {
            plantDatabase[category].forEach(plant => {
                const option = document.createElement('option');
                option.value = plant.name;
                option.textContent = plant.name;
                plantTypeSelect.appendChild(option);
            });
        }
    });
    
    // New symptom search functionality
    symptomSearch.addEventListener('input', debounce((e) => {
        updateSymptomsDisplay(e.target.value);
    }));
    
    // Original diagnose button
    diagnoseBtn.addEventListener('click', diagnosePlant);
}

// Display filtered symptoms based on search
function updateSymptomsDisplay(searchTerm = '') {
    symptomsContainer.innerHTML = '';
    
    // Only show when user is searching
    if (!searchTerm.trim()) return;
    
    const filteredSymptoms = commonSymptoms.filter(symptom => 
        symptom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filteredSymptoms.forEach(symptom => {
        const isSelected = selectedSymptoms.includes(symptom);
        const div = document.createElement('label');
        div.className = `symptom-suggestion ${isSelected ? 'selected-symptom' : ''}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = isSelected;
        checkbox.value = symptom;
        checkbox.addEventListener('change', () => toggleSymptom(symptom));
        
        const span = document.createElement('span');
        span.textContent = symptom;
        
        div.appendChild(checkbox);
        div.appendChild(span);
        symptomsContainer.appendChild(div);
    });
}

// Toggle symptom selection
function toggleSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index === -1) {
        selectedSymptoms.push(symptom);
    } else {
        selectedSymptoms.splice(index, 1);
    }
    // Refresh display to update highlighting
    updateSymptomsDisplay(symptomSearch.value);
}


// Diagnose plant 
function diagnosePlant() {
    const category = plantCategorySelect.value;
    const plantName = plantTypeSelect.value;
    
    if (!category || !plantName) {
        showMessage('Please select both a plant category and specific plant', 'error');
        return;
    }
    
    if (selectedSymptoms.length === 0) {
        showMessage('Please select at least one symptom', 'error');
        return;
    }
    
    // Find the selected plant
    const categoryPlants = plantDatabase[category];
    const selectedPlant = categoryPlants.find(plant => plant.name === plantName);
    
    if (!selectedPlant) {
        showMessage('Plant information not found', 'error');
        return;
    }
    
    // Find matching diseases 
    const matchedDiseases = [];
    
    selectedPlant.diseases.forEach(disease => {
        const matches = disease.symptoms.filter(symptom => 
            selectedSymptoms.includes(symptom)
        ).length;
        
        if (matches > 0) {
            matchedDiseases.push({
                disease: disease,
                matchScore: matches / disease.symptoms.length
            });
        }
    });
    
    // Sort by match score 
    matchedDiseases.sort((a, b) => b.matchScore - a.matchScore);
    
    // Display results
    displayResults(matchedDiseases, plantName);
}

// Display diagnosis results 
function displayResults(matchedDiseases, plantName) {
    if (matchedDiseases.length === 0) {
        resultsArea.innerHTML = `<div class="disease-card">
                <h3>No matches found</h3>
                <p>No diseases matched your selected symptoms for ${plantName}. Try different symptoms or consult a local expert.</p>
            </div>`;
        return;
    }
    
    let resultsHTML = '';
    
    matchedDiseases.forEach(({disease, matchScore}) => {
        const matchPercentage = Math.round(matchScore * 100);
        
        resultsHTML += `<div class="disease-card">
                <h3>${disease.name} (${matchPercentage}% match)</h3>
                <p><strong>Symptoms:</strong> ${disease.symptoms.join(', ')}</p>
                
                <div class="treatment">
                    <h4>Recommended Treatments:</h4>
                    <ul>
                        ${disease.treatment.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
            </div>`;
    });
    
    resultsArea.innerHTML = resultsHTML;
}

// Show message in results area
function showMessage(message, type = 'info') {
    const alertClass = type === 'error' ? 'danger' : type;
    
    resultsArea.innerHTML = `<div class="disease-card ${alertClass}">
            <h3>${type === 'error' ? 'Error' : 'Notice'}</h3>
            <p>${message}</p>
        </div>`;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

