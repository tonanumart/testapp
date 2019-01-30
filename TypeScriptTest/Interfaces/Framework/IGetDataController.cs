using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TypeScriptTest.Interfaces.Framework
{
    public interface IGetDataController<T> 
    {
        IEnumerable<T> Get();
        T Get(int id);

    }
}
