import { create } from "mobx-persist";
import { AsyncStorage } from "react-native";
import auth from "./Auth";

const hydrate = create({ storage: AsyncStorage });

const appStores = {
  auth
};

// you can hydrate from multiple stores
hydrate("app", appStores.auth);
// hydrate("items", appStores.items);
// ...

export default { ...appStores };
