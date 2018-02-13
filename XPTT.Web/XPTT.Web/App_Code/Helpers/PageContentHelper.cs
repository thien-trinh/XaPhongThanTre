using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;

namespace XPTT.Web.App_Code.Helpers
{
    public static class PageContentHelper
    {
        public static IPublishedContent GetHomePage(IPublishedContent currentPage)
        {
            if ((currentPage != null))
            {
                return currentPage.AncestorOrSelf(1);
            }
            return null;
        }
    }
}