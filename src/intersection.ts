type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textbox: UIWidget = {
    drag: () => {
        console.log('Dragging');
    },
    resize: () => {
        console.log('Resizing');
    }
};