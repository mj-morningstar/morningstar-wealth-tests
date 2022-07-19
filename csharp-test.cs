using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
​
namespace PPS.TechTest
{
​
    /// <summary>
    /// This service will be called frequently, but configured features rarely change.
    /// 
    /// Implement FeatureService so that it uses the feature API to:
    /// 1. Retrieve all active features for a specified user
    /// 2. Cache the result for a reasonable amount of time
    /// </summary>
    public class FeatureService
    {
        /// <summary>
        /// Should get all active features for a given user Id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>

        public async Task<IEnumerable<Feature>> GetActiveFeaturesForUser(int userId)
        {
            //TODO: Implement the Service
            throw new NotImplementedException();
        }
    }
​
    #region TechTest Types
    public interface IFeatureApi
    {
        Task<ApiResponse<IEnumerable<Feature>>> GetAllFeatures();
        Task<ApiResponse<IEnumerable<int>>> GetFeatureIdsForUserId(int userId);
    }
​
    public class ApiResponse<T>
    {
        public T Data { get; }
        public string ErrorMessage { get; set; }
        public HttpStatusCode StatusCode { get; set; }
    }
​
    public class Feature
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
    }
    #endregion
}