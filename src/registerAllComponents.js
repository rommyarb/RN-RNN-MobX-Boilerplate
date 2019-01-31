import { Navigation } from "react-native-navigation";
import Provider from "./utils/MobxRnnProvider";
import stores from "./stores";

// put your screens here
const components = [
  {
    componentName: "screen.Main",
    componentClassFunc: () => require("./screens/Main").default
  }
];

export function registerAllComponents() {
  components.forEach(comp =>
    Navigation.registerComponentWithRedux(
      comp.componentName,
      comp.componentClassFunc,
      Provider,
      stores
    )
  );
}
