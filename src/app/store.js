import { reactive } from "vue";
import { seedData } from "./seed";

export const store = {
  state: {
    data: reactive(seedData),
  },
};
