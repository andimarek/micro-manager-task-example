// taskApi.registerTask();
taskApi.registerTask({ namex: 'my-task' }, () => {
    console.log('executing task');
    // add(1, 2);
    return Promise.resolve();
});
