import html2canvas from 'html2canvas';
import React, {useState} from 'react';

const Imgmeme = () => {

    const[imgmeme,setImgmeme] = useState(1);
    const[txtmeme,setTxtmeme] = useState("");
    const[txtcolor,setTxtcolor] = useState("#050505");

    const seleccionarImg = (e) => {
            setImgmeme(e.target.value);
        }
    const ingresarTexto = (e) => {
            setTxtmeme(e.target.value);
        }
    const descargarMeme = () => {
            html2canvas(document.querySelector("#exportarImg")).then(canvas => {
               let link = document.createElement('a'); 
                link.href = canvas.toDataURL();
                link.download = 'meme.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
            });
        }
    const cambiarColorTexto = (e) =>{
        setTxtcolor(e.target.value);
        }

    return(
        <div>
            <h1>Crea tu propio meme</h1>
            <h3 className="mt-3 mb-3 text-center">Ingrese el texto</h3>
            <input onChange={ingresarTexto} className="form-control w-50 m-50 m-auto d-block" type="text" placeholder="Poné tu frase" name="meme" arial-label="default input example"></input>
           
            <label for="favcolor">Selecciona un color:</label>
            <input onChange={cambiarColorTexto}  type="color" id="favcolor" name="favcolor" value="#ff0000" />
            
            <h3 className="mt-3 mb-3 text-center">Elegí tu imagen</h3>
            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto"  arial-label="default input example">
                <option value={1}>Niño sonriendo</option>
                <option value={2}>Investigador de Alien</option>
                <option value={3}>Buena idea</option>
                <option value={4}>Niña y Desastre</option>
                <option value={5}>Bebe positivo</option>
                <option value={6}>Señor sonriendo</option>
                <option value={7}>Señora llorando</option>
                <option value={8}>Chica sonriendo</option>
            </select>

            <figure className="text-center" id="exportarImg">
                <p style={{color: `${txtcolor}` }} className="w-100 px-30 position-absolute top-5 start-30 h1 text-center">{txtmeme}</p>
                <img src={`./memes/${imgmeme}.jpg`} className="figure-img img-fluid mt-3 d-block m-auto" alt="meme"/>
            </figure>

            <button onClick={descargarMeme} type="button" className="btn btn-primary mt-4 mb-4">Descargar meme</button>

        </div>
    )
}

export default Imgmeme;