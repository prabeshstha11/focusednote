let storeStory = document.getElementById("story");

let wordCount = () => {
  let words = storeStory.value;
  words = words.split(" ");
  words = words.filter((e) => {
    return e != "";
  });
  console.log(words.length);
  /*
  if (words.length === 1000) {
    alert("Congratulations! You completed today's goal. Wanna... Continue?");
  }*/

  localStorage.setItem("getStory", storeStory.value);
};

let saveFile = () => {
  const saveTxt = new Blob([storeStory.value], { type: "txt" });
  const fileURL = URL.createObjectURL(saveTxt);
  const link = document.createElement("a");
  link.download = "Untitled";
  link.href = fileURL;
  link.click();
};

storeStory.addEventListener("input", wordCount);
storeStory.innerText = localStorage.getItem("getStory");

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() == "s" && e.ctrlKey) {
    e.preventDefault();
    saveFile();
  }
});
