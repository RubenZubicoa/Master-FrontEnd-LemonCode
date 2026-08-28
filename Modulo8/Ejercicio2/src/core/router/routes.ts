interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  viewCharacter: '/characters/:id',
  editCharacter: '/characters/:id/edit',
};
