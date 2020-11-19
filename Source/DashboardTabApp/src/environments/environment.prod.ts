export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedunordic.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "e3beec15-d667-4402-8dbe-970d9ee68b4a",
        clientId: "c089371b-1d60-4744-ad6d-5bd80fbbaeeb",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
