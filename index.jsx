// eslint-disable-next-line import/no-unresolved
import { React } from "uebersicht";
import { configuration, initializeConfiguration } from "./src/configuration";
import { YABAI_PATH, WIDGET, WIDGET_ID } from "./src/constants";
import TabsBar from "./src/components/TabsBar.jsx";
import StatusBar from "./src/components/StatusBar.jsx";

export const refreshFrequency = false;

export const command = `sh ${WIDGET}/scripts/command.sh ${WIDGET_ID} ${YABAI_PATH} ${configuration["tabs-bar-padding"]}`;

export const init = initializeConfiguration;

export const render = ({ output, error }) => {
  const { windows, spaces } = JSON.parse(output);

  return (
    <>
      <TabsBar windows={windows} space={spaces[0]} />
      <StatusBar spaces={spaces} />
    </>
  );
};
