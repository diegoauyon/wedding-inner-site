import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface PersiaAppProps extends WindowAppProps {}

const PersiaApp: React.FC<PersiaAppProps> = (props) => {
    const [width, setWidth] = useState(920);
    const [height, setHeight] = useState(750);

    return (
        <Window
            top={120}
            left={100}
            width={width}
            height={height}
            windowTitle="Prince of Persia"
            windowBarIcon="windowGameIcon"
            windowBarColor="#240C00"
            bottomLeftText={'Flechitas para mover, Shift para saltar'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="persia.jsdos" />
        </Window>
    );
};

export default PersiaApp;
