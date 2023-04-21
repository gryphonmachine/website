import { useState, useEffect } from "react";

interface TeamProps {
  teamNumber: number;
  station: string;
  dq: boolean;
}

export const EventData = (props: any) => {
  const [isClient, setIsClient] = useState(false);

  const newText = [
    {
      name: "f",
      new: "Final",
    },
    {
      name: "sf",
      new: "Semi Final",
    },
    {
      name: "qf",
      new: "Quarter Final",
    },
    {
      name: "qm",
      new: "Qualification",
    },
  ];

  function search_array(array: any, valuetofind: any) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name == valuetofind) {
        return array[i].new;
      }
    }
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="relative overflow-x-auto">
          <table className="w-full mt-5 text-sm text-left bg-gray-600 border-2 border-gray-500">
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
              {props.data?.map((match: any, key: number) => {
                const findAlliances = () => {
                  if (
                    match.alliances.blue.team_keys.includes(`frc${props.team}`)
                  ) {
                    return {
                      teams: match.alliances.blue.team_keys.map((team: any) =>
                        team.substring(3)
                      ),
                      alliance: "Blue",
                    };
                  } else {
                    return {
                      teams: match.alliances.red.team_keys.map((team: any) =>
                        team.substring(3)
                      ),
                      alliance: "Red",
                    };
                  }
                };

                const didWeWin = () => {
                  if (
                    findAlliances().alliance.toLowerCase() ===
                    match.winning_alliance
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                };

                return (
                  <tr
                    className="text-gray-300 bg-gray-700 border-2 border-gray-500 hover:bg-gray-600"
                    key={key}
                  >
                    {match.videos &&
                    match.videos.length > 0 &&
                    match.videos[0].key ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${match.videos[0].key}`}
                        target="_blank"
                      >
                        <th
                          scope="row"
                          className={`px-6 py-4 font-bold whitespace-nowrap ${
                            didWeWin() ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {search_array(newText, match.comp_level)}{" "}
                          {match.match_number}
                        </th>
                      </a>
                    ) : (
                      <th
                        scope="row"
                        className={`px-6 py-4 font-bold whitespace-nowrap ${
                          didWeWin() ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {search_array(newText, match.comp_level)}{" "}
                        {match.match_number}
                      </th>
                    )}

                    <td className="px-6 py-4">
                      <span className="text-gray-400">
                        <span
                          className={`font-bold ${
                            findAlliances().alliance === "Red"
                              ? "text-red-400"
                              : "text-sky-400"
                          }`}
                        >
                          {findAlliances().alliance}
                        </span>{" "}
                        ({findAlliances().teams.join(", ")})
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.score_breakdown
                        ? match.score_breakdown.red.totalPoints
                        : "?"}
                    </td>
                    <td className="px-6 py-4 font-semibold ">
                      {match.score_breakdown
                        ? match.score_breakdown.blue.totalPoints
                        : "?"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {props.data.length === 0 && (
        <p className="text-gray-400 mt-5">
          Looks like there&apos;s no data available for this event! 😔{" "}
        </p>
      )}
    </>
  );
};
