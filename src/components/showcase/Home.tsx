import React from 'react';
import { Link } from '../general';

import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();


    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Boda Diego y Gaby 2025</h1>
                <h2>¡Nos Casamos!</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="when" text="¿Cuando?" />
                <Link containerStyle={styles.link} to="info" text="Más información" />
            </div>

            <div style={styles.hint}>
                <p>{`<------------ Los íconos se pueden doble clickear (Si estás en desktop hasta se pueden arrastrar)`}</p>
                <p>{`<------------ La compu se puede apagar también`}</p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    hint: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        bottom: 0,
        left: 0,
        padding: 16,
    },
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
