// Importa la biblioteca de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';

// Importa Firestore
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDEYvr1dwNDhz74jZjccBHnX3UUMv8liz4",
    authDomain: "empleados-4f75f.firebaseapp.com",
    projectId: "empleados-4f75f", // Agrega el projectId aquí
    storageBucket: "empleados-4f75f.appspot.com",
    messagingSenderId: "56203101913",
    appId: "1:56203101913:web:6f0a86cd4f6f125f6b60c8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la variable db
export { db };

const task_form = document.getElementById('task-form');
const task_title = document.getElementById('task-title');

task_form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtén el valor del input 'task-title'
    const titleValue = task_title.value;

    try {
        // Agrega el valor a la colección 'formulario' en Firestore
        const docRef = await addDoc(collection(db, 'formulario'), {
            task_title: titleValue
        });
        console.log("Documento agregado con ID: ", docRef.id);
    } catch (error) {
        console.error("Error al agregar documento: ", error);
    }
});