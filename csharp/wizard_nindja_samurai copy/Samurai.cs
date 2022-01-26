using System;
using System.Collections.Generic;

namespace human
{
    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            setHealth(200);
        }
    }

}
