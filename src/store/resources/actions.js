export const addResourceAction = ({ name, title, url }) => {
  return {
    type: "ADD_RESOURCE",
    payload: { name, title, url },
  };
};
