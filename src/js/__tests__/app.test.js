import Team from '../app';

test('Method adds a single character "Daemon"', () => {
  const team = new Team();

  team.add('Daemon');
  expect(team.members).toContain('Daemon');
});

test('Method add throws an error if existing character "Daemon" is added', () => {
  const team = new Team();

  team.add('Daemon');
  expect(() => team.add('Daemon')).toThrowError();
});

test('Method addAll adds several characters', () => {
  const team = new Team();

  team.addAll('Daemon', 'Zombie', 'Snowman');
  expect(team.members).toContain('Daemon', 'Zombie', 'Snowman');
});

test('Method toArray converts set to array', () => {
  const team = new Team();

  team.addAll('Daemon', 'Zombie', 'Snowman');
  expect(team.toArray()).toEqual(['Daemon', 'Zombie', 'Snowman']);
});