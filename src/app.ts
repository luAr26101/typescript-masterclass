console.log("works");
// const button = document.getElementById("button");
interface Keyboard {
  type: string;
  modelID: number;
}

const createKeyboard = (modelID: number): Keyboard => {
  return { type: "keyboard", modelID };
};
