/* Templating system
 * Layouts can define multiple body templates if wanted
 * Containers can define multiple page templates if wanted
 * The page templates will then output the main content
 * Any layouts or pages can display other content such as a widget, etc.
 */

Template.page.content = function () {
	if (!Session.get('page')) {
		page = 'home'; }
	else {
		page = Session.get('page'); }
	
	result = Pages.findOne({'page': page});
	return (result !== undefined) ? result.content : "";
};

// Rendering navmenu items
Template.navmenu.items = function () {
	console.log(NavMenu.findOne({}));
    return NavMenu.find({});
};

