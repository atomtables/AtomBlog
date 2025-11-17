import {writable} from "svelte/store";
import {crossfade, fade} from "svelte/transition";

export let [animIn, animOut] = crossfade(fade);