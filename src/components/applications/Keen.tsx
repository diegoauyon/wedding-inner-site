import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface KeenAppProps extends WindowAppProps {}

const KeenApp: React.FC<KeenAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Keen"
            windowBarIcon="windowGameIcon"
            windowBarColor="#941d13"
            bottomLeftText={'Flechitas para mover, Ctrl para saltar, Alt para pogo y espacio para disparar'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            minimizeWindow={props.onMinimize}
        >
            <DosPlayer
                width={width}
                height={height}
                bundleUrl="keen4.jsdos"
            />
        </Window>
    );
};

export default KeenApp;
