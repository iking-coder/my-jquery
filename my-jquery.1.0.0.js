/**
 * Author: king
 * Version: 1.0.0
 * Date: 2019-8-26
 */

 ;(function(global, factory){
   return factory(global);
 })(typeof window === 'object' ? window : this, function(root){
  function Liabrary(selector){
    return new Fn(selector);
  }

  function Fn(selector){
    //存在兼容性问题，该库主要是体现一种思想
    var eles = document.querySelectorAll(selector)
      i= 0,
      len = eles.length;

    for(; i < len; i++){
      this[i] = eles[i];
    }

    this.length = eles.length;

  };

  Fn.prototype = {
    css: function(key, val){
      var i = 0;

      for(; i < this.length; i++){
        this[i].style[key] = val;
      }

      return this;
    }
  }

  root._$ = root.liabrary = Liabrary;
 })