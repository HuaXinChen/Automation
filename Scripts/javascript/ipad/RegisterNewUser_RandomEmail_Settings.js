#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	var email = randomEmail(8);
	var passWord = "password1234";


	window.scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tap();
	delayInSeconds(1);
	window.tableViews()["Empty list"].cells()["Settings"].tap();
	window.scrollViews()[0].buttons()["Register Now"].tap();


	window.tableViews()["Empty list"].cells()["First Name"].textFields()["First Name"].tap();
	target.frontMostApp().keyboard().typeString("Automation");
	window.tableViews()["Empty list"].cells()["Last Name"].textFields()["Last Name"].tap();
	target.frontMostApp().keyboard().typeString("Pni");
	window.tableViews()["Empty list"].cells()["Phone Number"].textFields()["Phone Number"].tap();
	target.frontMostApp().keyboard().typeString("1234567890");
	window.tableViews()["Empty list"].cells()["E-Mail"].textFields()["E-Mail"].tap();
	target.frontMostApp().keyboard().typeString(email);
	window.tableViews()["Empty list"].cells()["Password"].secureTextFields()["Password"].tap();
	target.frontMostApp().keyboard().typeString(passWord);
	window.tableViews()["Empty list"].switches()[0].setValue(1);
	window.tableViews()["Empty list"].switches()[1].setValue(1);
	window.tableViews()["Empty list"].scrollViews()[0].webViews()[0].staticTexts()["I accept Walmart Photo Centre's"].tap();

	delayInSeconds(1);

	window.buttons()["Register Now"].tap();

	delayInSeconds(2);

	screen("Signed in")

	var signedInAs = window.scrollViews()[0].staticTexts()["Signed in as:"].isValid();

	assertTrue(signedInAs, "Signed In As not Found");

	var emailID = window.scrollViews()[0].staticTexts()[email].isValid();

	assertTrue(emailID, "Email Id not Found");

	target.frontMostApp().navigationBar().buttons()["Sign Out"].tap();

	delayInSeconds(2);

	screen("Signed out")
}

test("RegisterNewUser_RandomEmail_Settings", testSteps);