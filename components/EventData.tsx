import { useState, useEffect } from "react";

export const EventData = (props: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative overflow-x-auto">
          <table className="bg-gray-700 w-full text-sm text-left border-2 border-gray-600">
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
              {props.isLoading ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-gray-300 border-2 border-gray-600 px-6 py-4"
                  >
                    Loading matches...
                  </td>
                </tr>
              ) : (
                props.data?.map((match: any, i: number) => {
                  const team6070 = match.teams.filter(
                    (team: any) => team.teamNumber == "6070"
                  );
                  const alliance = team6070[0].station.replace(/[0-9]/g, "");

                  const firstAllianceFilter = match.teams.filter(
                    (team: any) => {
                      return team.station.includes(
                        team6070[0].station.replace(/[0-9]/g, "")
                      );
                    }
                  );

                  const secondAllianceFilter = firstAllianceFilter.map(
                    (team: any) => {
                      return team.teamNumber;
                    }
                  );

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

                  return (
                    <tr
                      className="text-gray-300 border-2 border-gray-600 hover:bg-gray-600"
                      key={i}
                    >
                      <th
                        scope="row"
                        className={`px-6 py-4 font-bold whitespace-nowrap ${
                          didWeWin() ? "text-green-300" : "text-red-300"
                        }`}
                      >
                        {match.description}
                      </th>
                      <td
                        className={`px-6 py-4 ${
                          alliance === "Blue" ? "text-sky-300" : "text-red-300"
                        }`}
                      >
                        {alliance} ({secondAllianceFilter.toString().replace(/,/g, ', ')})
                      </td>
                      <td className="px-6 py-4 font-semibold ">
                        {match.scoreRedFinal}
                      </td>
                      <td className="px-6 py-4 font-semibold ">
                        {match.scoreBlueFinal}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
