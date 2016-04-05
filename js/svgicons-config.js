var svgIconConfig = {
	hamburgerCross : {
		url : 'images/svg/hamburger.svg',
		animation : [
			{ 
				el : 'path:nth-child(1)', 
				animProperties : { 
					from : { val : '{"path" : "M 5.0916789,20.818994 30.8166421,20.818994"}' }, 
					to : { val : '{"path" : "M 5.0916789,17.818994 30.8166422,43.95698"}' }
				} 
			},
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
					to : { val : '{"opacity" : 0}' }
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val : '{"path" : "M 5.0916788,38.95698 30.8166422,38.95698"}' }, 
					to : { val : '{"path" : "M 5.0916788,43.95698 30.8166421,17.818994"}' }
				} 
			}
		]
	}
};