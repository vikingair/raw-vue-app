// eslint-disable-next-line
// @ts-ignore
import { InjectionKey } from "vue";
import {
  // eslint-disable-next-line
  // @ts-ignore
  createStore,
  // eslint-disable-next-line
  // @ts-ignore
  useStore as untypedUseStore,
  Store,
  MutationTree,
  ActionTree,
  ModuleTree,
} from "vuex";

interface State {
  filter: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    filter: "",
  } as State,
  mutations: {
    updateFilter(state, filter: string) {
      state.filter = filter;
    },
  } as MutationTree<State>,
  actions: {} as ActionTree<State, State>,
  modules: {} as ModuleTree<State>,
});

export const useStore = () => untypedUseStore(key);
