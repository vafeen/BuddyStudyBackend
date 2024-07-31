export const colors = {
    grayAccent: "rgba(235, 235, 235, 1)",
    grayDark: "rgba(122, 122, 122, 1)",
    main: "rgba(0, 0, 0, 1)",
    totalBlack: "rgba(0, 0, 0, 1)",
    totalWhite: "rgba(255, 255, 255, 1)",
}

export const borders = {
    border: {
        defaultFrame: `1px solid ${colors.grayAccent}`,
        borderGrayDark: `1px solid ${colors.grayDark}`,
    },

    radius: {
        big: "30px",
        medium: "20px",
        circle: "50%",
    }
}

export const shadows = {
    defaultFrame: `0px 2px 4px 0px rgba(0, 0, 0, 0.25);`,
}

export const fonts = {
    sizes: {
        logo: "25px",
        main: "14px",
        small: "12px",
    },

    weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700
    }
}

export const transitions = {
    fast: "all 0.2s ease",
}