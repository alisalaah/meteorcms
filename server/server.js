/* Server-side code
 */
 
Meteor.publish("navmenu", function () {
	return NavMenu.find({}, {fields: {page: 1, label: 1, order: 1, url: 1}});
});
Meteor.publish("pages", function () {
	return Pages.find({}, {fields: {page: 1, title: 1, content: 1}});
});