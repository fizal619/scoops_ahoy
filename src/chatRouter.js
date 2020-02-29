import axios from 'axios';

export default async input => {
  let response = "Yeah, that's a no.";
  // normalize input
  input = input.toLowerCase();

  if (/scoops ahoy\!?$/.test(input)) {
    response = "Scoops Ahoy!";
  }

  if (/where are you (located|found)\??$/.test(input)) {
    response = "Starcourt mall, Hawkins Indiana";
  }

  if (/what do you think of kids\??$/.test(input)) {
    const rand = Math.floor(Math.random()*2);
    const responses = [
      "Turns out I'm a pretty damn good babysitter",
      "Man, kids are the worst! Who needs 'em, anyway?"
    ];
    response = responses[rand];
  }

  if (/is there ice ?cream (in|at) [0-9]+\??$/.test(input)) {
    const iceCreamLocations = await axios.get("https://project.wnyc.org/ice-cream/data/places.json");
    console.log(iceCreamLocations);
    const zip = input.match(/[0-9]+/)[0];
    const iceCreamList = [];

    for (let index = 0; index < iceCreamLocations.data.length; index++) {
      const location = iceCreamLocations.data[index];
      if (location.address.includes(zip + "")){
        iceCreamList.push(`${location.name} - ${location.address}`);
      }
      if (iceCreamList.length === 10) {
        break;
      }
    }
    console.log(zip);

    response = iceCreamList.join("<br/><br/>");
  }

  return response;
}
