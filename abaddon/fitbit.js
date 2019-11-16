






//activeminute handling
var OldSteps = global('Steps'),
	OldFloors = global('Floors'),
	OldLight = global('Light'),
	OldFair = global('Fair'),
	OldVery = global('Very'),


	
   	Light = lightlyactiveminutes,
   	dLight = Light - OldLight,
    Fair = fairlyactiveminutes,
   	dFair = Fair - OldFair,
    Very = veryactiveminutes,
   	dVery = Very - OldVery,






setGlobal('Light',Light)
setGlobal('Fair',Fair)
setGlobal('Very',Very)
setGlobal('dLight',dLight)
setGlobal('dFair',dFair)
setGlobal('dVery',dVery)

var 
