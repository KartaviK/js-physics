import Vector from "../Vector";

export default class State<T extends Vector> {
    private _position: T;
    private _speed: T;
    private _direction: T;

    constructor(position: T, speed: T, direction: T) {
        this._position = position;
        this._speed = speed;
        this._direction = direction;
    }

    get position(): T {
        return this._position;
    }

    set position(value: T) {
        this._position = value;
    }

    get speed(): T {
        return this._speed;
    }

    set speed(value: T) {
        this._speed = value;
    }

    get direction(): T {
        return this._direction;
    }

    set direction(value: T) {
        this._direction = value;
    }
}
