// src/theme.ts
import { createTheme, MantineColorsTuple } from '@mantine/core';

// --- COLOR PALETTES ---
// Basert på --ds-color-*-base-default fra CSS-filen
const primary: MantineColorsTuple = [ '#fce4f6', '#f3c8e8', '#e8a9d6', '#dc88c3', '#d16cb3', '#c95ba7', '#c554a1', '#ae468d', '#9b3e7e', '#87346e' ];
const omAvinor: MantineColorsTuple = [ '#e2f6f7', '#c6e8eb', '#a5d9de', '#82cad2', '#65bfcb', '#52b7c5', '#49b3c2', '#3a9eac', '#308c97', '#227a82' ];
const partner: MantineColorsTuple = [ '#f2e5f6', '#e0c9e8', '#cbabd7', '#b68cc7', '#a472ba', '#9862b2', '#935ab0', '#814b9c', '#72428c', '#64377c' ];
const neutral: MantineColorsTuple = [ '#e9eaec', '#d0d3d6', '#b2b7bc', '#949ca4', '#7a8490', '#697482', '#606b7a', '#515c6a', '#47515d', '#3a4552' ];
const success: MantineColorsTuple = [ '#e4f8e7', '#c8e9ce', '#a8d9b1', '#86ca91', '#6abd77', '#59b368', '#51ad5f', '#429851', '#398747', '#2e753b' ];
const danger: MantineColorsTuple = [ '#f8e8e8', '#eacbcb', '#daacac', '#c98b8b', '#ba7070', '#b05f5f', '#ac5656', '#984848', '#883f3f', '#773434' ];
const info: MantineColorsTuple = [ '#e5f1f9', '#c8e1f0', '#a8ceea', '#85b9e3', '#68a8de', '#549cdf', '#4896de', '#3684c6', '#2d76b1', '#1f679d' ];
const warning: MantineColorsTuple = [ '#fdf8e8', '#f8eecf', '#f2e0b1', '#ebd090', '#e4c375', '#dfba63', '#dcb658', '#c3a04a', '#ad8e3e', '#987c30' ];
const extra1: MantineColorsTuple = [ '#feeef0', '#fbd5d7', '#f8bac0', '#f59da5', '#f1858e', '#ef787e', '#ee7178', '#d36066', '#bd545a', '#a6474d' ];
const extra2: MantineColorsTuple = [ '#fcf7e8', '#f8ebcd', '#f1dcb0', '#e9cd8f', '#e2c174', '#ddb962', '#d9b457', '#c09e49', '#ab8c3d', '#957a2f' ];
const extra3: MantineColorsTuple = [ '#faeef5', '#f3d6e5', '#e9bad3', '#de9dc0', '#d485b0', '#ce75a4', '#cb6da0', '#b55b8c', '#a2507c', '#8f446d' ];

export const theme = createTheme({
    /**
     * -------------------------------------------------
     * COLORS
     * -------------------------------------------------
     */
    colors: {
        primary,
        omAvinor,
        partner,
        neutral,
        success,
        danger,
        info,
        warning,
        extra1,
        extra2,
        extra3,
    },
    primaryColor: 'primary',
    primaryShade: 6,

    /**
     * -------------------------------------------------
     * TYPOGRAPHY
     * -------------------------------------------------
     */
    fontFamily: 'Inter, sans-serif',
    fontSizes: {
        xs: 'var(--ds-font-size-2)', // 0.875rem
        sm: 'var(--ds-font-size-3)', // 1rem
        md: 'var(--ds-font-size-4)', // 1.125rem
        lg: 'var(--ds-font-size-5)', // 1.3125rem
        xl: 'var(--ds-font-size-6)', // 1.5rem
    },
    headings: {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'var(--ds-font-weight-medium)', // 500
        sizes: {
            h1: { fontSize: 'var(--ds-heading-xl-font-size)', lineHeight: 'var(--ds-heading-xl-line-height)' },
            h2: { fontSize: 'var(--ds-heading-lg-font-size)', lineHeight: 'var(--ds-heading-lg-line-height)' },
            h3: { fontSize: 'var(--ds-heading-md-font-size)', lineHeight: 'var(--ds-heading-md-line-height)' },
            h4: { fontSize: 'var(--ds-heading-sm-font-size)', lineHeight: 'var(--ds-heading-sm-line-height)' },
            h5: { fontSize: 'var(--ds-heading-xs-font-size)', lineHeight: 'var(--ds-heading-xs-line-height)' },
            h6: { fontSize: 'var(--ds-heading-2xs-font-size)', lineHeight: 'var(--ds-heading-2xs-line-height)' },
        },
    },

    /**
     * -------------------------------------------------
     * SPACING, RADIUS, SHADOWS
     * -------------------------------------------------
     */
    spacing: {
        xs: 'var(--ds-size-2)',  // 8px
        sm: 'var(--ds-size-3)',  // 12px
        md: 'var(--ds-size-4)',  // 16px
        lg: 'var(--ds-size-6)',  // 24px
        xl: 'var(--ds-size-8)',  // 32px
    },
    radius: {
        xs: 'calc(var(--ds-border-radius-base) * 0.5)',
        sm: 'var(--ds-border-radius-sm)',
        md: 'var(--ds-border-radius-md)',
        lg: 'var(--ds-border-radius-lg)',
        xl: 'var(--ds-border-radius-xl)',
    },
    shadows: {
        xs: 'var(--ds-shadow-xs)',
        sm: 'var(--ds-shadow-sm)',
        md: 'var(--ds-shadow-md)',
        lg: 'var(--ds-shadow-lg)',
        xl: 'var(--ds-shadow-xl)',
    },
});