import { gql, useQuery } from "@apollo/client";
import React from "react";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
            ))}
        </>
        
    );
}

export default Launches;
