import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class AuthStore {
  authStore: boolean = false;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      authStore: observable,
      setAuthStore: action,
      getAuthStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getAuthStore() {
    return this.authStore;
  }

  setAuthStore = (status: boolean) => {
    this.authStore = status;
  };
}