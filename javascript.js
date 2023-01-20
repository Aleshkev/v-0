var site_pages=['./index.html', './cpp.html', './imagine.html']

function getRandomPageLocation()
{
	return site_pages[randint(0, site_pages.length)];
}

function redirectToRandomPage()
{
	self.location = getRandomPageLocation();
}

/** Some functions that doesn't have nothing common with webpage **/

function randint(begin, end)
{
	return Math.floor((Math.random()*(end-begin))+begin);
}
