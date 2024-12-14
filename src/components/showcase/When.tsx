import React from 'react';
import photo1 from '../../assets/pictures/wedding1.jpg';

export interface WhenProps {}

const When: React.FC<WhenProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>¡Hola!</h1>
            <h3>Gaby y yo nos casamos</h3>
            <br />
            <div className="text-block">
                <p>
                    La fecha de nuestra boda es el 05 de Abril del 2025. 
                </p>
                <br />
            </div>
            <div className="captioned-image">
                    <img src={photo1} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figura 1:</b> Atrapando un Pokémon
                        </sub>
                    </p>
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
        width: '60%',
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

export default When;
