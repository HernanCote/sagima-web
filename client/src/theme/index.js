/* eslint-disable key-spacing, no-multi-spaces */

const maxWidthInPx = 1152;

const theme = {
    breakpoints: {
        xxs: 320,
        xs: 420,
        sm: 700,
        md: 1024,
        ml: maxWidthInPx,
        lg: 1440,
        xl: 1920,
        xxl: 2560,
    },
    zIndex: {
        header: 1000,
        footer: 1000,
        modal: 2000,
        sticky: 100,
    },
    fontSizes: {
        h1: '2rem',          // 32px
        h2: '1.75rem',       // 28px
        h3: '1.375rem',      // 22px
        h4: '1.125rem',      // 18px
        h5: '1.0625rem',     // 17px
        normal: '0.9375rem', // 15px
        button: '0.8125rem',  // 13px
        buttonSmall: '0.8125rem',  // 13px
        small: '0.8125rem',  // 13px

        // fontSizes for medium breakpoint
        sm: {
            h1: '2.625rem',      // 42px
            h2: '2.25rem',       // 36px
            h3: '1.75rem',       // 28px
            h4: '1.375rem',      // 22px
            h5: '1.125rem',      // 18px
            normal: '1rem',      // 16px
            button: '1rem',      // 16px
            buttonSmall: '0.8125rem',  // 13px
            small: '0.875rem',   // 14px
        },
    },
    lineHeight: {
        h1: '2.666rem',
        h2: '2.55rem',
        normal: '1.171875rem',
        small: '1.3rem',
        sm: {
            h1: '3.56rem',
            h2: '3.05rem',
            normal: '1.25rem',
            small: '1.25rem',
        },
    },
    spacing: {
        xSmall: '0.8125rem', // 13px
        small: '0.875rem', // 14px
        base: '1rem', // 16px
        wide: '1.25rem', // 20px
        h5: '1.125rem', // 18px
        h4: '1.375rem', // 22px
        h3: '1.75rem', // 28px
        h2: '2.25rem', // 36px
        h1: '2.625rem', // 42px

        grid: '0.5rem',
        md: {
            grid: '1rem',
        },
        maxWidth: `${maxWidthInPx / 16}rem`,
    },
    colors: {
        white: '#FFFFFF',
        whiteRgb: '255, 255, 255',
        blackened: '#1F1F1F',
        black: '#000000',
        blackRgb: '0, 0, 0',
        background: '#000F26',
        backgroundRgb: '0, 15, 38',
        borderGray: '#CCC',

        sagimaYellow: '#EfBE41',
        sagimaOrange: '#D99536',
    },
};

export default theme;
