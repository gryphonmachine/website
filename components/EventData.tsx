import { useState, useEffect } from "react";

// Props interface for the EventData component
interface Props {
  data: matchData; // Assuming matchData is defined elsewhere
}

// TeamProps interface for representing team data
interface TeamProps {
  teamNumber: number;
  station: string;
  dq: boolean;
}

// EventData component definition
export const EventData = (props: Props) => {
  // State to track whether the component is rendered on the client
  const [isClient, setIsClient] = useState(false);

  // Effect to set isClient to true after component mounts on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left bg-gray-600 border-2 border-gray-500">
            <thead className="text-xs text-white uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Alliance
                </th>
                <th scope="col" className="px-6 py-3 text-red-400">
                  Red Score
                </th>
                <th scope="col" className="px-6 py-3 text-sky-400">
                  Blue Score
                </th>
              </tr>
            </thead>
            <tbody>
              {props.data?.map((match: matchData, key: number) => {
                // Extracting information about the team with teamNumber 6070
                const team6070 = match.teams.filter(
                  (team: TeamProps) => team.teamNumber == 6070
                );
                const alliance = team6070[0].station.replace(/[0-9]/g, "");

                // Filtering teams from the same alliance as team6070
                const firstAllianceFilter = match.teams.filter(
                  (team: TeamProps) => {
                    return team.station.includes(
                      team6070[0].station.replace(/[0-9]/g, "")
                    );
                  }
                );

                // Extracting team numbers from the filtered alliance teams
                const secondAllianceFilter = firstAllianceFilter.map(
                  (team: TeamProps) => {
                    return team.teamNumber;
                  }
                );

                // Function to determine if the team's alliance won the match
                const didWeWin = () => {
                  if (
                    match.scoreRedFinal > match.scoreBlueFinal &&
                    alliance === "Red"
                  ) {
                    return true;
                  } else if (
                    match.scoreBlueFinal > match.scoreRedFinal &&
                    alliance === "Blue"
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                };

                // Rendering a row for each match
                return (
                  <tr
                    className="text-gray-300 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600"
                    key={key}
                  >
                    <th
                      scope="row"
                      className={`px-6 py-4 font-bold whitespace-nowrap ${
                        didWeWin() ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {match.description}
                    </th>
                    <td className="px-6 py-4">
                      <span
                        className={`${
                          alliance === "Blue" ? "text-sky-300" : "text-red-300"
                        }`}
                      >
                        {alliance}{" "}
                      </span>
                      <span className="text-gray-400 font-medium">
                        ({secondAllianceFilter.toString().replace(/,/g, ", ")})
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.scoreRedFinal}
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.scoreBlueFinal}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

