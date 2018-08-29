// Instantiate the home screen grid so we can drag icons around
var grid = new Muuri('.grid', {
    layoutDuration: 400,
    layoutEasing: 'ease',
    dragEnabled: true,
    dragSortInterval: 100,
    dragStartPredicate: {
      // To drag an icon a user must click and hold for one second
      delay: 1000
    },
    dragReleaseDuration: 400,
    dragReleaseEasing: 'ease'
  });
  