import { useState, FC } from "react";
import { ProviderPorps, ConfigObject } from "./types";
import ConfigContext from "./ConfigContext";

const ConfigsProvider: FC<ProviderPorps> = (props) => {
  const [configs, setConfigs] = useState<any>(props.configJson);
  const addConfig = (prevConfig:any, newConfig: ConfigObject) => {
   prevConfig[newConfig.key] = newConfig.value;
   setConfigs(prevConfig);
}

return (
    <ConfigContext.Provider value={{configs,addConfig}}>
      {props.children}
    </ConfigContext.Provider>
  );
};
export default ConfigsProvider;