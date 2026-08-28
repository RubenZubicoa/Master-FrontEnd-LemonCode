interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
  location: string;
  episodes: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  viewCharacter: '/characters/:id',
  location: '/locations',
  episodes: '/episodes',
};
