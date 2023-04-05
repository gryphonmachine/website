export const EventData = (props: any) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-white uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Alliance
              </th>
              <th scope="col" className="px-6 py-3">
                Red Score
              </th>
              <th scope="col" className="px-6 py-3">
                Blue Score
              </th>
            </tr>
          </thead>
          <tbody>
            {props.isLoading ? (
              <p>Loading matches...</p>
            ) : (
              props.data?.map((match: any, i: number) => {
                const team = match.teams.filter(
                  (team: any) => team.teamNumber == "6070"
                );
                const alliance = team[0].station.replace(/[0-9]/g, "");

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
                    className="border-2 border-gray-600 text-gray-300"
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
                      {alliance}
                    </td>
                    <td className="px-6 py-4">{match.scoreRedFinal}</td>
                    <td className="px-6 py-4">{match.scoreBlueFinal}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
