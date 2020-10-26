/****************运动框架*******************/
        function starMove(obj,name,iTage)                                           //(对象，要改变的属性，目标属性)
        {
            clearInterval(obj.time);
            obj.time=setInterval(function()
            {
                var style=getComputedStyle(obj, false)[name];
                if(name=='opacity')                                                 //获取当前元素属性的值(注：透明度的值为小数，另行计算)
		        {
			        var cur=Math.round(parseFloat(style)*100);
		        }
                else
                {
                    var cur=parseInt(style);              
                }


                var speed=(iTage-cur)/10;                                           //速度=(目标值-当前元素的值)/系数
                speed=speed>0?Math.ceil(speed):Math.floor(speed);                   //利用math函数取整
                if(iTage==cur)
                {
                    clearInterval(obj.time);
                }
                else
                {
                    if(name=='opacity')                                            //判断要改变的是否为透明度
                    {
                        obj.style.opacity=(cur+speed)/100;
                    }
                    else
                    {
                        obj.style[name]=cur+speed+'px';
                    }
                   
                }
            },30)
        }