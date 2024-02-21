import { root_reduser } from "./reducer/rduser";
import { createStore } from "redux";

export const store = createStore(root_reduser)