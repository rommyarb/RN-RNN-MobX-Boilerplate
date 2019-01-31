import { observable, action } from "mobx";
import { persist } from "mobx-persist";

class Auth {
  @persist @observable name = "";

  @action onChangeName(input) {
    this.name = input;
  }
}

export default new Auth();
