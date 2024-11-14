import { useState, FC } from "react";
import { ProviderPorps, SiteConfig } from "./types";
import ConfigContext from "./ConfigContext";

const ConfigsProvider: FC<ProviderPorps> = (props) => {
  const [configs] = useState<SiteConfig>(props.configJson);

return (
    <ConfigContext.Provider value={{configs}}>
      {props.children}
    </ConfigContext.Provider>
  );
};
export default ConfigsProvider;