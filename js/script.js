const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const guardarProducto = document.getElementById('guardarProducto');

openModal.onclick = () => modal.style.display = 'flex';
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

guardarProducto.onclick = () => {
    const producto = document.getElementById('producto').value.trim();
    const precio = document.getElementById('precio').value.trim();
    const categoria = document.getElementById('categoria').value;

    if (!producto || !precio || !categoria) {
    alert('Por favor, completa todos los campos.');
    return;
    }

    const tabla = document.getElementById('tablaProductos');
    const fila = tabla.insertRow(-1);
    fila.innerHTML = `<td>${producto}</td><td>$${parseFloat(precio).toFixed(2)}</td><td>${categoria}</td>`;

    modal.style.display = 'none';
    document.getElementById('producto').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('categoria').value = '';
};