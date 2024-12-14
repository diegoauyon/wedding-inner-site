import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface DoomAppProps extends WindowAppProps {}

const DoomApp: React.FC<DoomAppProps> = (props) => {
    const [width, setWidth] = useState(980);
    const [height, setHeight] = useState(670);

    return (
        <Window
            top={90}
            left={100}
            width={width}
            height={height}
            windowTitle="Doom"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Mouse y teclado baby'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="doom.jsdos" />
        </Window>
    );
};

export default DoomApp;
