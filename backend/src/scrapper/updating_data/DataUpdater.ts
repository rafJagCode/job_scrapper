import updateData from './updateData.js';
import cron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();

class DataUpdater {
  private job: cron.ScheduledTask;
  private updating = false;

  constructor() {
    this.job = cron.schedule(process.env.CRON_SCHEDULE, () => this.update(), {
      scheduled: false,
      timezone: 'Europe/Warsaw',
    });
  }

  async update() {
    const start = process.hrtime();
    console.log('Data updating in progress...');
    this.updating = true;
    await updateData();
    this.updating = false;
    console.log(`Data updating finished in ${process.hrtime(start)[0]} seconds.`);
  }

  isUpdating() {
    return this.updating;
  }

  start() {
    this.job.start();
  }
}

export default DataUpdater;
