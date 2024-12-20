import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ThisComputerProps extends WindowAppProps {}

const ThisComputerApp: React.FC<ThisComputerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
    return (
        <Window
            top={24}
            left={100}
            width={initWidth}
            height={initHeight}
            windowBarIcon="computerSmall"
            windowTitle="PC"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
        >
            <div className="site-page">
                <iframe
                    src="https://info.diegoygaby.com/"
                    title="Inforamción de la boda"
                    width="100%"
                    height="100%"
                />
            </div>
        </Window>
    );
};

export default ThisComputerApp;
