const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  run: ["01-01", "01-03", "01-04"],
  water: ["01-01", "01-02", "01-05", "01-06"],
  food: ["01-02", "01-04"],
  journal: ["01-03", "01-05"],
  takePills: ["01-01", "01-02", "01-05"],
}

nlwSetup.setData(data);
nlwSetup.load();