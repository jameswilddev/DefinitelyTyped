import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike | undefined;
}
export default class Fill {
    constructor(opt_options?: Options);
    clone(): Fill;
    getChecksum(): string;
    getColor(): Color | ColorLike;
    setColor(color: Color | ColorLike): void;
}
