using Quartz;
using Quartz.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventBook.MailSchedule
{
    public class Scheduler
    {
        public static void Start_9_high()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMail>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(9, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
        public static void Start_12_high()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMail>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(12, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
        public static void Start_16_high()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMail>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(16, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
        public static void Start_9_Medium()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMailMedium>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(9, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
        public static void Start_16_Medium()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMailMedium>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(16, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
        public static void Start_12_Low()
        {
            IScheduler sc = StdSchedulerFactory.GetDefaultScheduler();
            sc.Start();
            IJobDetail job = JobBuilder.Create<ScheduledMailLow>().Build();

            ITrigger trigger = TriggerBuilder.Create()
                .WithDailyTimeIntervalSchedule
                  (s =>
                     s.WithIntervalInHours(24)
                    .OnEveryDay()
                    .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(12, 00))
                  )
                .Build();
            sc.ScheduleJob(job, trigger);
        }
    }
}
