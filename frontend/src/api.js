export const fetchSecureData = async (accessToken) => {
    const response = await fetch("http://localhost:5000/secure-data", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.json();
};
