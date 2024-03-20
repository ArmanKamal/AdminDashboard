import {createContext, useState, useMemo} from 'react'
import {createTheme} from '@mui/material/styles'
import { colors } from '@mui/material';

export const tokens = (mode) => ({
    
    ...createContext(mode === "dark")?
    {
        grey: {
            100: "#e1e1e1",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#4d4d4d",
            700: "#333333",
            800: "#1a1a1a",
            900: "#000000"
        },
        primary: {
            100: "#e0e0fc",
            200: "#c1c2f9",
            300: "#a1a3f7",
            400: "#8285f4",
            500: "#5545a0",
            600: "#4f52c1",
            700: "#3b3d91",
            800: "#282960",
            900: "#141430"
        },
        greenAccent: {
            100: "#f0f5f5",
            200: "#d9eaea",
            300: "#c2dfdf",
            400: "#abcaca",
            500: "#94bfbf",
            600: "#7ea6a6",
            700: "#678d8d",
            800: "#517474",
            900: "#3a5b5b"
        },
        redAccent: {
            100: "#ffdbdb",
            200: "#ffb2b2",
            300: "#ff8888",
            400: "#ff5f5f",
            500: "#ff3636",
            600: "#db2d2d",
            700: "#b22424",
            800: "#8d1b1b",
            900: "#661212"
        },
        blueAccent: {
            100: "#cce0f2",
            200: "#99c1e5",
            300: "#66a2d8",
            400: "#3383cb",
            500: "#0064be",
            600: "#00519b",
            700: "#003d78",
            800: "#002a55",
            900: "#001732"
        }
    }:
    {
        grey: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe",
        },
        primary: {
            100: "#141430",
            200: "#282960",
            300: "#3b3d91",
            400: "#4f52c1",
            500: "#6366f1", 
            600: "#8285f4",
            700: "#a1a3f7",
            800: "#c1c2f9",
            900: "#e0e0fc",
        },
        greenAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
        },
        redAccent: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#101624",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        blueAccent: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
    }

})
// color design
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary:{
                    main: colors.primary[500]
                },
                secondary:{
                    main: colors.greenAccent[500],
                },
                neutral:{
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background:{
                    default: colors.primary[500]
                }
            }: {
                primary:{
                    main: colors.primary[100]
                },
                secondary:{
                    main: colors.greenAccent[500],
                },
                neutral:{
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background:{
                    default: "#fcfcfc"
                }
            })
        },
        typography:{
            fontFamily: ["Source Sans Pro","sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 16,
            }, 
            h6: {
                fontFamily: ["Source Sans Pro","sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
            setMode((prev) => (prev === "light"? "dark": "light"))
        })
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
    return [theme, colorMode]
}