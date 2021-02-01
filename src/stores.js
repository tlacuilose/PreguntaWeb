import { writable } from 'svelte/store';

export const isShowingAnswered = writable(true);

export const showsNewAns = writable(false);
export const showsNewReport = writable(false);
export const reportItemID = writable('no-id');
export const reportItemType = writable('no-type');
export const reportItemLegend = writable('sin-nombre');
