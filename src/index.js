import EmblaCarousel from 'embla-carousel';
import chatRouter from './chatRouter';

const chatInput = document.querySelector("#chat-input");
const chatContainer = document.querySelector("#chat-window");
const chatHead = document.querySelector("#chat-head");
const closeButton = document.querySelector("#close");

const embla = EmblaCarousel(document.getElementById('embla'),{
  // contains slides to the carousel viewport to prevent excessive scrolling at the beginning or the end
  containScroll: true,

  // infinite loop
  loop: true,
});

setInterval(()=>{
  embla.scrollNext();
}, 4000);

chatInput.addEventListener("keydown", async e => {
  if (e.keyCode !== 13) return;

  chatContainer.innerHTML += `
    <div class="chat-bubble user">
      ${e.target.value}
    </div>
  `;

  chatContainer.innerHTML += `
    <div class="chat-bubble">
      ${await chatRouter(e.target.value)}
    </div>
  `;
  chatContainer.scrollTop = chatContainer.scrollHeight;

  e.target.value = "";
  chatInput.focus();

  //hacky need to fix ew.
  document.querySelector("#close").addEventListener("click", e=> {
    chatContainer.style.display = "none";
    chatInput.style.display = "none";
  });

});

chatHead.addEventListener("click", e=> {
  chatContainer.style.display = "block";
  chatInput.style.display = "block";
});

closeButton.addEventListener("click", e=> {
  chatContainer.style.display = "none";
  chatInput.style.display = "none";
});

