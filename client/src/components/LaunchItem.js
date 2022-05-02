import React from 'react'

function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success}}) {

  return (
    <ul>
        <li>{mission_name}</li>
        <li>{launch_date_local}</li>
        <li>{launch_success}</li>
    </ul>

  )
}

export default LaunchItem