import { type APISpaceXRespose, type Doc } from "../types/types";

export const getSpaceLaunches = async () => {

    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            },
        }),
    });

    const { docs } = (await res.json()) as APISpaceXRespose
    return docs;
}

export const getSpaceLaunchId = async ({ id }: { id: string }) => {

    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launch = (await res.json()) as Doc
    return launch;
}


