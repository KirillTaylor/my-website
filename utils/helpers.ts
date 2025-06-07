import useMediaQuery from "@mui/material/useMediaQuery";

const getRandomizedColors = () => {
    return [
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#FF33A1',
        '#A133FF',
    ];
};

const isMobile = (): boolean => {
    return typeof window !== 'undefined' && useMediaQuery('(max-width: 600px)');
}

export { getRandomizedColors, isMobile };
