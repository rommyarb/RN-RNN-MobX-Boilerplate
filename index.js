import { Navigation } from "react-native-navigation";
import Main from "./src/screens/Main";
import { registerAllComponents } from "./src/registerAllComponents";

registerAllComponents();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "screen.Main"
      }
    }
  });
});
