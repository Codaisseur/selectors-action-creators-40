export const getDevelopers = state => state.developers.all;

export const getDeveloperFavorites = devId => state => {
  const dev = state.developers.all.find(d => d.id === parseInt(devId));
  // console.log("inside selector", dev);
  // change dev.favorites = [1,4,2] to actual resources.
  const favoriteResources = dev.favorites.map(favId => {
    return state.resources.all.find(r => r.id === favId);
  });

  return favoriteResources;
};

/*
{
      id: 1,
      name: "Kelley",
      website: "https://hi-im-kelley.netlify.com",
      favorites: [2, 3, 4, 5],
    },
*/
