interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  viewCharacter: '/characters/:id',
};
