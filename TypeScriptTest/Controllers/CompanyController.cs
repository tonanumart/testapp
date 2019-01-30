using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TypeScriptTest.Interfaces.Framework;
using TypeScriptTest.Models.ViewModels;

namespace TypeScriptTest.Controllers
{
    public class CompanyController : ApiController, IGetDataController<Company>
    {

        public CompanyController() {
            mockOfData = new List<Company>();
            mockOfData.Add(new Company() { Id = 1, Name = "Connex" });
        }

        public IEnumerable<Company> Get()
        {
            return mockOfData;
        }

        public Company Get(int id)
        {
            return mockOfData.FirstOrDefault();
        }

        public List<Company> mockOfData { get; set; }
    }
}
