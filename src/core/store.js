import { createStore, Provider } from "jotai";
import { createElement } from "react";

/**
 * Global state management powered by Jotai.
 * @see https://jotai.org/
 */
export const store = createStore();

export function StoreProvider(props) {
    return createElement(Provider, { store, ...props });
}