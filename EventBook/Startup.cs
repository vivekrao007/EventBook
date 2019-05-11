using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EventBook.Startup))]
namespace EventBook
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
