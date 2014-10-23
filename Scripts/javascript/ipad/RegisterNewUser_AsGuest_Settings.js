#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	window.scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tap();
	delayInSeconds(1);
	window.tableViews()["Empty list"].cells()["Settings"].tap();
	window.scrollViews()[0].buttons()["Login"].tap();
	window.tableViews()["Empty list"].switches()[0].setValue(1);
	target.frontMostApp().mainWindow().buttons()["Continue as Guest"].tap();

	delayInSeconds(1);

	screen("Signed in as Guest")

	var signedInAs = window.scrollViews()[0].staticTexts()["Signed in as:"].isValid();

	assertTrue(signedInAs, "Signed In As not Found");

	var guest = window.scrollViews()[0].staticTexts()["Guest"].isValid();

	assertTrue(guest, "Guest email field not Found");

	target.frontMostApp().navigationBar().buttons()["Sign Out"].tap();

	delayInSeconds(1);

	screen("Signed out")
}

test("RegisterNewUser_AsGuest_Settings", testSteps);