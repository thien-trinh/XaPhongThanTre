﻿ 

namespace XPTT.Web.Extentions
{
    using Merchello.Core.Models;
    using Merchello.Web.Workflow;
    /// <summary>
    /// Extension methods for customer classes.
    /// </summary>
    public static class CustomerExtensions
    {
        /// <summary>
        /// Returns the <see cref="IBasket"/> for the customer
        /// </summary>
        /// <param name="customer">The <see cref="ICustomerBase"/></param>
        /// <returns>The <see cref="IBasket"/></returns>
        public static IBasket Basket(this ICustomerBase customer)
        {
            return Merchello.Web.Workflow.Basket.GetBasket(customer);
        }

        ///// <summary>
        ///// Backoffice's the specified customer.
        ///// </summary>
        ///// <param name="customer">The customer.</param>
        ///// <returns></returns>
        //internal static IBackoffice Backoffice(this ICustomerBase customer)
        //{
        //    return Workflow.Backoffice.GetBackoffice(customer);
        //}

        /// <summary>
        /// The wish list.
        /// </summary>
        /// <param name="customer">
        /// The customer.
        /// </param>
        /// <returns>
        /// The <see cref="IWishList"/>.
        /// </returns>
        public static IWishList WishList(this ICustomer customer)
        {
            return Merchello.Web.Workflow.WishList.GetWishList(customer);
        }
    }
}