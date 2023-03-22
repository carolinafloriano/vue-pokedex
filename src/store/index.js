import { defineStore } from "pinia";
import state from "../store/state";
import getters from "../store/getters";
import actions from "../store/actions";

export const useStore = defineStore("store", {
  state,
  getters,
  actions,
});
