import { createStitches } from '@stitches/react';
import type { spacingType } from './types/Style.types';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            primary: 'hsla(234, 91%, 72%, 1)',
            secondary: 'hsla(32, 100%, 86%, 1)',
            black: 'hsla(249, 27%, 10%, 1)',
            lightGray: 'hsla(0, 0%, 98%, 1)',
            gray: 'hsla(215, 17%, 35%, 1)',
            white: 'hsla(0, 0%, 100%, 1)',
            background: 'hsla(266, 33%, 96%, 1)',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
        },
        fontSizes: {
            1: '16px',
            2: '18px',
            3: '24px',
        },
        fonts: {
            inter: 'Inter',
            nunito: 'Nunito',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
    utils: {
        marginX: (value: spacingType) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginY: (value: spacingType) => ({
            marginTop: value,
            marginBottom: value,
        }),
        paddingX: (value: spacingType) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingY: (value: spacingType) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
});
