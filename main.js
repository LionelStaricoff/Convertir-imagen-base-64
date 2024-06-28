import{EfectosPassword} from './efectosPassword.js';
import{cartelAviso} from './cartelAviso.js';

export class Util{

  
    static async guardarImagen64(input) {
const avatar = document.querySelector('#avatar');
        const fileInput = await input;

        const file = await fileInput.files[0];
        const reader = new FileReader();
        reader.onloadend = async function () {

            const base64String = reader.result;
            sessionStorage.setItem('img',base64String);
            avatar.setAttribute('src', base64String);
        }
        reader.readAsDataURL(file);
    }

    static updateFileName() {
        const fileInput = document.getElementById('file-input');
        const fileNameContainer = document.getElementById('file-name-container');

        // Verificar si se seleccionó un archivo
        if (fileInput.files.length > 0) {
            // Mostrar el nombre del archivo seleccionado
            fileNameContainer.textContent = `Archivo: ${fileInput.files[0].name}`;

        } else {
            // Limpiar el contenido si no se seleccionó ningún archivo
            fileNameContainer.textContent = '';
        }
    }
}


const fileInput = document.querySelector('#file-input');
fileInput.addEventListener('change',  ()=> Util.updateFileName());
fileInput.addEventListener('change', ()=> Util.guardarImagen64(fileInput));

const convertir = document.querySelector('.login_button');
convertir.addEventListener('click',  ()=> {
 
    let aviso = sessionStorage.getItem('img')?? null;
   aviso = (aviso == null)? 'Debes seleccionar una archivo' : aviso;
    new cartelAviso(aviso);
  
 } );