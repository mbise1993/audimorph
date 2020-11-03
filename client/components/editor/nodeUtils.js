export const NODE_HEIGHT = 100;
export const NODE_WIDTH = 200;
export const NODES_PER_ROW = 3;
export const TOP_PADDING = 64;
export const LEFT_PADDING = 64;
export const COL_SPACING = 100;
export const ROW_SPACING = 100;
export const ADD_BUTTON_SIZE = 20;
export const ADD_BUTTON_SPACING = 10;

export const calcElementPositions = (i) => {
  const row = Math.floor(i / NODES_PER_ROW);
  let col = i % NODES_PER_ROW;
  if (row % 2 === 1) {
    col = NODES_PER_ROW - col - 1;
  }

  const isReverseRow = row % 2 === 1;
  const isLastInRow = isReverseRow ? col === 0 : col === NODES_PER_ROW - 1;

  const nodeTop = TOP_PADDING + row * (NODE_HEIGHT + ROW_SPACING);
  const nodeLeft = LEFT_PADDING + col * (NODE_WIDTH + COL_SPACING);

  const lineYStart = isLastInRow
    ? nodeTop + NODE_HEIGHT
    : nodeTop + NODE_HEIGHT / 2;

  const lineYEnd = isLastInRow ? lineYStart + ROW_SPACING : lineYStart;

  let lineXStart = 0;
  let lineXEnd = 0;
  if (isLastInRow) {
    lineXStart = nodeLeft + NODE_WIDTH / 2;
    lineXEnd = lineXStart;
  } else if (isReverseRow) {
    lineXStart = nodeLeft - COL_SPACING;
    lineXEnd = nodeLeft;
  } else {
    lineXStart = nodeLeft + NODE_WIDTH;
    lineXEnd = lineXStart + COL_SPACING;
  }

  let addButtonLeft = lineXStart + COL_SPACING / 2 - ADD_BUTTON_SIZE / 2;
  let addButtonTop = lineYStart - ADD_BUTTON_SPACING - ADD_BUTTON_SIZE;
  if (isLastInRow) {
    addButtonLeft = isReverseRow
      ? lineXStart - ADD_BUTTON_SPACING - ADD_BUTTON_SIZE
      : lineXStart + ADD_BUTTON_SPACING;

    addButtonTop = lineYStart + ROW_SPACING / 2 - ADD_BUTTON_SIZE / 2;
  }

  let firstAddButtonLeft = nodeLeft - ADD_BUTTON_SPACING - ADD_BUTTON_SIZE;
  let firstAddButtonTop = nodeTop + NODE_HEIGHT / 2 - ADD_BUTTON_SIZE / 2;

  let lastAddButtonLeft = isReverseRow
    ? nodeLeft - ADD_BUTTON_SPACING - ADD_BUTTON_SIZE
    : nodeLeft + NODE_WIDTH + ADD_BUTTON_SPACING;

  let lastAddButtonTop = nodeTop + NODE_HEIGHT / 2 - ADD_BUTTON_SIZE / 2;

  return {
    nodeTop,
    nodeLeft,
    lineYStart,
    lineYEnd,
    lineXStart,
    lineXEnd,
    addButtonLeft,
    addButtonTop,
    firstAddButtonLeft,
    firstAddButtonTop,
    lastAddButtonLeft,
    lastAddButtonTop,
  };
};
