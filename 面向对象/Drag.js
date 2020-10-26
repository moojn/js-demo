//构造函数
function Drag(id)
    {
        var _this=this;
        this.DisX=0;                                //disx用到多次，所以放在构造函数里
        this.DisY=0;
        this.oDiv=document.getElementById(id);
        this.oDiv.onmousedown=function(event)       //静态方法
        {
            _this.fnDown(event);
            return false;                           //只要对父类进行修改子类也会修改
        }
    }
    //onmousedown
    Drag.prototype.fnDown=function(event)           //实例方法
    {
        var _this=this;
        this.DisX=event.clientX-this.oDiv.offsetLeft;
        this.DisY=event.clientY-this.oDiv.offsetTop;
        document.onmousemove=function(event)
        {
            _this.fnMove(event);
        }
        document.onmouseup=function()
        {
            _this.fnUp();
        }

    }
    //onmousemove
    Drag.prototype.fnMove=function(event)
    {
        this.oDiv.style.left=event.clientX-this.DisX+'px';
        this.oDiv.style.top=event.clientY-this.DisY+'px';
        
    }
    //onmouseup
    Drag.prototype.fnUp=function()
    {
        document.onmousemove=null;
        document.onmouseup=null;
    }