import Entity from "./Entity.js";
import State from "./Entity/State.js";

let root = document.getElementById('root');
let element = document.createElement('div');
element.style.position = 'absolute';
element.style.backgroundColor = 'red';

let pointState = new State({x: innerWidth / 2 - 5, y: innerHeight / 2 - 5}, {x: 1, y: 1}, {x: 0, y: 0});
let point = new Entity(element, pointState, 10, 10);

root.append(point.target);

setInterval(() => {
    point.state.speed.x += Math.random() - 0.5;
    point.state.speed.y += Math.random() - 0.5;

    point.state.position.x += point.state.speed.x;
    point.state.position.y += point.state.speed.y;

    if (point.state.position.x <= 0) {
        point.state.position.x = 0;
        point.state.speed.x = 1;
    } else if (point.state.position.x >= window.innerWidth - point.width) {
        point.state.position.x = window.innerWidth - point.width;
        point.state.speed.x = -1;
    }

    if (point.state.position.y <= 0) {
        point.state.position.y = 0;
        point.state.speed.y = 1;
    } else if (point.state.position.y >= window.innerHeight - point.height) {
        point.state.position.y = window.innerHeight - point.height;
        point.state.speed.y = -1;
    }

    point.target.style.left = `${point.state.position.x}px`;
    point.target.style.top = `${point.state.position.y}px`;
}, 33);
