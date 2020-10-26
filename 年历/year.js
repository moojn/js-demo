
window.onload=function()
{
	var oDiv=document.getElementById('div1');
	var oLi=oDiv.getElementsByTagName('li');
	var oTxt=document.getElementById('text');
	
	for(var i=0;i<oLi.length;i++)         //遍历li添加onmouseoveer事件
	{	
		oLi[i].index=i;
		oLi[i].onmouseover=function()  
		{
			
			for(var i=0;i<oLi.length;i++)    //先清除所有的active再为当前li增加active
			{
				oLi[i].className=' ';
			}
			this.className='active2';
			oTxt.innerHTML='<p><h2>'+(this.index+1)+'月</h2></p>';
		};
		
	}

}
