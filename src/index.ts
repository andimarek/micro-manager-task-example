// import { registerTask } from 'micro-manager-task-api';
// const { registerTask: registerTask } = global.taskApi;
// import 'micro-manager-task-api';
interface TaskConfig {
    name: string;
}
interface TaskCallback {
    (): Promise<any>;
}
interface TaskApi {
  registerTask(taskConfig: TaskConfig, callback: TaskCallback): string;
}

declare const taskApi: TaskApi;

import { add } from 'lodash';


taskApi.registerTask({ name: 'my-task' }, () => {
  console.log('executing task');
  add(1,2);
  return Promise.resolve();
});
