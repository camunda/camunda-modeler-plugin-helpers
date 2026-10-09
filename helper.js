function returnOrThrow(getter, minimalModelerVersion) {
  let result;
  try {
    result = getter();
  } catch {

    // the Modeler does not provide the export
  }

  if (!result) {
    throw new Error(`Not compatible with Camunda Modeler < ${minimalModelerVersion}`);
  }

  return result;
}

module.exports = {
  returnOrThrow
};
