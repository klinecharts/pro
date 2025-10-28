import { KLineData, Nullable } from 'klinecharts';
import { createSignal } from 'solid-js';

export const [currenttick, setCurrentTick] = createSignal<Nullable<KLineData>>(null);
export const [tickTimestamp, setTickTimestamp] = createSignal<number>()
