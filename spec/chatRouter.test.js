import chatRouter from '../src/chatRouter';

test("default case should respond with", async () =>{
  expect(await chatRouter("test")).toBe("Yeah, that's a no.");
});

test("when scoops ahoy should respond with: Scoops Ahoy!", async () =>{
  expect(await chatRouter("scoops ahoy")).toBe("Scoops Ahoy!");
});
