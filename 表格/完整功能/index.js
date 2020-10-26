
    /*************隔行变色******************/
    /*************鼠标移入高亮******************/
    /*************添加行******************/
    /*************删除行******************/
    /*************搜索（模糊搜索，大小写区分，多关键词搜索）******************/
    /*************排序******************/ 
window.onload=function()

{
    var oTab=document.getElementById('table');
    var oldcolor="";
    var oBtn1=document.getElementById('btn1');
    var oName=document.getElementById('name');
    var oAge=document.getElementById('age'); 
    var id=oTab.tBodies[0].rows.length+1;
    var oBtn2=document.getElementById('btn2');
    var oSeh=document.getElementById('search');

    for (var i=0;i<oTab.tBodies[0].rows.length;i++)
    {
    /************鼠标移入高亮**********/
        oTab.tBodies[0].rows[i].onmouseover=function()
        {
            oldcolor=this.style.background;
            this.style.background='yellow';
        }
        oTab.tBodies[0].rows[i].onmouseout=function()
        {
            this.style.background=oldcolor;                      //这里用到了oldcolor变量来存储没有鼠标事件之前表格的背景颜色
        }                                                        //等到鼠标移出之后再把之前的颜色赋给表格  
    /************隔行变色**********/
        if(i%2)
        {
            oTab.tBodies[0].rows[i].style.background='#ccc';
        }
        else
        {
            oTab.tBodies[0].rows[i].style.background='#A599C1';
        }
    } 

    /************添加**********/
    oBtn1.onclick=function()
    {
        var oTr=document.createElement('tr');
        oTab.tBodies[0].appendChild(oTr);

        var oTd=document.createElement('td');
        oTd.innerHTML=id++;
        oTr.appendChild(oTd);                              //appendChild将原有的元素从父级中删除，之后再添加到新的父级上

        var oTd=document.createElement('td');
        oTd.innerHTML=oName.value;
        oTr.appendChild(oTd);

        var oTd=document.createElement('td');
        oTd.innerHTML=oAge.value;
        oTr.appendChild(oTd);

        var oTd=document.createElement('td');
        oTd.innerHTML='<input type="button" value="删除" id="bt">';
        oTr.appendChild(oTd);
    }
    /************删除**********/       //bug

    
       /* for(var i=0;i<aDele.length;i++)
        {
            aDele[i].onclick=function()
            {
                oTab.tBodies[0].removeChild(this.parentNode.parentNode);
            }
        }*/
    /************搜索**********/
   oBtn2.onclick=function()
   {
       for(var i=0;i<oTab.tBodies[0].rows.length;i++)
       {
            if(oTab.tBodies[0].rows[i].cells[1].innerHTML==oSeh.value)
           {
            oTab.tBodies[0].rows[i].style.background='red';
           }
           else
           {
            oTab.tBodies[0].rows[i].style.background='';
           } 
       }
   }
 
    
} 