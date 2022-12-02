import client from "@sanity/client";

export default client ({
    projectId: '3rz1zvql',
    dataset: "production",
    useCdn: true,
    apiVersion: '2022-08-05'
})