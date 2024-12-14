import React, { useState, useEffect } from 'react';
import neverGiveUp from '../../assets/pictures/neverGiveUp.jpg';
import eePic from '../../assets/pictures/ee.jpg';
export interface ShutdownSequenceProps {
    numShutdowns: number;
    setShutdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const SPEED_MULTIPLIER =0.2

const _F = `>${200 * SPEED_MULTIPLIER}<`;
const _X = `>${500 * SPEED_MULTIPLIER}<`;
const _S = `>${1000 * SPEED_MULTIPLIER}<`;
const _M = `>${2000 * SPEED_MULTIPLIER}<`;
const _L = `>${5000 * SPEED_MULTIPLIER}<`;

function delay(time: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

const ShutdownSequence: React.FC<ShutdownSequenceProps> = ({
    numShutdowns,
    setShutdown,
}) => {
    const [text, setText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [ee, setEE] = useState(false);

    const getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const time =
            h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        return time;
    };

    const NORMAL_SHUTDOWN = `Comenzando descarga de virus a tu compu... ${_F}
    Connecting to HHOS01/13:2000.${_F}.${_F}.${_F}
    |
    Estableciendo enlace a HH0S01/13:2000, intentando transferencia de datos.
    |
    ${_F}
    |Analyzing data... Done.| ${_F}
    |Packing Transfer... Done.| ${_F}
    |Beginning Transfer...| ${_F}
    |[${getTime()} START]| .${_F}.....${_X}.|............|.${_S}.|......|.${_S}...........${_M} |[Transferencia Fallida.]|


    |(HHOS01/13:200:60099) [DEP_ANALYTICS_SERVER_ON_AFTER_SETUP_MIDDLEWARE] InvalidFormatting: 'onAnalyticsConversion' option received invalid parameters. Please contact a server administrator to resolve the issue.|
    ${_F}
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:00]|
    |(HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:01]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:03]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:05]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:08]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:12]
    (HHOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Connection Refused: Reconnecting... [${getTime()}:14]
    FATAL ERROR: (HHOS01/13:200:60099) El servidor dejó de responder y la transferencia falló. No se puede apagar la computadora.
    |
    Abortando la secuencia de apagado y reiniciando.




    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_3 = `
    Wow${_S}.${_S}.${_S}. ${_M} ¿Qué querés probar? ¿Que sos alguien de QA?${_L}
    No voy a hacer nada,${_S} tampoco apagar esta computadora...${_S} Sólo se va a reiniciar .
    ${_L}
    |Goodbye!|
    ${_M}


    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_4 = `
    ¿De verdad crees que hace algo?${_S} Esta computadora S${_F}I${_F}E${_F}M${_F}P${_F}R${_F}E${_F} se va a reiniciar, el apagado es sólo por molestar. Esto no hace nada
    ${_M}
    Se pueden hacer otras cosas vaaaaaaaarias cosas, pero apagar no es una de ellas.
    ${_L}
    |Goodbye Again!|
    ${_M}

    Rebooting${_S}.${_S}.${_S}.
    `;

    const SHUTDOWN_5 = `
    ¿En serio${_X}?${_X}?${_X}?
    ${_M}
    ¿Qué hice para merecer esto? ${_M}¿¿¿¿Qué quieres de mí????
    ${_L}
    
    REINICIANDO${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_6 = `
    ${_M}>${_M}:${_M}(${_M}


    REINICIANDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_7 = `
    ¡Otra apagada ${_M}

    Ya que querés leer lo que hay aquí:${_M} Contaré número por número
    ${_L}
    7${_M},212${_M},313
    ${_M} ¡Vamos pues! ${_S} | [Tiempo aproximado: Aproximadamente 4,000 horas (0.5 números/segundo)]|

    1${_M},2${_M},3${_M},4${_M},5${_M},6${_M},7${_M},8${_M},9${_M},10${_M},11${_M},12${_M},13${_S}.${_S}.${_S}.

    Ya me aburrí...
    ${_M}
    
    
    Reiniciando${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_8 = `
    Bruuuuuuuuuuuuuuuuuuuuhhhhhhhh,${_S} por favor. ${_M} ¿Por qué? ${_M} ¿Para qué? ${_M}

    ${_L}
    |Ni modo!!!|


    R e i n i c i a n d o${_F}.${_F}.${_F}.
    `;

    const SHUTDOWN_10 = `
    Weno${_M}. Se apaga pues. ${_M}

    Ni modo${_S}.${_S}.${_S}.${_S} bajo el virus nigeriano${_M}

    Ya me aburrí de escribir...${_M} me despido, ${_M}.

    ${_L}
    Adiós...
    ${_L}


    Apagando${_M} Computadora${_M}.${_M}.${_M}.
    `;

    const SHUTDOWN_MAP = [
        NORMAL_SHUTDOWN,
        NORMAL_SHUTDOWN,
        SHUTDOWN_4,
        SHUTDOWN_5,
        SHUTDOWN_3,
        SHUTDOWN_6,
        SHUTDOWN_7,
        SHUTDOWN_8,
        '',
        SHUTDOWN_10,
    ];

    const typeText = (
        i: number,
        curText: string,
        text: string,
        setText: React.Dispatch<React.SetStateAction<string>>,
        callback: () => void,
        refOverride?: React.MutableRefObject<string>
    ) => {
        if (refOverride) {
            text = refOverride.current;
        }
        let delayExtra = 0;
        if (i < text.length) {
            if (text[i] === '|') {
                let dumpText = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '|') {
                        i = j + 1;
                        break;
                    }
                    dumpText += text[j];
                }
                setText(curText + dumpText);
                typeText(
                    i,
                    curText + dumpText,
                    text,
                    setText,
                    callback,
                    refOverride
                );
                return;
            }
            if (text[i] === '>') {
                let delayTime = '';
                for (let j = i + 1; j < text.length; j++) {
                    if (text[j] === '<') {
                        i = j + 1;
                        break;
                    }
                    delayTime += text[j];
                }
                delayExtra = parseInt(delayTime);
            }

            setTimeout(() => {
                setText(curText + text[i]);
                typeText(
                    i + 1,
                    curText + text[i],
                    text,
                    setText,
                    callback,
                    refOverride
                );
            }, 20 + delayExtra);
        } else {
            callback();
        }
    };

    useEffect(() => {
        delay(1000).then(() => {
            setLoading(false);
            delay(1000).then(() => {
                const shutdown = SHUTDOWN_MAP[numShutdowns];
                if (numShutdowns === 8) {
                    delay(4000).then(() => {
                        setLoading(true);
                        delay(2000).then(() => {
                            setShutdown(false);
                        });
                    });
                } else if (numShutdowns === 9) {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(2000).then(() => {
                            setLoading(false);
                            setEE(true);
                        });
                    });
                } else {
                    typeText(0, '', shutdown, setText, () => {
                        setLoading(true);
                        delay(2000).then(() => {
                            setShutdown(false);
                        });
                    });
                }
            });
        });
        // eslint-disable-next-line
    }, []);

    return ee ? (
        <div style={styles.imageContainer}>
            <img src={eePic} style={styles.img} alt="" />
        </div>
    ) : loading ? (
        <div style={styles.shutdown}>
            <div className="blinking-cursor" />
        </div>
    ) : numShutdowns === 10 ? (
        <div style={styles.imageContainer}>
            <img src={neverGiveUp} style={styles.img} alt="" />
        </div>
    ) : (
        <div style={styles.shutdown}>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles: StyleSheetCSS = {
    shutdown: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    text: {
        color: 'white',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#1d2e2f',
        padding: 64,
    },
    img: {
        width: 1000,
        height: 700,
    },
};

export default ShutdownSequence;
