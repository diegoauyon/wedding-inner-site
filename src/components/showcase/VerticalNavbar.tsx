import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);


    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>BODA</h1>
                <h1 style={styles.headerText}>Gaby y Diego</h1>
                <h3 style={styles.headerShowcase}>2025</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="when" text="¿Cuándo?" />
                <Link containerStyle={styles.link} to="info" text="Más Información" />
            </div>
            <div style={styles.spacer} />
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '80%',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',

        width: '100%',
    },
};

export default VerticalNavbar;
