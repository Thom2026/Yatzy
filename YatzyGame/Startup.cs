using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(YatzyGame.Startup))]
namespace YatzyGame
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
