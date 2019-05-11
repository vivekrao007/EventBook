using System;

namespace EventBook
{
    internal class JobDetail
    {
        private Type type;
        private string v;

        public JobDetail(string v, Type type)
        {
            this.v = v;
            this.type = type;
        }
    }
}