import html2canvas from 'html2canvas';
import React, {useState} from 'react';

const Imgmeme = () => {

    const[imgmeme,setImgmeme] = useState(1);
    const[txtmeme,setTxtmeme] = useState("");
    const[txtcolor,setTxtcolor] = useState("#050505");
    const[txtformato,setTxtformato] = useState("");
    const[txtAlinearV,setTxtAlinearV] = useState(1);
    const[txtAlinearH,setTxtAlinearH] = useState(1);

    const seleccionarImg = (e) => {
            setImgmeme(e.target.value);
        }
    const ingresarTexto = (e) => {
            setTxtmeme(e.target.value);
        }
    const cambiarColorTexto = (e) =>{
            setTxtcolor(e.target.value);
        }
    const formatearTexto = (e) =>{
            setTxtformato(e.target.value);
        }
    const alinearTexto = (e) => {
            (e.target.id==="vertical") ?  setTxtAlinearV(e.target.value)                :
                    setTxtAlinearH(e.target.value);
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
    


    return(
        <div>
            <div className='titulo'>
                <h1 className="mt-1 ml-3 mb-1 text-center">¡CREA TU PROPIO MEME!</h1>
            </div>
            <div className='divGeneral'>
            <div className='imagen'>        
                    <figure className="text-center" id="exportarImg">
                        <div id="divContendor" style={{backgroundImage: `URL(./memes/${imgmeme}.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} >
                            <div id="divHijo" style={{gridColumn: `${txtAlinearH}`, gridRow: `${txtAlinearV}`}}>
                                <p style={{color: `${txtcolor}` }} className={`h2 mt-4 mb-4 text-center ${txtformato}`}>{txtmeme}</p>
                            </div>   
                        </div>
                    </figure>
                </div>

                <div className='divUtilidades'>   
                    <h3 className="mt-3 ml-3 mb-3 text-left">1- Elige una imagen:</h3>
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
                    <h3 className="mt-3 ml-3 mb-3 text-left">2- Ingresa un texto</h3>
                    <input onChange={ingresarTexto} className="form-control w-50 m-50 m-auto d-block" type="text" placeholder="Ingresa tu frase" name="meme" arial-label="default input example"></input>
                
                    <h3 className="mt-3 ml-3 mb-3 text-left">3- Ya casi... Dale formato</h3>
                    <div>
                            <h5 className="mt-3 mb-3 text-left">Color:</h5>
                            <input onChange={cambiarColorTexto}  type="color" id="favcolor" name="favcolor" value="#ff0000" />
                            <div>
                                <h5 className="mt-3 ml-3 mb-3 text-left">Formato:</h5>
                                <select onChange={formatearTexto} >
                                    <option value="font-weight-bold">Bold</option>
                                    <option value="font-weight-normal">Normal</option>
                                    <option value="font-weight-light">Light</option>
                                    <option value="font-italic">Italic</option>
                                </select>
                            </div>
                            <div>
                                <h5 className="mt-3 ml-3 mb-3 text-left" >Ubicación:</h5>
                                <label>Vertical</label>
                                <select onChange={alinearTexto} id="vertical">
                                    <option value="1">arriba</option>
                                    <option value="2">centro</option>
                                    <option value="3">abajo</option>
                                </select>
                            </div>
                            <div>
                                <label>Horizontal</label>
                                <select onChange={alinearTexto}  id="horizontal">
                                    <option value="1">izquierda</option>
                                    <option value="2">centro</option>
                                    <option value="3">derecha</option>
                                </select>
                            </div>
                    </div>
                    <h3 className="mt-3 ml-3 mb-3 text-left">4- ¡Descarga tu meme!</h3>
                    <button onClick={descargarMeme} type="button" className="btn btn-danger mt-4 mb-4">Aquí</button>
                </div>
  
            </div>    

        </div>
    )
}

export default Imgmeme;