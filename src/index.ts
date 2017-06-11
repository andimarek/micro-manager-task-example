
taskApi.registerTask({ name: 'my-task' }, () => {
  console.log('executing task');
  // add(1, 2);
  return Promise.resolve();
});
