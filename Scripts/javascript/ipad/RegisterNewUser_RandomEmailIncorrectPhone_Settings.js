#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	var email = randomEmail(8);
	var passWord = "password1234";
	var phone = phoneNumber(9);

	window.scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"].tap();
	delayInSeconds(1);
	window.tableViews()["Empty list"].cells()["Settings"].tap();
	window.scrollViews()[0].buttons()["Register Now"].tap();
	window.tableViews()["Empty list"].cells()["First Name"].textFields()["First Name"].tap();
	target.frontMostApp().keyboard().typeString("Automation");
	window.tableViews()["Empty list"].cells()["Last Name"].textFields()["Last Name"].tap();
	target.frontMostApp().keyboard().typeString("Pni");
	window.tableViews()["Empty list"].cells()["Phone Number"].textFields()["Phone Number"].tap();
	target.frontMostApp().keyboard().typeString(phone);
	window.tableViews()["Empty list"].cells()["E-Mail"].textFields()["E-Mail"].tap();
	target.frontMostApp().keyboard().typeString(email);
	window.tableViews()["Empty list"].cells()["Password"].secureTextFields()["Password"].tap();
	target.frontMostApp().keyboard().typeString(passWord);
	window.tableViews()["Empty list"].switches()[0].setValue(1);
	window.tableViews()["Empty list"].switches()[1].setValue(1);
	window.tableViews()["Empty list"].scrollViews()[0].webViews()[0].staticTexts()["I accept Walmart Photo Centre's"].tap();

	delayInSeconds(1);

	window.buttons()["Register Now"].tap();

	delayInSeconds(1);

	screen("Clicked 'Register Now'")

	var warningMessage = window.staticTexts()["Please correct the phone number."].isValid();

	assertTrue(warningMessage, "'Please correct the phone number.' not Found");

	var warningTitle = window.staticTexts()["Invalid Entry"].isValid();

	assertTrue(warningTitle, "'Invalid Entry' not Found");

	window.buttons()["OK"].tap();

	delayInSeconds(1);

	screen("Warning dismissed")
}

test("RegisterNewUser_RandomEmailIncorrectPhone_Settings", testSteps);