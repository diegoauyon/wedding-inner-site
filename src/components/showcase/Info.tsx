import React from 'react';
import photo2 from '../../assets/pictures/wedding2.jpg';

//import { Link } from 'react-router-dom';

export interface InfoProps {}

const Info: React.FC<InfoProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Más información</h1>
            <br />
            <div className="text-block">
                <p>
                    No sé, pero pueden ir al sitio de Gaby sobre la boda, fijo
                    encuentran toda la información que necesitan.
                </p>
                <a href="https://info.diegoygaby.com">INFORMACIÓN REAL</a>
                <br />
            </div>
            <div className="text-block">
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Sobre el sitio</h3>
                        <br />
                        <p>
                          Necesitaba un lugar dónde poner las fotos que me gustaron de nuestra sesión de fotos
                        </p>
                        <br />
                        <p>
                        Así que hay 2 versiones del sitio, mi versión y la de Gaby :) 
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={photo2} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figura 2:</b> Gaby y yo
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <h3><a href='https://info.diegoygaby.com>'>CLICKEE AQUÍ</a></h3>
                <br />
               
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default Info;
