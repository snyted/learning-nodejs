const buscarDados = async (name, age, dataApi) => {
  console.log("Buscando suas informações...");
  await dataApi({ name, age });
  console.log("Fim.");
};

buscarDados("Vitor", 24, ({ name, age }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(`Seu nome: ${name}, sua idade: ${age}`));
    }, 3000);
  });
});
