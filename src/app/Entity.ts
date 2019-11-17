import State from "./Entity/State.js";
import Vector from "./Vector";

class Entity<T extends State<Vector>> {
    private _state: T;
    private readonly _target: HTMLElement;

    constructor(target: HTMLElement, state: T, width: number, height: number) {
        this._state = state;
        this._target = target;

        this.target.style.left = `${state.position.x}px`;
        this.target.style.top = `${state.position.y}px`;
        this.target.style.width = `${width}px`;
        this.target.style.height = `${height}px`;
    }

    get target(): HTMLElement {
        return this._target;
    }

    get state(): T {
        return this._state;
    }

    set state(value: T) {
        this._state = value;
    }

    get width(): number {
        return parseInt(this.target.style.width);
    }

    set width(value: number) {
        this.target.style.width = `${value}px`;
    }

    get height(): number {
        return parseInt(this.target.style.height);
    }

    set height(value: number) {
        this.target.style.height = `${value}px`;
    }
}

export default Entity;
