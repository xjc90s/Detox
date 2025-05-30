describe.forPilot('Shape Match Game Screen', () => {
  beforeEach(async () => {
    await pilot.perform(
      'Reset react native state',
      'Enter the "Shape Matching" game screen'
    );
  });

  it('should play the Shape Matching game', async () => {
    await pilot.perform(
      'Game has started with score 0',

      'Drag the blue square into the middle of its hole',
      'Match the red circle into its hole',
      'Red circle and blue square are now in the middle of their holes, ' +
        'and the score is 2',

      'Restart the game',
      'The score has reset',

      'Drag one of the shapes with a very small offset out of its place',
      'The score is still 0',

      'Drag shapes into their holes until the score is 3',
      'All shapes are in their holes and score is now 3',
    );
  }, 500000);

  it('should play the Shape Matcher game with Autopilot', async () => {
    await pilot.autopilot('Play the shape matching game until score 2, use only the top row shapes');
  });
});
