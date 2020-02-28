import EmblaCarousel from 'embla-carousel';

const embla = EmblaCarousel(document.getElementById('embla'),{
  // contains slides to the carousel viewport to prevent excessive scrolling at the beginning or the end
  containScroll: true,

  // infinite loop
  loop: true,
});

setInterval(()=>{
  embla.scrollNext();
}, 4000);


const main = async () => {

}

main();


