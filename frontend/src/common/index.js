const backendDomain = "http://localhost:8080";

const summaryApi = {
    signUP: {
        url: `${backendDomain}/api/signup`,
        method: "POST",
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "POST",
    },
    current_user:{
        url: `${backendDomain}/api/user-details`,
        method: "GET",
    }
};

export default summaryApi;
