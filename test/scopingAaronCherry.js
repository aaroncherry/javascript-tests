function Module () {
          this.foo = 'bar';
        }

        request = function (callback) {
          return callback();
        };
        
        Module.prototype.req = function() {
            return request(this.method.bind(this));
        };

        Module.prototype.method = function() {
            return this.foo ;
        }
        
        var mod = new Module(),request;
        
        console.log(mod.req());

            // bar
