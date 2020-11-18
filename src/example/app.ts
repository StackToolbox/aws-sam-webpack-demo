export const handler = async () => {
  console.log(process.version);
  console.log(process.env);
  for (let i = 0; i < 10; i++) {
      console.log("Number %d", i);
  }
  throw new Error("Ugh!");
  return { message: "Hello" };
};
