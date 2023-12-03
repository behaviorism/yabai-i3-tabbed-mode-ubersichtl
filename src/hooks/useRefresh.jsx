// eslint-disable-next-line import/no-unresolved
import { React } from "uebersicht";
import { init, setRefresherHandler } from "../refreshServer/refreshServer";

const useRefresh = () => {
  const [refreshState, setRefresh] = React.useState(true);

  init();
  setRefresherHandler(() => setRefresh((prev) => !prev));

  return refreshState;
};

export default useRefresh;
