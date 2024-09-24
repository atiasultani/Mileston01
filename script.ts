
const keyA = document.getElementById("key") as HTMLButtonElement ;

let block = document.getElementById("skills") as HTMLElement;

keyA.addEventListener('click' , () => {
  if (block.style.display === 'none' || block.style.display === 'block') {
      block.style.display = 'block';} else {     
      block.style.display = 'none';
  }
});